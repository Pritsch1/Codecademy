const getUserChoice = (userInput) => {
    userInput = "BOMB"
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        //console.log(userInput);
        return userInput;
    } else {
        console.log("Ops! Something went wrong. :(");
    }
};
const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Tie!";
    }

    else if (userChoice === "rock" && computerChoice === "scissors") {
        return "You win!";
    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        return "You lose";
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        return "You win2!";
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        return "You lose2";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        return "You win3!";
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        return "You lose3";
    }
    else if (userChoice === "bomb") {
      return "OKAY! You won... jez..."
    }
};
function playGame() {
    let userChoice = getUserChoice("rock", "paper", "scissors");
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));

}
//getUserChoice("rock");
//console.log(getComputerChoice());
//console.log(determineWinner());
playGame();

