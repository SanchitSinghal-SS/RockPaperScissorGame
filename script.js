let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let clickedBtn = "";
let computerSelection = "";
rock.addEventListener("click", click);
paper.addEventListener("click", click);
scissor.addEventListener("click", click);
let scoreHead = document.querySelector("#Score");
let scoreHigh = document.querySelector("#HighScore");
let outcome = document.querySelector(".outcome");
let body = document.querySelector("body");
let clickedDiv = null;
let iconC = document.querySelector(".iconC");
let scoreVal = 0;
let highscoreVal = 0;

function click() {
  this.style.backgroundColor = "lightgreen";
  outcome.innerText = `You choose ${this.getAttribute("id")}`;
  clickedDiv = this;
  clickedBtn = this.getAttribute("id");
  clicked();
}

function clicked() {
  rock.style.pointerEvents = "none";
  paper.style.pointerEvents = "none";
  scissor.style.pointerEvents = "none";
  computerTurn();
}

function computerTurn() {
  let imag = document.querySelector(".iconC img");
  let imagArr = ["rocks", "paper", "scissor"];
  let intervalId = setInterval(() => {
    computerSelection = imagArr[Math.floor(Math.random() * 3)];
    imag.src = `./icons/${computerSelection}.png`;
  }, 100);
  setTimeout(() => {
    clearInterval(intervalId);
    outcome.innerText = `Computer chooses ${computerSelection}`;
    headingsUpgrade();
  }, 2000);
}

function headingsUpgrade() {
  let p = document.querySelector("p");
  p.innerText =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  iconC.style.backgroundColor = "lightgreen";
  logic();
}

function logic() {
  if (
    (clickedBtn == "rock" && computerSelection == "rocks") ||
    clickedBtn == computerSelection
  ) {
    outcome.innerText = "Game Draw!";
    document.querySelector(".mainbox").style.backgroundColor = "yellow";
  } else if (
    (clickedBtn == "rock" && computerSelection == "scissor") ||
    (clickedBtn == "scissor" && computerSelection == "paper") ||
    (clickedBtn == "paper" && computerSelection == "rocks")
  ) {
    outcome.innerText = "You Won!";
    document.querySelector(".mainbox").style.backgroundColor = "green";
    scoreVal++;
  } else {
    scoreVal = 0;
    outcome.innerText = "You Lose!";
    document.querySelector(".mainbox").style.backgroundColor = "red";
  }

  setTimeout(() => {
    rock.style.backgroundColor = "rgb(253, 155, 170)";
    paper.style.backgroundColor = "rgb(253, 155, 170)";
    scissor.style.backgroundColor = "rgb(253, 155, 170)";
    rock.scale = 1;
    paper.scale = 1;
    scissor.scale = 1;
    document.querySelector(".mainbox").style.backgroundColor =
      "rgb(253, 155, 170)";
    iconC.style.backgroundColor = "rgb(253, 155, 170)";
    iconC.scale = 1;
    scoreHead.innerText = `Score: ${scoreVal}`;
    if (scoreVal >= highscoreVal) {
        highscoreVal = scoreVal;
      scoreHigh.innerText = `HighScore: ${highscoreVal}`;
    }
    outcome.innerText = "Press the tile to start";
    rock.style.pointerEvents = "auto";
    paper.style.pointerEvents = "auto";
    scissor.style.pointerEvents = "auto";

  }, 1000);
}
