let db = JSON.parse(localStorage.getItem('PX_V14.3')) || { name: "", totalNian: 0, points: 0, dailyTasks: [], todayCount: 0, lastDate: new Date().toLocaleDateString() };
const tasks = ["普賢十大願修行", "五戒十善持守", "親近供養三寶", "財布施與法布施修行", "興建塔廟造像功德", "供養護持三寶資糧", "每日定課誦經念佛", "受持清淨八關齋戒", "分享傳遞佛法善知識", "一念至誠普皆回向"];
const sutras = ["大自在神通。無量清淨。等無差別。", "一塵中有塵數剎。一一剎有難思佛。", "以此大願。隨順趣入。成就菩提。", "不取眾相。復於諸法實相。不生執著。"];
let nianCount = 0; let audioCtx = null;

const rankConfig = [
    { day: 0,   label: "初信位", color: "#d4af37", icon: "✨" },
    { day: 20,  label: "二信位", color: "#d4af37", icon: "🌱" },
    { day: 40,  label: "三信位", color: "#d4af37", icon: "🌿" },
    { day: 60,  label: "四信位", color: "#d4af37", icon: "🍀" },
    { day: 80,  label: "五信位", color: "#d4af37", icon: "🌹" },
    { day: 100, label: "不退轉", color: "#d4af37", icon: "🪷" }
];

function playCosmicTone() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.type = 'sine'; osc.frequency.setValueAtTime(432, audioCtx.currentTime); 
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(); setTimeout(() => osc.stop(), 2000);
    } catch(e) {}
}

function speak(t, r) { 
    window.speechSynthesis.cancel();
    const m = new SpeechSynthesisUtterance(t.replace(/阿/g, '喔'));
    m.lang = 'zh-TW'; m.rate = r;
    window.speechSynthesis.speak(m);
}

function startApp() {
    const name = document.getElementById('user-name').value;
    if(!name) return alert("請留名號");
    db.name = name;
    const today = new Date().toLocaleDateString();
    if (db.lastDate !== today) { db.todayCount = 0; db.lastDate = today; }
    db.todayCount++; save();
    speak(sutras[Math.floor(Math.random() * sutras.length)], 0.8);
    playCosmicTone(); showScreen(2); updateUI();
}

function updateUI() {
    document.getElementById('total-count').innerText = db.totalNian;
    let totalDays = db.points / 100;
    document.getElementById('streak-val').innerText = totalDays.toFixed(1);
    document.getElementById('streak-bar').style.width = Math.min(totalDays, 100) + '%';
    const current = [...rankConfig].reverse().find(r => totalDays >= r.day) || rankConfig[0];
    document.getElementById('rank-title').innerText = current.label;
    document.getElementById('display-name').innerText = db.name || "行者";
    document.getElementById('mini-seed').innerText = current.icon;
    document.getElementById('big-seed').innerText = current.icon;
    document.getElementById('growth-lv').innerText = totalDays >= 100 ? "極樂蓮開" : current.label;
}

function handleNian() {
    if (nianCount < 10) {
        nianCount++; db.totalNian++;
        document.getElementById('nian-word').innerText = "南無阿彌陀佛";
        setTimeout(()=> document.getElementById('nian-word').innerText="", 500);
        speak("南無阿彌陀佛", 0.75);
        document.getElementById('nian-progress').style.strokeDashoffset = 754 - (nianCount*75.4); 
        document.getElementById('nian-num').innerText = nianCount+" / 10"; 
        createDust(20);
        if(nianCount===10) setTimeout(()=>document.getElementById('bodhi-layer').style.display='flex', 800);
    }
}

function createDust(count) {
    const layer = document.getElementById('gold-dust-layer');
    const seed = document.getElementById('big-seed');
    const rect = seed.getBoundingClientRect();
    for(let i=0; i<count; i++){
        const d = document.createElement('div'); d.className = 'dust';
        d.style.width = d.style.height = (Math.random()*4+1)+'px';
        d.style.left = (rect.left + rect.width/2)+'px'; d.style.top = (rect.top + rect.height/2)+'px';
        layer.appendChild(d);
        const a = Math.random()*Math.PI*2, dist = Math.random()*150+50;
        d.animate([{transform:'scale(1)',opacity:1},{transform:`translate(${Math.cos(a)*dist}px,${Math.sin(a)*dist}px) scale(0)`,opacity:0}], 1200);
        setTimeout(()=>d.remove(), 1200);
    }
}

function renderTasks() {
    const container = document.getElementById('task-list');
    container.innerHTML = "";
    tasks.forEach((t, i) => {
        const isDone = db.dailyTasks.includes(i);
        const card = document.createElement('div');
        card.className = `task-card ${isDone?'completed':''}`;
        card.innerHTML = `<div style="position:absolute; top:5px; left:8px; font-size:0.7rem; color:var(--gold); opacity:0.6;">${i+1}</div>
            <div style="font-size:0.85rem; color:var(--gold); text-align:center; padding:0 5px;">${t}</div>
            <div class="task-bar"><div class="task-fill" style="width:${isDone?'100%':'0%'}"></div></div>`;
        if(!isDone) card.onclick = () => { db.dailyTasks.push(i); db.points+=10; renderTasks(); updateUI(); speak(t+"圓滿", 0.8); };
        container.appendChild(card);
    });
}

function updateClock() {
    const now = new Date();
    document.getElementById('earth-time').innerText = now.toLocaleTimeString();
    const dayPercent = (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() + now.getMilliseconds()/1000) / 86400;
    const totalPureYears = db.points + dayPercent;
    document.getElementById('pure-time').innerText = `${Math.floor(totalPureYears)} 年${(totalPureYears % 1).toFixed(4).substring(1)}`;
}
setInterval(updateClock, 50);

function save() { localStorage.setItem('PX_V14.3', JSON.stringify(db)); }
function showScreen(n) { 
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    document.getElementById('screen-'+n).classList.add('active'); 
    if(n===3) renderTasks();
}
function confirmBodhi() { document.getElementById('bodhi-layer').style.display='none'; showScreen(3); }
function goHome() { nianCount=0; document.getElementById('nian-progress').style.strokeDashoffset = 754; document.getElementById('nian-num').innerText="0 / 10"; showScreen(1); updateUI(); }
function finishSession() { save(); alert("今日修行資糧已封存"); goHome(); }
function exportProgress() { const blob = new Blob([JSON.stringify(db)], {type: 'application/json'}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${db.name}_備份.json`; a.click(); }
function importProgress(i) { const reader = new FileReader(); reader.onload = (e) => { db = JSON.parse(e.target.result); save(); location.reload(); }; reader.readAsText(i.files[0]); }
function openLib() { document.getElementById('lib-modal').style.display = 'flex'; }
updateUI();
