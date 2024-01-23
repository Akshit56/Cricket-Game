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
  document.querySelector('#user-move').innerText = `You chose ${userChoice}`
  document.querySelector('#computer-move').innerText = `Computer chose ${computerChoice}`
  document.querySelector('#final-result').innerText = `${resultMsg}`
  document.querySelector('#final-score').innerText = score.displayScore();
  // alert(
  //   `You chose ${userChoice}\nComputer chose ${computerChoice}\nResult: ${resultMsg}\n${score.displayScore()}`
  // );
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
  document.querySelector('#user-move').innerText = '';
  document.querySelector('#computer-move').innerText = '';
  document.querySelector('#final-result').innerText = '';
  document.querySelector('#final-score').innerText = 'Won 0 Tie 0 Lost 0';
}
