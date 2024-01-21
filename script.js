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
    return `It's a tie`;
  } else if (
    (userMove === "Bat" && computerMove === "Ball") ||
    (userMove === "Ball" && computerMove === "Stump") ||
    (userMove === "Stump" && computerMove === "Bat")
  ) {
    return `User Won`;
  } else {
    return `Computer Won`;
  }
}

function playGame(userChoice) {
  let computerChoice = randomNumber();
  let resultMsg = getResult(userChoice, computerChoice);
  alert(
    `You chose ${userChoice}\nComputer chose ${computerChoice}\nResult: ${resultMsg}`
  );
}