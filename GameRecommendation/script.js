// Játék adatok
const games = [
    {
      title: "Minecraft",
      description: "Egy sandbox stílusú játék, ahol a játékosok építhetnek és felfedezhetnek végtelen világokat.",
      cover: "minecraft.jpg"
    },
    {
      title: "Fortnite",
      description: "Egy ingyenesen játszható battle royale játék, ahol a játékosoknak egymással kell versenyezniük a túlélésért.",
      cover: "fortnite.jpg"
    },
    {
      title: "Among Us",
      description: "Egy többjátékos csalási játék, ahol a játékosok közül néhányan álcázzák magukat, és megpróbálják megölni a többieket anélkül, hogy lelepleződnének.",
      cover: "among-us.jpg"
    },
    {
      title: "Valorant",
      description: "Egy taktikai lövöldözős játék, ahol különböző karakterekkel kell versenyezni a csapattársaiddal szemben.",
      cover: "valorant.jpg"
    },
    {
      title: "Fall Guys",
      description: "Egy multiplayer party játék, ahol a játékosok vicces karaktereket irányítva versenyeznek különböző akadályokon és minijátékokon.",
      cover: "fall-guys.jpg"
    }
  ];
  
  // Elemek kiválasztása
  const gameSelect = document.getElementById("game-select");
  const gameTitle = document.getElementById("game-title");
  const gameDescription = document.getElementById("game-description");
  const recommendRadio = document.getElementById("recommend");
  const notRecommendRadio = document.getElementById("not-recommend");
  
  // Választás eseménykezelő
  gameSelect.addEventListener("change", function() {
    const selectedGame = gameSelect.value;
    const game = games.find(g => g.title.toLowerCase() === selectedGame.toLowerCase());
  
    if (game) {
      gameTitle.textContent = game.title;
      gameDescription.textContent = game.description;
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