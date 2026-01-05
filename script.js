
const fortunes = [
    {
        type: "大吉",
        desc: "天の恵みを受け、万事思うがままに進みます。運命の人はすぐ傍に。今は恐れず、心のままに羽ばたいて吉。",
        details: { wish: "速やかに叶う", wait: "必ず来る", love: "最高の相性", match: "良縁あり" }
    },
    {
        type: "中吉",
        desc: "穏やかな光が差し込み、良き知らせが届くでしょう。誠実な心が一層の幸運を呼び寄せます。",
        details: { wish: "望み通りに叶う", wait: "便りあり", love: "思いやりが大切", match: "進めて良し" }
    },
    {
        type: "小吉",
        desc: "小さな幸せを慈しむことで、大きな幸運へと繋がります。焦らず一歩ずつ、絆を深めていきましょう。",
        details: { wish: "遅れて叶う", wait: "現れる", love: "素直に伝えて", match: "友人を通じて吉" }
    },
    {
        type: "吉",
        desc: "日常の中に愛が満ちています。周囲への感謝を忘れなければ、道は自ずと拓かれるでしょう。",
        details: { wish: "叶うが慎重に", wait: "遅くなる", love: "誠実さが鍵", match: "時間をかけて" }
    },
    {
        type: "末吉",
        desc: "今は耐え、自分を磨く時期。嵐の後は必ず美しい虹がかかります。希望を捨てずに待ちましょう。",
        details: { wish: "今は困難", wait: "来ないが希望あり", love: "相手を信じて", match: "見送るが吉" }
    },
    {
        type: "凶",
        desc: "心に影がさす時。今は動かず、静かに己を見つめ直しましょう。夜はやがて明け、光が戻ります。",
        details: { wish: "叶い難い", wait: "来ない", love: "言葉に注意", match: "慎むべし" }
    },
    {
        type: "大凶",
        desc: "試練の時。しかし、この底を打てば後は飛躍しかありません。誠心誠意事に当たれば、道は開けます。",
        details: { wish: "叶わぬ", wait: "現れず", love: "不和の兆し。我慢", match: "控えよ" }
    }
];

const screens = {
    start: document.getElementById('start-screen'),
    anim: document.getElementById('anim-screen'),
    result: document.getElementById('result-screen')
};

const dom = {
    shakingBox: document.querySelector('.shaking-box'),
    stick: document.getElementById('stick'),
    resultContainer: document.querySelector('.result-container'),
    title: document.getElementById('result-title'),
    overview: document.getElementById('result-overview'),
    dWish: document.getElementById('detail-wish'),
    dWait: document.getElementById('detail-wait'),
    dLove: document.getElementById('detail-love'),
    dMatch: document.getElementById('detail-match')
};

const switchScreen = (toScreen) => {
    Object.values(screens).forEach(el => el.classList.remove('active'));
    toScreen.classList.add('active');
};

const drawOmikuji = () => {
    switchScreen(screens.anim);
    dom.shakingBox.classList.add('shake-anim');
    
    setTimeout(() => {
        dom.shakingBox.classList.remove('shake-anim');
        dom.stick.classList.remove('hidden');
        dom.stick.classList.add('ejected');
        
        setTimeout(() => {
            showResult();
        }, 800);
    }, 2000);
};

const showResult = () => {
    const fate = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    dom.title.textContent = fate.type;
    dom.overview.innerHTML = fate.desc;
    
    // 凶・大凶の演出
    if (fate.type === "凶" || fate.type === "大凶") {
        dom.title.classList.add('bad-luck');
    } else {
        dom.title.classList.remove('bad-luck');
    }

    dom.dWish.textContent = fate.details.wish;
    dom.dWait.textContent = fate.details.wait;
    dom.dLove.textContent = fate.details.love;
    dom.dMatch.textContent = fate.details.match;
    
    switchScreen(screens.result);
    setTimeout(() => {
        dom.resultContainer.classList.add('open');
    }, 100);
    
    dom.stick.classList.remove('ejected');
};

const resetGame = () => {
    dom.resultContainer.classList.remove('open');
    setTimeout(() => {
        switchScreen(screens.start);
    }, 600);
};

const createSakura = () => {
    const container = document.getElementById('sakura-container');
    const petal = document.createElement('div');
    petal.classList.add('petal');
    const size = Math.random() * 8 + 4 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 4 + 6 + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
};

document.getElementById('draw-btn').addEventListener('click', drawOmikuji);
document.getElementById('retry-btn').addEventListener('click', resetGame);
setInterval(createSakura, 400);
