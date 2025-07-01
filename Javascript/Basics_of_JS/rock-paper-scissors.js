let playerwinner;
let computerwinner;
let draw;
let computerChoice;
let userChoice;
let result;
let score = JSON.parse(localStorage.getItem("score"));

if (score) {
  playerwinner = score.Wins;
  computerwinner = score.Loses;
  draw = score.Ties;
} else {
  playerwinner = 0;
  computerwinner = 0;
  draw = 0;
}


document.querySelector(".rock").addEventListener("click",()=>{
    userChoice='rock';
  getComputerMove();
  
  showResult();
})

document.querySelector(".paper").addEventListener("click",()=>{
    userChoice='paper';
  getComputerMove();
  
  showResult();
})
document.querySelector(".scissors").addEventListener("click",()=>{
     userChoice='scissors';
  getComputerMove();
 
  showResult();
})

document.querySelector(".reset-btn").addEventListener("click",()=>{
    resetgame();
})


function getComputerMove() {
  computerChoice = Math.random();
  if (computerChoice >= 0 && computerChoice < 1 / 3) {
    computerChoice = "rock";
  } else if (computerChoice >= 1 / 3 && computerChoice < 2 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}
function getResult() {
  if (userChoice == "rock") {
    if (computerChoice == "scissors") {
      result = "Player wins";
    } else if (computerChoice == "paper") {
      result = "Computer wins";
    } else {
      result = "Draw";
    }
  } else if (userChoice == "paper") {
    if (computerChoice == "scissors") {
      result = "Computer wins";
    } else if (computerChoice == "paper") {
      result = "Draw";
    } else {
      result = "Player wins";
    }
  } else {
    if (computerChoice == "scissors") {
      result = "Draw";
    } else if (computerChoice == "paper") {
      result = "Player wins";
    } else {
      result = "Computer wins";
    }
  }
  return result;
}

function count(result) {
  if (result == "Computer wins") {
    computerwinner++;
  } else if (result == "Draw") {
    draw++;
  } else {
    playerwinner++;
  }

  let record = {
    Wins: playerwinner,
    Loses: computerwinner,
    Ties: draw,
  };
  return JSON.stringify(record);
}

function showResult() {
  score = count(getResult());
  alert(
    `Player:${userChoice}\nComputer:${computerChoice}\nResult:${result}\n${score}`
  );
  localStorage.setItem("score", score);
}

function resetgame() {
  localStorage.removeItem("score");
  playerwinner = 0;
  computerwinner = 0;
  draw = 0;
  score = {
    Wins: 0,
    Loses: 0,
    Ties: 0,
  };
  alert("Game reset ✅");
}
