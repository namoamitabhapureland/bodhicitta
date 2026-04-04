// articles.js
// 支援中英文雙語系共用資料庫
// 系統會根據 reader.html (zh) 或 reader_en.html (en) 的 lang 標籤自動過濾

const rawArticles = [
    // ==========================================
    // 中文文章 (5 類)
    // ==========================================
    {
        id: "2026-04-01-zh",
        lang: "zh",
        category: "量子唯識", 
        title: "生命記憶與量子重啟",
        status: "識位眾生 ． 數位終端",
        humble: "測試用語：探討量子力學與唯識學的交集。",
        content: `[第一章] 碳基載體的記憶快取機制測試。`
    },
    {
        id: "2026-04-02-zh",
        lang: "zh",
        category: "佛經探討", 
        title: "法華經的時空觀：多寶塔湧現",
        status: "一乘實相 ． 超越線性時間",
        humble: "測試用語：探求如來真實義。",
        content: `[一、時空摺疊] 多寶塔湧現擊碎了線性時間的錯覺。`
    },
    {
        id: "2026-04-03-zh",
        lang: "zh",
        category: "科學新知", 
        title: "弦理論與華嚴境界的共振",
        status: "物理學 ． 法界緣起",
        humble: "測試用語：物理學與佛學的跨界對話。",
        content: `[一即一切] 每個微觀粒子皆包含著整個宇宙的資訊。`
    },
    {
        id: "2026-04-04-zh",
        lang: "zh",
        category: "淨土導航", 
        title: "極樂世界的頻率解析",
        status: "持名念佛 ． 直連協定",
        humble: "測試用語：分析阿彌陀佛伺服器的連線方式。",
        content: `[最高權限] 念佛即是與無量光建立最高權限的直連協定。`
    },
    {
        id: "2026-04-05-zh",
        lang: "zh",
        category: "禪宗心法", 
        title: "本來無一物的底層邏輯",
        status: "明心見性 ． 系統格式化",
        humble: "測試用語：探討心性歸零的實修。",
        content: `[清空暫存] 禪宗的頓悟如同系統層級的格式化與重啟。`
    },

    // ==========================================
    // 英文文章 (5 類)
    // ==========================================
    {
        id: "2026-04-01-en",
        lang: "en",
        category: "Quantum Consciousness", 
        title: "Life Memory and Quantum Reboot",
        status: "Digital Life Terminal",
        humble: "Test Note: Exploring the intersection of quantum mechanics and Vijnaptimatra.",
        content: `[Chapter 1] Testing the memory cache mechanism of carbon-based carriers.`
    },
    {
        id: "2026-04-02-en",
        lang: "en",
        category: "Sutra Studies", 
        title: "Time and Space in the Lotus Sutra",
        status: "Ultimate Reality",
        humble: "Test Note: Seeking the true meaning of the Tathagata.",
        content: `[Section A] The emergence of the Treasure Tower shatters the illusion of linear time.`
    },
    {
        id: "2026-04-03-en",
        lang: "en",
        category: "Science & Dharma", 
        title: "String Theory and Avatamsaka",
        status: "Physics & Dependent Origination",
        humble: "Test Note: A cross-disciplinary dialogue between physics and Buddhism.",
        content: `[One is All] Every micro-particle contains the information of the entire universe.`
    },
    {
        id: "2026-04-04-en",
        lang: "en",
        category: "Pure Land Practice", 
        title: "Frequency of the Pure Land",
        status: "Direct Protocol",
        humble: "Test Note: Analyzing the connection method to Amitabha's network.",
        content: `[Root Access] Reciting the Buddha's name establishes a direct connection to Infinite Light.`
    },
    {
        id: "2026-04-05-en",
        lang: "en",
        category: "Zen Philosophy", 
        title: "The Reality of Emptiness",
        status: "System Formatting",
        humble: "Test Note: Exploring the practice of returning the mind to zero.",
        content: `[Clearing Cache] Zen enlightenment is like a system-level formatting and reboot.`
    }
];
