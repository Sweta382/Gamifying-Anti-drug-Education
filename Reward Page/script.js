let coinsCounter = 0;

function earnCoins() {
    coinsCounter += 10; // You can adjust the earned coins as needed
    document.getElementById("coins-counter").innerText = coinsCounter;
    setTimeout(function() {
        window.location.href = 'http://127.0.0.1:5500/Game-hackathon/index.html';
      }, 3000);
      
    
    // Enable the claim reward button if the user reaches 50 coins
    if (coinsCounter >= 50) {
        document.getElementById("claim-reward-btn").disabled = false;
    }
}

function claimReward() {
    alert("Congratulations! You've claimed your reward!");
    coinsCounter = 0;
    document.getElementById("coins-counter").innerText = coinsCounter;
    document.getElementById("claim-reward-btn").disabled = true;
}