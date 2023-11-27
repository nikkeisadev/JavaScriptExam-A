// Játék adatok
const games = [
  {
    title: "Dead Or Alive 6",
    description: "Dead Or Alive 6 is a famous 3D sideviewed combat game developed by Team Ninja, and Koei Tecmo. It's released to serveral platforms, such as like PlayStation series, XBOX, and Steam.",
    cover: "source/dead_or_alive_banner.png"
  },
  {
    title: "Shining Resonance Refrain",
    description: "Shining Resonance is a RPG 3D fantasy game where you can battle with dragons. It's also avaiable for Nintendo Switch, but the physicsal copy's availability can change quickly.",
    cover: "source/shining_resonance_refrain_banner.png"
  },
  {
    title: "Astral Chain",
    description: "Astral Chain is a Nintendo Switch game, where you have to survive a disaster in a futuristic enviorment.",
    cover: "source/astral_chain_banner.png"
  },
  {
    title: "Bloodrayne Betrayal Fresh Bites",
    description: "A 2D Anime version of the Bloodrayne series, a combat game which is famous because it's great combat system, and loved by many.",
    cover: "source/bloodrayne_betrayal_banner.png"
  },
  {
    title: "Danganronpa Decadence",
    description: "Danganronpa Decadence is a Nintendo Switch release of the game's triology plus S (aka. Summer Edition). It's a murder mystery game, where you have to find the killer to survive.",
    cover: "source/danganronpa_decadence_banner.png"
  }
];

// Elemek kiválasztása
const gameSelect = document.getElementById("game-select");
const gameTitle = document.getElementById("game-title");
const gameDescription = document.getElementById("game-description");
const recommendRadio = document.getElementById("recommend");
const notRecommendRadio = document.getElementById("not-recommend");
const gameBanner = document.getElementById("game-image");

// Választás eseménykezelő
gameSelect.addEventListener("change", function() {
  const selectedGame = gameSelect.value;
  const game = games.find(g => g.title.toLowerCase() === selectedGame.toLowerCase());

  if (game) {
    gameTitle.textContent = game.title;
    gameDescription.textContent = game.description;
    gameBanner.src = game.cover;
    recommendRadio.checked = localStorage.getItem(selectedGame) === "recommend";
    notRecommendRadio.checked = localStorage.getItem(selectedGame) === "not-recommend";
  } else {
    gameTitle.textContent = "";
    gameDescription.textContent = "";
    recommendRadio.checked = false;
    notRecommendRadio.checked = false;
  }
});

// Értékelés mentése
recommendRadio.addEventListener("change", saveRating);
notRecommendRadio.addEventListener("change", saveRating);

function saveRating() {
  const selectedGame = gameSelect.value;
  const rating = recommendRadio.checked ? "recommend" : (notRecommendRadio.checked ? "not-recommend" : null);

  if (selectedGame && rating){
    localStorage.setItem(selectedGame, rating);
  }
}