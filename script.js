// Side Menu Logic
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const sideMenu = document.getElementById('sideMenu');

menuOpen.onclick = () => sideMenu.style.width = "100%";
menuClose.onclick = () => sideMenu.style.width = "0";

// Progress Bar Simulation
function updateProgress(amount) {
    const bar = document.getElementById('progressFill');
    bar.style.width = amount + "%";
    
    if(amount === 100) {
        setTimeout(() => {
            alert("MISSION INTEL COMPLETE: You are now CBRN certified.");
        }, 500);
    }
}
// Quiz Data
const missionData = [
    {
        q: "You see a low-lying yellow mist. What is your move?",
        options: ["Run toward it", "Move upwind/High ground", "Lay down"],
        correct: 1
    },
    {
        q: "A 'Dirty Bomb' is classified as what type of threat?",
        options: ["Chemical", "Biological", "Radiological"],
        correct: 2
    },
    {
        q: "What are the three pillars of Radiation defense?",
        options: ["Time, Distance, Shielding", "Run, Hide, Fight", "Water, Food, Mask"],
        correct: 0
    }
];

let currentMission = 0;
let score = 0;

function loadMission() {
    const qBody = document.getElementById('question');
    const optBody = document.getElementById('options');
    
    if (currentMission < missionData.length) {
        qBody.textContent = missionData[currentMission].q;
        optBody.innerHTML = '';
        
        missionData[currentMission].options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(index);
            optBody.appendChild(btn);
        });
    } else {
        finishMission();
    }
}

function checkAnswer(choice) {
    if (choice === missionData[currentMission].correct) {
        score++;
        updateProgress((score / missionData.length) * 100);
    }
    currentMission++;
    loadMission();
}

function finishMission() {
    const qBody = document.getElementById('question');
    const optBody = document.getElementById('options');
    const rank = document.getElementById('userRank');
    
    qBody.textContent = "TRAINING COMPLETE";
    optBody.innerHTML = `<p>Scored: ${score}/${missionData.length}</p>`;
    
    if (score === 3) rank.textContent = "CBRN SPECIALIST";
    else if (score >= 1) rank.textContent = "FIELD AGENT";
    else rank.textContent = "WASHED OUT";
}

// Initial Load
window.onload = loadMission;
