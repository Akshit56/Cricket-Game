function randomNumber() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "Bat";
  } else if (num === 1) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === computerMove) {
    score.tie++;
    return `It's a tie`;
  } else if (
    (userMove === "Bat" && computerMove === "Ball") ||
    (userMove === "Ball" && computerMove === "Stump") ||
    (userMove === "Stump" && computerMove === "Bat")
  ) {
    score.win++;
    return `User Won`;
  } else {
    score.lost++;
    return `Computer Won`;
  }
}

function playGame(userChoice) {
  let computerChoice = randomNumber();
  let resultMsg = getResult(userChoice, computerChoice);
  localStorage.setItem('Score', JSON.stringify(score));
  alert(
    `You chose ${userChoice}\nComputer chose ${computerChoice}\nResult: ${resultMsg}\n${score.displayScore()}`
  );
}

let scoreStr = localStorage.getItem('Score');
let score = JSON.parse(scoreStr) || {
  win: 0,
  tie: 0,
  lost: 0,
};
score.displayScore = function () {
  return `Won ${score.win} Tie ${score.tie} Lost ${score.lost}`;
};

function resetButton() {
  localStorage.clear();
  score = {
    win: 0,
    tie: 0,
    lost: 0,
  };
  score.displayScore = function () {
    return `Won ${score.win} Tie ${score.tie} Lost ${score.lost}`;
  };

  // Set the updated score object back into local storage
  localStorage.setItem('Score', JSON.stringify(score));
}
