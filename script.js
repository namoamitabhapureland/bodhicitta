// ... 基礎資料庫與 sutras 完整保留 ...

// 修正：安卓喚醒與注音ㄚ正音
function speak(t, r) { 
    window.speechSynthesis.cancel();
    // 將所有「阿」替換為「ㄚ」確保正音
    const m = new SpeechSynthesisUtterance(t.replace(/阿/g, 'ㄚ'));
    m.lang = 'zh-TW'; m.rate = r; m.volume = 1.0;
    window.speechSynthesis.speak(m);
}

function startApp() {
    // 關鍵：安卓點擊瞬間喚醒語音
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
    
    const name = document.getElementById('user-name').value;
    if(!name) return alert("請留名號");

    // --- 護持提醒邏輯 (原版完整保留，守護紀錄) ---
    if (db.name && db.name !== name) {
        const confirmChange = confirm(`此法寶目前由「${db.name}」護持，您確定要將名號更改為「${name}」嗎？\n(資糧將會接續計算)`);
        if (!confirmChange) return;
    }
    
    db.name = name;
    // ... 每日重置邏輯保留 ...
    save();

    speak(sutras[Math.floor(Math.random() * sutras.length)], 0.8);
    playCosmicTone(); showScreen(2); updateUI();
}

function updateUI() {
    // ... 原有 UI 邏輯 ...
    const seed = document.getElementById('big-seed');
    const miniSeed = document.getElementById('mini-seed');
    let growthScale = 1 + (db.points / 5000); 
    
    // 修正：小圖示隨資糧放大
    seed.style.transform = `scale(${growthScale})`;
    if(miniSeed) miniSeed.style.transform = `scale(${Math.min(growthScale, 1.5)})`;

    // ... 位階顏色與文字邏輯完整保留 ...
}

function handleNian() {
    if (nianCount < 10) {
        nianCount++; db.totalNian++;
        // 修正為 ㄚ 音
        document.getElementById('nian-word').innerText = "南無ㄚ彌陀佛";
        setTimeout(()=> document.getElementById('nian-word').innerText="", 500);
        speak("南無ㄚ彌陀佛", 0.75); 
        
        updateNianCircle();
        createDust(20);
        if(nianCount===10) setTimeout(()=>document.getElementById('bodhi-layer').style.display='flex', 800);
    }
}
// ... 其餘 save, updateClock, renderTasks 函數完整保留 ...
