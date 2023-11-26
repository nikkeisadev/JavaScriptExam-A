let playerHP = 200;
let playerPower = 20;
let enemyHP = 200;
const enemyPower = 40;
let rounds = 0;

function startGame() {
  playerHP = 200;
  playerPower = 20;
  enemyHP = 200;
  rounds = 0;
  updateGameInfo("Játék indítva! Játékos életereje: " + playerHP + ", Játékos ereje: " + playerPower + ", Ellenfél életereje: " + enemyHP);
}

function attack() {
  const playerDamage = Math.floor(Math.random() * (playerPower * 2 - playerPower + 1)) + playerPower;
  const enemyDamage = Math.floor(Math.random() * (enemyPower * 2 - enemyPower + 1)) + enemyPower;

  playerHP -= enemyDamage;
  enemyHP -= playerDamage;
  rounds++;

  if (playerHP <= 0) {
    playerHP = 200;
    playerPower += 10;
    updateGameInfo("Vesztettél a körgyőzelem után! Játék újrakezdve. Játékos életereje: " + playerHP + ", Játékos ereje: " + playerPower + ", Ellenfél életereje: " + enemyHP);
  } else if (enemyHP <= 0) {
    updateGameInfo("Győzelem! Ellenfél legyőzve " + rounds + " körben!");
  } else {
    updateGameInfo("Támadás! Játékos sebzése: " + playerDamage + ", Ellenfél sebzése: " + enemyDamage + ". Játékos életereje: " + playerHP + ", Ellenfél életereje: " + enemyHP);
  }
}

function updateGameInfo(message) {
  const gameInfo = document.getElementById("game-info");
  gameInfo.textContent = message;
}
