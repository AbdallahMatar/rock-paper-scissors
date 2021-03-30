const buttons = document.querySelectorAll(".pick");
const scoreEl = document.getElementById("score");
const content = document.getElementById("content");
const selection = document.getElementById("selection");
const reset = document.getElementById("reset");
const userSelect = document.getElementById("user-select");
const computerSelect = document.getElementById("computer-select");
const winner = document.getElementById("winner");

const choices = ["paper", "rock", "scissors"];

score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    checkWinner();
  });
});

reset.addEventListener("click", () => {
  content.style.display = "flex";
  selection.style.display = "none";
});

function checkWinner() {
  const computerChoice = pickRandomChoice();

  updateSelection(userSelect, userChoice);
  updateSelection(computerSelect, computerChoice);

  if (userChoice === computerChoice) {
    winner.innerText = "DRAW";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    updateScore(1);
    winner.innerText = "YOU WIN";
  } else {
    if (score > 0) {
      updateScore(-1);
    }
    winner.innerText = "YOU LOST";
  }

  content.style.display = "none";
  selection.style.display = "flex";
}

function updateScore(value) {
  score += value;

  scoreEl.innerText = score;
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-rock");
  selectionEl.classList.remove("btn-scissors");

  selectionEl.classList.add(`btn-${choice}`);
  const img = selectionEl.querySelector("img");
  img.src = `asset/img/icon-${choice}.svg`;
}
