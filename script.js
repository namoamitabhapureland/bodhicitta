let db = JSON.parse(localStorage.getItem('PX_V14.3')) || { name: "", totalNian: 0, points: 0, dailyTasks: [], lastDate: new Date().toLocaleDateString() };
const tasks = ["普賢十大願修行", "五戒十善持守", "親近供養三寶", "財布施與法布施修行", "興建塔廟造像功德", "供養護持三寶資糧", "每日定課誦經念佛", "受持清淨八關齋戒", "分享傳遞佛法善知識", "一念至誠普皆回向"];
let nianCount = 0;

function speak(t) {
    window.speechSynthesis.cancel();
    const m = new SpeechSynthesisUtterance(t.replace(/阿/g, '喔'));
    m.lang = 'zh-TW'; m.rate = 0.8;
    window.speechSynthesis.speak(m);
}

function startApp() {
    const n = document.getElementById('user-name').value;
    if(!n) return alert("請留名號");
    db.name = n; save(); showScreen(2); updateUI();
}

function handleNian() {
    if (nianCount < 10) {
        nianCount++; db.totalNian++;
        document.getElementById('nian-word').innerText = "南無阿彌陀佛";
        speak("南無阿彌陀佛");
        const offset = 816 - (nianCount * 81.6);
        document.getElementById('nian-progress').style.strokeDashoffset = offset;
        document.getElementById('nian-num').innerText = nianCount + " / 10";
        if(nianCount === 10) {
            setTimeout(() => document.getElementById('bodhi-layer').style.display = 'flex', 500);
        }
    }
}

function updateUI() {
    document.getElementById('total-count').innerText = db.totalNian;
    let days = db.points / 100;
    document.getElementById('streak-val').innerText = days.toFixed(1);
    document.getElementById('streak-bar').style.width = Math.min(days, 100) + '%';
    document.getElementById('display-name').innerText = db.name || "行者";
    // 依據分數自動換稱號
    const ranks = ["初信位", "二信位", "三信位", "四信位", "五信位", "不退轉"];
    let idx = Math.min(Math.floor(days / 20), 5);
    document.getElementById('rank-title').innerText = ranks[idx];
}

function renderTasks() {
    const list = document.getElementById('task-list');
    list.innerHTML = "";
    tasks.forEach((t, i) => {
        const done = db.dailyTasks.includes(i);
        const card = document.createElement('div');
        card.className = `task-card ${done?'completed':''}`;
        card.innerHTML = `<div style="font-size:0.8rem; color:var(--gold);">${t}</div><div class="task-bar"><div class="task-fill" style="width:${done?'100%':'0%'}"></div></div>`;
        if(!done) card.onclick = () => { db.dailyTasks.push(i); db.points += 10; renderTasks(); updateUI(); speak(t+"圓滿"); };
        list.appendChild(card);
    });
}

function showScreen(n) {
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    document.getElementById('screen-' + n).classList.add('active');
    if(n === 3) renderTasks();
}

function updateClock() {
    const now = new Date();
    document.getElementById('earth-time').innerText = now.toLocaleTimeString();
    const pure = db.points + (now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds())/86400;
    document.getElementById('pure-time').innerText = `${Math.floor(pure)} 年${(pure%1).toFixed(4).substring(1)}`;
}

setInterval(updateClock, 1000);
function save() { localStorage.setItem('PX_V14.3', JSON.stringify(db)); }
function confirmBodhi() { document.getElementById('bodhi-layer').style.display='none'; showScreen(3); }
function goHome() { nianCount = 0; document.getElementById('nian-progress').style.strokeDashoffset = 816; document.getElementById('nian-num').innerText = "0 / 10"; showScreen(1); }
function finishSession() { save(); alert("功德圓滿"); goHome(); }
function openLib() { document.getElementById('lib-modal').style.display='flex'; }
function exportProgress() { const b = new Blob([JSON.stringify(db)], {type:'application/json'}); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = '資糧.json'; a.click(); }
function importProgress(i) { const r = new FileReader(); r.onload = (e) => { db = JSON.parse(e.target.result); save(); location.reload(); }; r.readAsText(i.files[0]); }

updateUI();
