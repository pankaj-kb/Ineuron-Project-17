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

