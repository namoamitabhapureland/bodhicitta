// 基礎資料庫
let db = JSON.parse(localStorage.getItem('PX_V14.3')) || { name: "", totalNian: 0, points: 0, dailyTasks: [], todayCount: 0, lastDate: new Date().toLocaleDateString() };
const tasks = ["普賢十大願修行", "五戒十善持守", "親近供養三寶", "財布施與法布施修行", "興建塔廟造像功德", "供養護持三寶資糧", "每日定課誦經念佛", "受持清淨八關齋戒", "分享傳遞佛法善知識", "一念至誠普皆回向"];

const sutras = [
    "大自在神通。無量清淨。等無差別。",
    "一塵中有塵數剎。一一剎有難思佛。",
    "以此大願。隨順趣入。成就菩提。",
    "不取眾相。復於諸法實相。不生執著。"
];

let nianCount = 0;
let audioCtx = null;

// 色彩與位階配置
const rankConfig = [
    { day: 0,   label: "初信位", color: "#06b6d4", icon: "✨" },
    { day: 20,  label: "二信位", color: "#22c55e", icon: "🌱" },
    { day: 40,  label: "三信位", color: "#3b82f6", icon: "🌿" },
    { day: 60,  label: "四信位", color: "#f59e0b", icon: "🍀" },
    { day: 80,  label: "五信位", color: "#f8fafc", icon: "🌹" },
    { day: 100, label: "不退轉", color: "#d4af37", icon: "🪷" }
];

function playCosmicTone() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, audioCtx.currentTime); 
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        setTimeout(() => osc.stop(), 20000);
    } catch(e) { console.log("Audio logic skipped"); }
}

function startApp() {
    const name = document.getElementById('user-name').value;
    if(!name) return alert("請留名號");
    db.name = name;
    
    // 每日次數重置邏輯
    const today = new Date().toLocaleDateString();
    if (db.lastDate !== today) {
        db.todayCount = 0;
        db.lastDate = today;
    }
    db.todayCount++;
    save();

    const quote = sutras[Math.floor(Math.random() * sutras.length)];
    speak(quote, 0.8);
    playCosmicTone();
    showScreen(2);
    updateUI();
}

function updateUI() {
    document.getElementById('total-count').innerText = db.totalNian;
    let totalDays = db.points / 100;
    document.getElementById('streak-val').innerText = totalDays.toFixed(1);
    document.getElementById('streak-bar').style.width = Math.min(totalDays, 100) + '%';
    
    const seed = document.getElementById('big-seed');
    let growthScale = 1 + (db.points / 5000); 
    seed.style.transform = `scale(${growthScale})`;

    let glow = 15 + (db.dailyTasks.length * 5);
    seed.style.filter = `drop-shadow(0 0 ${glow}px var(--gold))`;

    const current = [...rankConfig].reverse().find(r => totalDays >= r.day) || rankConfig[0];
    document.documentElement.style.setProperty('--theme-color', current.color);
    document.getElementById('rank-title').innerText = current.label;
    document.getElementById('display-name').innerText = db.name || "行者";
    document.getElementById('today-count').innerText = db.todayCount;
    document.getElementById('mini-seed').innerText = current.icon;
    seed.innerText = current.icon;
    document.getElementById('growth-lv').innerText = totalDays >= 100 ? "極樂蓮開" : current.label;
}

function handleNian() {
    if (nianCount < 10) {
        nianCount++; db.totalNian++;
        // 增加為「南無阿彌陀佛」
        document.getElementById('nian-word').innerText = "南無阿彌陀佛";
        setTimeout(()=> document.getElementById('nian-word').innerText="", 500);
        
        // 校正發音：南無阿彌陀佛 (稍微放慢 rate 確保 A/ㄚ 音清晰)
        speak("南無阿彌陀佛", 0.75);
        
        updateNianCircle();
        createDust(20);
        if(nianCount===10) setTimeout(()=>document.getElementById('bodhi-layer').style.display='flex', 800);
    }
}

function speak(t, r) { 
    window.speechSynthesis.cancel();
    const m = new SpeechSynthesisUtterance(t);
    m.lang='zh-TW'; 
    m.rate=r; 
    window.speechSynthesis.speak(m);
}

// 毫秒金色流動時鐘
function updateClock() {
    const now = new Date();
    // 娑婆時間顯示
    document.getElementById('earth-time').innerText = now.toLocaleTimeString();
    
    // 金色流動計算
    const totalDays = db.points / 100;
    const dayPercent = (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() + now.getMilliseconds()/1000) / 86400;
    const totalPureYears = (totalDays + dayPercent) * 100;
    
    const years = Math.floor(totalPureYears);
    const fraction = (totalPureYears - years).toFixed(4).substring(1); // 取得 .XXXX 部分
    
    // 強制顯化金色 (透過 JS 直接控制確保不被覆蓋)
    const pureEl = document.getElementById('pure-time');
    pureEl.style.color = "var(--gold)";
    pureEl.innerText = `${years} 年${fraction}`;
}

// 提高更新頻率至 50ms 以實現流動感
setInterval(updateClock, 50);

// 其餘備份、還原、任務、存檔功能完整保留 (PX_V14.3)
function save() { localStorage.setItem('PX_V14.3', JSON.stringify(db)); }
function showScreen(n) { 
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    document.getElementById('screen-'+n).classList.add('active'); 
    if(n===3) renderTasks();
}
function confirmBodhi() { document.getElementById('bodhi-layer').style.display='none'; showScreen(3); }
function updateNianCircle() { 
    document.getElementById('nian-progress').style.strokeDashoffset = 754 - (nianCount*75.4); 
    document.getElementById('nian-num').innerText = nianCount+" / 10"; 
}
function renderTasks() {
    const container = document.getElementById('task-list');
    container.innerHTML = "";
    tasks.forEach((t, i) => {
        const isDone = db.dailyTasks.includes(i);
        const card = document.createElement('div');
        card.className = `task-card ${isDone?'completed':''}`;
        card.innerHTML = `<div style="font-size:1rem; color:var(--gold);">${t}</div><div class="task-bar"><div class="task-fill" style="width:${isDone?'100%':'0%'}"></div></div>`;
        if(!isDone) card.onclick = () => { 
            db.dailyTasks.push(i); db.points+=10; 
            renderTasks(); updateUI(); createDust(30); speak(t+"圓滿", 0.8); 
        };
        container.appendChild(card);
    });
}
function goHome() { nianCount=0; updateNianCircle(); showScreen(1); updateUI(); }
function finishSession() { save(); alert("今日修行資糧已封存"); goHome(); }
function exportProgress() { 
    const blob = new Blob([JSON.stringify(db)], {type: 'application/json'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = `${db.name}_修行備份.json`; a.click();
}
function importProgress(i) {
    const reader = new FileReader();
    reader.onload = (e) => { db = JSON.parse(e.target.result); save(); location.reload(); };
    reader.readAsText(i.files[0]);
}
function createDust(count) {
    const layer = document.getElementById('gold-dust-layer');
    const seed = document.getElementById('big-seed');
    const rect = seed.getBoundingClientRect();
    for(let i=0; i<count; i++){
        const d = document.createElement('div'); d.className = 'dust';
        d.style.width = d.style.height = (Math.random()*4+1)+'px';
        d.style.background = 'var(--gold)';
        d.style.left = (rect.left + rect.width/2)+'px';
        d.style.top = (rect.top + rect.height/2)+'px';
        layer.appendChild(d);
        const a = Math.random()*Math.PI*2, dist = Math.random()*150+50;
        d.animate([{transform:'scale(1)',opacity:1},{transform:`translate(${Math.cos(a)*dist}px,${Math.sin(a)*dist}px) scale(0)`,opacity:0}], 1200);
        setTimeout(()=>d.remove(), 1200);
    }
}
updateUI();
