/*
For this game challenge we were given a few files with code in it and had to finish the game. This code is my own work with the exception of lines 4 - 6. 
I will not post the other files due to possible copyright issues.  
*/
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 9);
}

function compareGuesses(human, ai, target) {
    const x = Math.abs(human - target);
    const y = Math.abs(target - ai);
    return x <= y;
    /*if (Math.abs(human - target) <= Math.abs(target - ai)) {
        return true;
    }
    else {
        return false;
    }*/
}

function updateScore(score) {
    if (score === 'human') {
        humanScore++;
    }
    else if (score === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}
