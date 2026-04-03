function initArticle() {
    try {
        const params = new URLSearchParams(window.location.search);
        const articleId = params.get('id') || "2026-001"; 

        // 1. 確保數據存在
        if (typeof articleLibrary === 'undefined') {
            console.error("找不到 articleLibrary，請檢查 articles.js 路徑。");
            return;
        }

        // 2. 尋找文章 (對應您的 Array 結構)
        const article = articleLibrary.find(a => a.id === articleId);

        if (!article) {
            document.getElementById('s-title').innerText = "查無此篇";
            document.getElementById('s-desc').innerText = `ID: ${articleId} 尚未寫入庫。`;
            return;
        }

        // 3. 填充頂部狀態 (對應您的鍵值：statusTitle, statusDesc)
        document.getElementById('s-title').innerText = article.statusTitle;
        document.getElementById('s-desc').innerHTML = article.statusDesc;
        document.title = article.title;

        // 4. 填充內容 (對應您的鍵值：humble, sections)
        let html = `
            <div class="humble-statement">${article.humble}</div>
            <h1 class="main-title">${article.title}</h1>
        `;

        // 遍歷您的 sections 陣列
        article.sections.forEach(sec => {
            html += `
                <div class="chapter-box">
                    <div class="c-header">
                        <svg class="c-icon" viewBox="0 0 24 24"><path d="${sec.icon}"/></svg>
                        <div class="c-title">${sec.title}</div>
                    </div>
                    <div class="c-text">${sec.content}</div>
                </div>
                <div class="chapter-divider"></div>
            `;
        });

        document.getElementById('article-inject-point').innerHTML = html;
        console.log("✅ 正法數據對齊成功！");

    } catch (err) {
        console.error("讀取錯誤:", err);
        document.getElementById('s-title').innerText = "系統擾動";
        document.getElementById('s-desc').innerText = err.message;
    }
}
