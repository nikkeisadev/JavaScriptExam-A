//Cities list.
const cities = [
    { name: "New York", snowfall: 0 },
    { name: "London", snowfall: 0 },
    { name: "Paris", snowfall: 0 },
    { name: "Tokyo", snowfall: 0 },
    { name: "Sydney", snowfall: 0 },
    { name: "Berlin", snowfall: 0 },
    { name: "Moscow", snowfall: 0 },
    { name: "Rome", snowfall: 0 },
    { name: "Cairo", snowfall: 0 },
    { name: "Beijing", snowfall: 0 },
    { name: "Rio de Janeiro", snowfall: 0 },
    { name: "Toronto", snowfall: 0 },
    { name: "Dubai", snowfall: 0 },
    { name: "Stockholm", snowfall: 0 },
    { name: "Amsterdam", snowfall: 0 },
    { name: "Istanbul", snowfall: 0 },
    { name: "Seoul", snowfall: 0 },
    { name: "Mumbai", snowfall: 0 },
    { name: "Cape Town", snowfall: 0 },
    { name: "Mexico City", snowfall: 0 }
  ];

//Generating the snowfall data.
  function generateSnowfall() {
    const snowfallDisplay = document.getElementById("snowfall-display");
    snowfallDisplay.innerHTML = "";

    for (let i = 0; i < cities.length; i++) {
      const snowfall = Math.floor(Math.random() * 81) + 40; // 40-120 közötti véletlen szám generálása
      cities[i].snowfall = snowfall;

      const snowfallElement = document.createElement("span");
      snowfallElement.textContent = cities[i].name + ": " + snowfall + " cm";
      snowfallElement.classList.add("badge");

      if (snowfall > 100) {
        snowfallElement.classList.add("red");
      }

      snowfallDisplay.appendChild(snowfallElement);
    }
  }

  //Random generating numbers.
  function changeSnowfall() {
    const snowfallDisplay = document.getElementById("snowfall-display");

    for (let i = 0; i < cities.length; i++) {
      const snowfallChange = Math.floor(Math.random() * 21) - 10;
      cities[i].snowfall += snowfallChange;

      const snowfallElement = snowfallDisplay.children[i];
      snowfallElement.textContent = cities[i].name + ": " + cities[i].snowfall + " cm";

      snowfallElement.classList.remove("red");
      if (cities[i].snowfall > 100) {
        snowfallElement.classList.add("red");
      }
    }
  }