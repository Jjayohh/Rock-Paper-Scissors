const choices = ["rock", "paper", "scissors"];
const winners = [];
const rockBtn = document.querySelector("#btn-rock");
const paperBtn = document.querySelector("#btn-paper");
const scissorsBtn = document.querySelector("#btn-scissors");
const buttons = document.querySelectorAll(".btn");
const playerChoiceInt = document.querySelector("#playerChoice");
const compChoiceInt = document.querySelector("#compChoice");
const playercurrentScore = document.querySelector("#playerScore");
const compcurrentScore = document.querySelector("#compScore");
var playerScore = 0;
var compScore = 0;
var ties = 0;

document.getElementById("pScore").textContent = playerScore;
document.getElementById("tieScore").textContent = ties;
document.getElementById("cScore").textContent = compScore;

function compChoice() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playerChoice, compChoice) {
  if (playerScore < 5 && compScore < 5) {
    if (playerChoice === "rock") {
      playerChoiceInt.id = "btn-rock";
    } else if (playerChoice === "paper") {
      playerChoiceInt.id = "btn-paper";
    } else if (playerChoice === "scissors") {
      playerChoiceInt.id = "btn-scissors";
    }
    playerroundImg.style.visibility = "visible";
    if (playerChoice === "rock") {
      playerImg.src = "images/rock.png";
    } else if (playerChoice === "paper") {
      playerImg.src = "images/paper.png";
    } else if (playerChoice === "scissors") {
      playerImg.src = "images/scissors.png";
    }
    if (compChoice === "rock") {
      compImg.src = "images/rock.png";
    } else if (compChoice === "paper") {
      compImg.src = "images/paper.png";
    } else if (compChoice === "scissors") {
      compImg.src = "images/scissors.png";
    }
    checkWinner(playerChoice, compChoice);
  } else if (playerScore == 5 || compScore == 5) {
    playerScore = 0;
    compScore = 0;
    ties = 0;
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("tieScore").textContent = ties;
    document.getElementById("cScore").textContent = compScore;
    playerroundImg.style.visibility = "invisible";
  }
  declareWinner();
}

function declareWinner() {
  if (playerScore === 5) {
    document.getElementById("status").innerText = "You Won the Game!";
    document.getElementById("status").style.color = "green";
  } else if (compScore === 5) {
    document.getElementById("status").innerText = "You Lost the Game :(";
    document.getElementById("status").style.color = "red";
  }
}

rockBtn.addEventListener("click", () => {
  playRound("rock", compChoice()), update();
});
paperBtn.addEventListener("click", () => {
  playRound("paper", compChoice()), update();
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", compChoice()), update();
});

function update() {
  playerroundImg.style.visibility = "visible";
}

function checkWinner(choiceP, choiceC) {
  console.log(choiceP, choiceC);
  if (choiceP === choiceC) {
    ties++;
    document.getElementById("status").innerText = "Tie!";
    document.getElementById("tieScore").textContent = ties;
    document.getElementById("status").style.color = "white";
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    playerScore++;
    document.getElementById("status").innerText = "You Won the Round!";
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("status").style.color = "white";
    return "Player";
  } else {
    compScore++;
    document.getElementById("status").innerText = "You Lost the Round!";
    document.getElementById("cScore").textContent = compScore;
    document.getElementById("status").style.color = "white";
    return "Computer";
  }
}
