<script>
    let db = JSON.parse(localStorage.getItem('PX_V14.3')) || { 
        name: "", totalNian: 0, points: 0, dailyTasks: [], todayCount: 0, lastDate: new Date().toLocaleDateString() 
    };
    const tasks = ["普賢十大願修行", "五戒十善持守", "親近供養三寶", "財布施與法布施", "興建塔廟造像", "供養護持三寶", "每日定課誦經", "受持清淨八關齋戒", "分享法寶善知識", "一念至誠普皆回向"];
    let nianCount = 0;

    // 1. 換日與換時區檢查 (裝置時間為準)
    function checkNewDay() {
        const today = new Date().toLocaleDateString();
        if (db.lastDate !== today) {
            db.todayCount = 0;
            db.dailyTasks = [];
            db.lastDate = today;
            save();
        }
    }

    function updateClock() {
        const now = new Date();
        document.getElementById('earth-time').innerText = "娑婆：" + now.toLocaleTimeString();
        const dayPercent = (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() + now.getMilliseconds()/1000) / 86400;
        const total = db.points + dayPercent;
        document.getElementById('pure-time').innerText = `${Math.floor(total)} 年${(dayPercent).toFixed(4).substring(1)}`;
    }
    setInterval(updateClock, 50);

    // 2. 名號換人警告邏輯
    function startApp() {
        const inputName = document.getElementById('user-name').value;
        if(!inputName) return alert("請留名號");
        
        if (db.name && db.name !== inputName) {
            if(!confirm(`此法寶目前由「${db.name}」護持，確定要更改為「${inputName}」嗎？\n(資料將會續接，請謹慎決定)`)) return;
        }
        
        db.name = inputName;
        db.todayCount++; 
        checkNewDay();
        save();
        showScreen(2); updateUI();
        speak("以此大願，隨順趣入", 0.8);
    }

    // 3. 十念閃爍與回向儀軌
    function handleNian() {
        if (nianCount < 10) {
            nianCount++; db.totalNian++;
            document.getElementById('nian-word').innerText = "南無阿彌陀佛";
            // 閃爍光芒
            document.getElementById('big-seed').style.filter = "drop-shadow(0 0 50px white)";
            setTimeout(()=> {
                document.getElementById('nian-word').innerText="";
                document.getElementById('big-seed').style.filter = "drop-shadow(0 0 15px var(--solid-gold))";
            }, 400);
            
            speak("南無阿彌陀佛", 0.75);
            document.getElementById('progress-ring').style.strokeDashoffset = 691 - (nianCount * 69.1);
            document.getElementById('nian-num').innerText = nianCount + " / 10";
            
            if(nianCount === 10) { 
                db.points += 2; 
                setTimeout(()=> document.getElementById('dedi-modal').style.display='flex', 800); 
            }
        }
    }

    function confirmDedi() {
        document.getElementById('dedi-modal').style.display='none';
        showScreen(3);
    }

    function renderTasks() {
        const container = document.getElementById('task-list'); container.innerHTML = "";
        tasks.forEach((t, i) => {
            const isDone = db.dailyTasks.includes(i);
            const card = document.createElement('div'); 
            card.className = `task-card ${isDone?'completed':''}`;
            card.innerHTML = `<div style="color:var(--gold); font-size:1.1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">${t}</div>`;
            if(!isDone) card.onclick = () => { 
                db.dailyTasks.push(i); db.points += 10; renderTasks(); updateUI(); speak(t+"圓滿", 0.8); 
            };
            container.appendChild(card);
        });
    }

    // 資料安全保護 (絕不刪除 db 的其他欄位)
    function save() { localStorage.setItem('PX_V14.3', JSON.stringify(db)); }
    function showScreen(n) { document.querySelectorAll('.container').forEach(c => c.classList.remove('active')); document.getElementById('screen-'+n).classList.add('active'); if(n===3) renderTasks(); }
    function updateUI() {
        document.getElementById('total-count').innerText = db.totalNian;
        document.getElementById('today-count').innerText = db.todayCount;
        let totalDays = db.points / 100;
        document.getElementById('streak-val').innerText = totalDays.toFixed(1);
        document.getElementById('streak-bar').style.width = Math.min(totalDays, 100) + '%';
        const rank = totalDays >= 100 ? {l:"不退轉", i:"🪷", c:"#d4af37"} : (totalDays >= 20 ? {l:"二信位", i:"🌱", c:"#22c55e"} : {l:"初信位", i:"✨", c:"#06b6d4"});
        document.getElementById('rank-title').innerText = rank.l;
        document.getElementById('display-name').innerText = db.name || "行者";
        document.getElementById('mini-seed').innerText = rank.i;
        document.getElementById('big-seed').innerText = rank.i;
    }
    
    // 初始化載入
    checkNewDay();
    if(db.name) document.getElementById('user-name').value = db.name;
    updateUI();
</script>
