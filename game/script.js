// script.js
let level = 1;
let energy = 5;
let stamina = 5;
let choseDrug = false;

const healthyFoods = [
  "Broccoli",
  "Quinoa",
  "Kale",
  "Berries",
  "Salmon",
  "Avocado",
  "Spinach",
  "Oatmeal",
  "Greek Yogurt",
  "Walnuts"
];

const drugs = [
  "Cigarettes",
  "Marijuana",
  "Ecstasy",
  "Cocaine",
  "Heroin",
  "Methamphetamine",
  "LSD",
  "Prescription opioids",
  "Crack cocaine",
  "Ketamine"
];

function chooseHealthy() {
  const resultText = document.getElementById('resultText');
  if (energy > 0 && stamina > 0) {
    resultText.textContent = `Great choice! ${healthyFoods[level - 1]} boosts your energy and stamina!`;
    resultText.style.color = "#009900";
    energy += 1;
    stamina += 1;
  } else {
    resultText.textContent = "Game Over! You ran out of stamina!";
    resultText.style.color = "#FF0000";
    level = 11; // Set level to end the game
  }
  updateStats();
  checkLevelCompletion();
}

function avoidDrugs() {
  const resultText = document.getElementById('resultText');
  if (energy > 0 && stamina > 0) {
    resultText.textContent = `Avoiding ${drugs[level - 1]} boosts your energy, but reduces stamina!`;
    resultText.style.color = "#FF0000";
    stamina -= 2;
    energy += 2;
    choseDrug = true;
  } else {
    resultText.textContent = "Game Over! You ran out of stamina!";
    resultText.style.color = "#FF0000";
    level = 11; 
  }
  updateStats();
  checkLevelCompletion();
}

function checkLevelCompletion() {
  if (level < 10) {
    level++;
    updateLevelInfo();
  } else {
    endGame();
  }
}

function updateLevelInfo() {
  const levelText = document.getElementById('levelText');
  levelText.textContent = `Level: ${level}`;
  const options = document.querySelector('.options');
  options.children[0].textContent = `Healthy Food: ${healthyFoods[level - 1]}`;
  options.children[1].textContent = `Drugs: ${drugs[level - 1]}`;
}

function updateStats() {
  if (energy <= 0 || stamina <= 0) {
    endGame();
    return;
  }

  const energyBar = document.getElementById('energyBar');
  energyBar.style.width = `${energy}%`;

  const staminaBar = document.getElementById('staminaBar');
  staminaBar.style.width = `${stamina}%`;
}

function endGame() {
  const resultText = document.getElementById('resultText');
  if (level === 11 && energy > 0 && stamina > 0) {
    if (choseDrug) {
      resultText.textContent = "Congratulations! Remember to avoid drugs for a healthy life!";
      resultText.style.color = "#FFFF00";
    } else {
      resultText.textContent = "Congratulations! You completed all levels! Keep up the good choices for a healthy life!";
      resultText.style.color = "#00FF00";
    }
  } else {
    resultText.textContent = "Game Over! You ran out of stamina!";
    resultText.style.color = "#FF0000";
    setTimeout(function() {
      window.location.href = 'http://127.0.0.1:5500/antidrug/index.html';
    }, 5000);
  }  
  const options = document.querySelector('.options');
  options.style.display = 'none';
}

function checkLevelCompletion() {
  if (level < 10) {
    level++;
    updateLevelInfo();
  } else {
    if (energy > 0 && stamina > 0) {
      congratulate();
    } else {
      endGame();
    }
  }
}

function congratulate() {
  const resultText = document.getElementById('resultText');
  resultText.textContent = "Congratulations! You have completed all levels! Keep up the healthy choices!";
  resultText.style.color = "#009900";
  const options = document.querySelector('.options');
  options.style.display = 'none';
  setTimeout(function() {
    window.location.href = 'http://127.0.0.1:5500/Meme%20page/index%20(4).html';
  }, 5000);
  
}

