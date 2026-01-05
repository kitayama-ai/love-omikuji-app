
// Fortune Data: Focused on Love and "Good Omens"
const fortunes = [
    {
        type: "大吉",
        desc: "運命の糸が強く引かれています。<br>あなたの笑顔が輝き、想いが届く最高の時。",
        details: {
            wish: "迷わず進めば叶う",
            wait: "ときめきと共に来る",
            love: "情熱的な展開あり",
            match: "理想的な相手との縁"
        }
    },
    {
        type: "吉",
        desc: "穏やかな幸せが満ちてきます。<br>飾らない自分自身を大切にすることで運気上昇。",
        details: {
            wish: "時間はかかるが叶う",
            wait: "頼りになる人が来る",
            love: "ゆっくり愛を育める",
            match: "友人の紹介に吉あり"
        }
    },
    {
        type: "中吉",
        desc: "小さな幸せが積み重なる時。<br>感謝の気持ちを言葉にすると、恋の女神が微笑みます。",
        details: {
            wish: "努力次第で叶う",
            wait: "遅れるが必ず来る",
            love: "素直さが鍵となる",
            match: "趣味の場に良縁あり"
        }
    },
    {
        type: "小吉",
        desc: "少しの勇気が大きな一歩に。<br>変化を恐れず、新しい自分を見せるチャンスです。",
        details: {
            wish: "焦らず待てば吉",
            wait: "予期せぬ連絡あり",
            love: "自分磨きが幸運呼ぶ",
            match: "意外な場所に縁あり"
        }
    },
    {
        type: "末吉",
        desc: "夜明け前が一番暗いもの。<br>今は力を蓄える時。未来の恋の花言葉は「希望」。",
        details: {
            wish: "今は耐えるが勝ち",
            wait: "来ないが、便りあり",
            love: "相手を信じる心が吉",
            match: "今は時期を待とう"
        }
    }
];

// Elements
const screens = {
    start: document.getElementById('start-screen'),
    anim: document.getElementById('anim-screen'),
    result: document.getElementById('result-screen')
};

const buttons = {
    draw: document.getElementById('draw-btn'),
    retry: document.getElementById('retry-btn')
};

const dom = {
    app: document.getElementById('app'),
    shakingBox: document.querySelector('.shaking-box'),
    stick: document.getElementById('stick'),
    resultContainer: document.querySelector('.result-container'),
    // Result Text Elements
    title: document.getElementById('result-title'),
    overview: document.getElementById('result-overview'),
    dWish: document.getElementById('detail-wish'),
    dWait: document.getElementById('detail-wait'),
    dLove: document.getElementById('detail-love'),
    dMatch: document.getElementById('detail-match')
};

// Utils
const playSound = (type) => {
    // Optional: Add Audio Later
};

const switchScreen = (toScreen) => {
    // Remove active from all
    Object.values(screens).forEach(el => el.classList.remove('active'));
    // Add active to target
    toScreen.classList.add('active');
};

// Logic
const drawOmikuji = () => {
    // 1. Switch to Anim Screen
    switchScreen(screens.anim);
    
    // 2. Start Shaking
    dom.shakingBox.classList.add('shake-anim');
    
    // 3. Simple Timeout for Shake Duration (2.5s)
    setTimeout(() => {
        // Stop shaking
        dom.shakingBox.classList.remove('shake-anim');
        
        // Eject Stick Animation (can be elaborated)
        dom.stick.classList.remove('hidden');
        dom.stick.classList.add('ejected');
        
        // Wait for stick to be seen
        setTimeout(() => {
            showResult();
        }, 1000);
        
    }, 2500);
};

const showResult = () => {
    // Randomize
    const fate = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    // Populate Data
    dom.title.textContent = fate.type;
    dom.overview.innerHTML = fate.desc;
    
    // Set colors based on luck (optional styling)
    if (fate.type === "大吉") {
        dom.title.style.color = "#d32f2f"; // Bright red
    } else {
        dom.title.style.color = "#c2185b"; // Standard deep red
    }

    dom.dWish.textContent = fate.details.wish;
    dom.dWait.textContent = fate.details.wait;
    dom.dLove.textContent = fate.details.love;
    dom.dMatch.textContent = fate.details.match;
    
    // Switch Screen
    switchScreen(screens.result);
    
    // Trigger Unfurl Animation
    setTimeout(() => {
        dom.resultContainer.classList.add('open');
    }, 100);
    
    // Reset Stick for next time
    dom.stick.classList.remove('ejected');
    dom.stick.classList.add('hidden');
};

const resetGame = () => {
    dom.resultContainer.classList.remove('open');
    // Wait for close animation
    setTimeout(() => {
        switchScreen(screens.start);
    }, 500);
};

// Sakura Effect
const createSakura = () => {
    const container = document.getElementById('sakura-container');
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Random sizes
    const size = Math.random() * 10 + 5 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    
    // Random horizontal position
    petal.style.left = Math.random() * 100 + 'vw';
    
    // Random animation duration
    petal.style.animationDuration = Math.random() * 3 + 4 + 's'; // 4-7s
    petal.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(petal);
    
    // Cleanup
    setTimeout(() => {
        petal.remove();
    }, 8000);
};

// Init
buttons.draw.addEventListener('click', drawOmikuji);
buttons.retry.addEventListener('click', resetGame);

// Start Sakura Shower
setInterval(createSakura, 300);

