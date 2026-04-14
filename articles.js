// articles.js
// 支援中英文雙語系共用資料庫
// 系統會根據 reader.html (zh) 或 reader_en.html (en) 的 lang 標籤自動過濾

const rawArticles = [
    // ==========================================
    // 中文文章
    // ==========================================
    {
        id: "2026-04-14-zh-entropy",
        lang: "zh",
        category: "知識", 
        title: "刻在墓碑上的宇宙猜想——從「熵」看見時間的單行道與無常",
        status: "熱力學第二定律 ． 成住壞空",
        humble: "這是一篇探討物理定律與生命無常的文章。嘗試在冷硬的科學史中尋找人性的厚度，並對多重宇宙與時間的流動保持一分開放的猜想。",
        content: `[從一杯冷咖啡到衰老的宇宙：無所不在的熵] 我們或許都有過這樣的經驗：一杯放在桌上忘了喝的熱咖啡，總會漸漸變涼；一個原本整潔的房間，只要不去刻意維持，幾週後似乎不可避免地會走向凌亂。哪怕是一個不小心掉落的玻璃杯，也只會碎裂，我們從未見過碎片能奇蹟般地自動拼合重圓。

這些生活中的尋常瑣事背後，似乎隱藏著同一股難以違逆的宇宙力量——「熵」（Entropy）【註1】。在物理學中，這是一個用來衡量系統「混亂與無序程度」的單位。它或許不只存在於沒有生命的物體中。當我們看著自己或長輩逐漸蒼老，這本質上可能也是一場對抗「熵增」的漫長消耗戰。生命個體每天攝取能量，試圖維持肉體這個「低熵」的有序狀態【註2】；而當能量不再能有效轉換，身體的秩序便可能開始崩解。若將視角拉遠到浩瀚的星海，整個宇宙似乎也正遵循著同樣的軌跡：恆星或許終將燃燒殆盡，星系漸漸遠離，我們所在的宇宙，可能正緩慢地從充滿生機的低熵狀態，滑向絕對冰冷與死寂的最高熵終局。

[刻在墓碑上的真理：波茲曼的公式與孤獨] 雖然「熵」的概念最早由克勞修斯（Rudolf Clausius）提出，但真正試圖將其看透，並賦予其數學與機率解釋的，是十九世紀的奧地利物理學家路德維希·波茲曼（Ludwig Boltzmann）。

在那個連「原子」都不被多數權威學者承認的年代，波茲曼提出了一個極度前衛的猜想。他寫下了這條主宰宇宙無序度的公式：S = k log W【註3】。這條公式簡潔而殘酷，它暗示著事物之所以傾向走向混亂，純粹是因為「混亂狀態出現的機率」遠遠大於「整齊狀態的機率」。

然而，這份可能超越了時代的洞見，卻為他招來了當時學術界主流的集體排擠與嘲笑【註4】。在長達數十年的孤獨辯護與嚴重的憂鬱侵蝕下，波茲曼於 1906 年選擇了結束自己的生命。這或許是科學史上最令人心碎的諷刺之一：就在他離世後沒幾年，科學界陸續透過實驗，證實了原子的存在與他理論的正確性。後人為了向這位生不逢時的先知致敬，將那條他曾經用生命捍衛的公式，深深地刻在了他位於維也納中央公墓的墓碑上。

[熵的哲學體現：科學裡的成住壞空] 如果我們試著將這冷硬的物理定律與東方哲理相對照，所謂的「熱力學第二定律」，或許就是科學語言中的「成住壞空」。

萬物的形成（成）與維持（住），似乎都需要不斷從外界汲取能量，這可能是一種極度短暫且脆弱的「低熵」奇蹟；而隨著時間推移，能量的耗散難以避免，系統的秩序終究可能逐漸瓦解（壞），最終回歸到最徹底的無序與平靜（空）。從這個角度來看，宇宙中或許本就沒有什麼是永恆不變的。我們所珍視的文明、情感甚至生命本身，可能都只是一場抵抗熵增的短暫逆流。這條物理學的定律，在某種程度上，似乎成為了對「無常」最精確的數學隱喻。

[時間之箭：穿越的矛盾與多重宇宙] 這不禁引發了一個更深層的疑問：為什麼時間似乎只能單向流動？我們能清晰地回憶過去，卻無法預知未來。

因為如果宇宙的「熵」整體上永遠只增不減，已經發生的混亂或許就無法自發地恢復成有序。這條看似無法逆轉的單行道，被英國物理學家愛丁頓（Arthur Eddington）稱為「時間之箭」（Arrow of Time）【註5】。

然而，當我們看著科幻小說中那些穿越時空的情節時，偶爾會感到一絲矛盾：如果熵增是絕對的，回到過去不就等於讓宇宙強行發生了「大範圍的熵減」嗎？既然在我們這個線性宇宙裡，打碎的玻璃杯難以重圓，那麼我們不禁要問：時間旅行是否可能並非是在同一條時間線上「倒退」，而是走向了某個平行的、多重時間流動的宇宙呢？【註6】 或許在另一個尚未被我們觀測到的維度裡，存在著無數個擁有不同熵值的分岔現實。我們目前對時間的理解，可能仍只是浩瀚未知中的冰山一角。

[引用與延伸閱讀註解] 【註1】 熵（Entropy）的概念最初由德國物理學家魯道夫·克勞修斯（Rudolf Clausius）於 1865 年提出。
【註2】 奧地利物理學家埃爾溫·薛丁格（Erwin Schrödinger）在其名著《生命是什麼？》中提出：「生命以負熵為生」。
【註3】 公式中 S 代表系統的熵，k 為波茲曼常數，W 代表微觀狀態總數。
【註4】 波茲曼的原子論與統計力學觀點，遭到了當時以馬赫（Ernst Mach）和奧斯特瓦爾德（Wilhelm Ostwald）為首的實證主義學派強烈抨擊。
【註5】 「時間之箭」（Arrow of Time）由英國天文學家亞瑟·愛丁頓（Arthur Eddington）於 1927 年提出，用以描述時間的非對稱性與單向性。
【註6】 量子力學中的「多世界詮釋」（Many-Worlds Interpretation）認為每一次量子觀測都可能導致宇宙分裂出不同的平行現實，為科幻文學中的時間旅行矛盾提供了一種可能解釋。`
    },

    // ==========================================
    // 英文文章 (English Articles)
    // ==========================================
    {
        id: "2026-04-14-en-entropy",
        lang: "en",
        category: "knowledge", 
        title: "The Cosmic Conjecture Carved on a Tombstone: Seeing the One-Way Street of Time and Impermanence through 'Entropy'",
        status: "Second Law of Thermodynamics ． Formation, Existence, Destruction, Emptiness",
        humble: "This is a column exploring physical laws and the impermanence of life. It attempts to find human depth within the cold history of science, maintaining an open conjecture about the multiverse and the flow of time.",
        content: `[From a Cold Coffee to an Aging Universe: The Omnipresence of Entropy] We might all have experienced this: a hot cup of coffee left on a desk will gradually cool down; an originally tidy room, if not deliberately maintained, seems inevitably to become messy over a few weeks. Even an accidentally dropped glass will only shatter; we have never seen the fragments miraculously reassemble themselves.

Behind these ordinary occurrences in life seems to hide the same inescapable cosmic force—"Entropy"【Note 1】. In physics, this is a unit used to measure the "degree of chaos and disorder" in a system. It might not only exist in inanimate objects. When we watch ourselves or our elders gradually age, this is essentially a long war of attrition against "entropy increase." Living individuals consume energy daily, attempting to maintain the ordered "low-entropy" state of the physical body【Note 2】; and when energy can no longer be effectively converted, the body's order may begin to collapse. Zooming out to the vast sea of stars, the entire universe seems to be following the same trajectory: stars may eventually burn out, galaxies gradually drift apart, and the universe we inhabit might be slowly sliding from a vibrant low-entropy state toward an ultimate end of absolute coldness and maximum entropy.

[The Truth Carved on a Tombstone: Boltzmann's Formula and Loneliness] Although the concept of "entropy" was first proposed by Rudolf Clausius, the one who truly tried to see through it and gave it a mathematical and probabilistic explanation was the 19th-century Austrian physicist Ludwig Boltzmann.

In an era when even "atoms" were not recognized by most authoritative scholars, Boltzmann proposed an extremely avant-garde conjecture. He wrote down the formula that governs the disorder of the universe: S = k log W【Note 3】. This formula is concise and cruel; it implies that the reason things tend to move toward chaos is purely because the "probability of a chaotic state" is far greater than the "probability of an ordered state."

However, this insight, which may have transcended its time, brought him collective ostracization and ridicule from the academic mainstream of his era【Note 4】. Under decades of lonely defense and the erosion of severe depression, Boltzmann chose to end his own life in 1906. This might be one of the most heartbreaking ironies in the history of science: just a few years after his passing, the scientific community successively confirmed the existence of atoms and the correctness of his theory through experiments. To pay tribute to this prophet born before his time, later generations carved the formula he once defended with his life deeply onto his tombstone in the Vienna Central Cemetery.

[The Philosophical Embodiment of Entropy: "Formation, Existence, Destruction, Emptiness" in Science] If we try to compare this cold physical law with Eastern philosophy, the so-called "Second Law of Thermodynamics" might just be "formation, existence, destruction, and emptiness" (Cheng, Zhu, Huai, Kong) in scientific language.

The formation and maintenance of all things seem to require the continuous extraction of energy from the outside; this might be an extremely brief and fragile "low-entropy" miracle. As time passes, the dissipation of energy is inevitable, the order of the system will eventually collapse (destruction), and ultimately return to the most thorough disorder and peace (emptiness). From this perspective, there might be nothing eternally unchanging in the universe. The civilizations, emotions, and even life itself that we cherish may just be a brief countercurrent against entropy increase. This law of physics, to some extent, seems to have become the most precise mathematical metaphor for "impermanence."

[The Arrow of Time: The Paradox of Time Travel and the Multiverse] This inevitably raises a deeper question: why does time flow only in one direction? We can clearly remember the past but cannot predict the future.

Because if the overall "entropy" of the universe only ever increases, the chaos that has already occurred perhaps cannot spontaneously revert to order. This seemingly irreversible one-way street was called the "Arrow of Time" by British physicist Arthur Eddington【Note 5】.

However, when we look at time-travel plots in science fiction, we occasionally feel a hint of contradiction: if entropy increase is absolute, wouldn't returning to the past equate to forcing a "large-scale entropy decrease" upon the universe? Since in our linear universe, a shattered glass is hard to reassemble, we cannot help but ask: is it possible that time travel is not "going backward" on the same timeline, but rather stepping into a parallel universe with multiple flows of time?【Note 6】 Perhaps in another dimension yet to be observed by us, there exist countless branching realities with different entropy values. Our current understanding of time might still just be the tip of the iceberg in the vast unknown.

[Citations and Extended Reading Notes] 【Note 1】 The concept of Entropy was first proposed by German physicist Rudolf Clausius in 1865.
【Note 2】 Austrian physicist Erwin Schrödinger proposed in his famous book "What is Life?": "Life feeds on negative entropy".
【Note 3】 In the formula, S represents the entropy of the system, k is the Boltzmann constant, and W represents the total number of microscopic states.
【Note 4】 Boltzmann's views on atomism and statistical mechanics were strongly attacked by the positivist school led by Ernst Mach and Wilhelm Ostwald at the time.
【Note 5】 The "Arrow of Time" was proposed by British astronomer Arthur Eddington in 1927 to describe the asymmetry and one-way nature of time.
【Note 6】 The "Many-Worlds Interpretation" in quantum mechanics posits that every quantum observation may cause the universe to split into different parallel realities, providing a possible explanation for the time travel paradox in science fiction.`
    }
];
