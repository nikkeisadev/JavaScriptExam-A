var playerHP = 200;
var playerPower = 20;
var enemyHP = 200;
var enemyPower = 40;
var rounds = 0;

function startGame() {
  playerHP = 200;
  playerPower = 20;
  enemyHP = 200;
  rounds = 0;
  updateGameStatus("Game started! Player's health: " + playerHP + ", Napstablook's health: " + enemyHP);
}

function attack() {
  var playerDamage = Math.floor(Math.random() * (playerPower * 2 - playerPower + 1)) + playerPower;
  var enemyDamage = Math.floor(Math.random() * (enemyPower * 2 - enemyPower + 1)) + enemyPower;

  playerHP -= enemyDamage;
  enemyHP -= playerDamage;
  rounds++;

  updateGameStatus(
    "Round(s): " + rounds,
    "Player's damage: " + playerDamage,
    "Napstablook's  damage: " + enemyDamage,
    "Player's Health: " + playerHP,
    "Napstablook's  Health: " + enemyHP
  );

  if (playerHP <= 0) {
    playerPower += 10;
    playerHP = 200;
    updateGameStatus("The Player lost this round! Starting a new round. Player's power is upgraded: " + playerPower);
    playerHP = 200;
    enemyHP = 200;
  }

  if (enemyHP <= 0) {
    gameOver();
  }
}

function gameOver() {
  updateGameStatus("Player WIN! Round to complete victory: " + rounds);
  playerHP = 200;
  enemyHP = 200;
}

function updateGameStatus(...messages) {
  var gameStatusElement = document.getElementById("game-status");
  gameStatusElement.innerHTML = "";

  for (var i = 0; i < messages.length; i++) {
    var messageElement = document.createElement("div");
    messageElement.textContent = messages[i];
    gameStatusElement.appendChild(messageElement);
  }
}