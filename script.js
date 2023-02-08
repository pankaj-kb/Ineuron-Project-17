// Task 1
let barbarianColor = document.querySelector(".clash-card__unit-stats--barbarian")
barbarianColor.style.backgroundColor = "#EC9B3B"

statColor = document.querySelectorAll(".stat")
statValueColor = document.querySelectorAll(".stat-value")

for (let element of statColor) {
    element.style.color = "#FFFFFF";
}

for (let element of statValueColor) {
    element.style.color = "#FFFFFF";
}

// task 2

let archerColor = document.querySelector(".clash-card__unit-stats--archer");
archerColor.style.backgroundColor = "#EE5487"

let characterTitles = document.querySelectorAll("div");

for (let i = 0; i < characterTitles.length; i++) {
  let div = characterTitles[i];
  if (div.textContent == "Character 2") {
    div.innerText = "The Archer";
  } if(div.textContent == "Character 4") {
    div.innerText = "The Goblin"
    break;
  }
}


// Task 3

let giantColor = document.querySelector(".clash-card__unit-stats--giant");
giantColor.style.backgroundColor = "#EC9B3B"

// Task 4

let goblinColor = document.querySelector(".clash-card__unit-stats--goblin")
goblinColor.style.backgroundColor = "#82BB30";

// task 5

let wizardColor = document.querySelector(".clash-card__unit-stats--wizard")
wizardColor.style.backgroundColor = "#4FACFF";

