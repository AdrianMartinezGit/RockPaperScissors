const rock = 0;
const paper = 1;
const scissors = 2;
const lizard = 3;
const spock = 4;

let roundCurrent = 1;

let playerOneScore = 0;
let playerTwoScore = 0;

let playerOneChoice = 0;
let playerTwoChoice = 0;

let playerTurn = 1;

let timerText = document.getElementById('timerElementID');

let buttonRock = document.getElementById('buttonRock');
let buttonPaper = document.getElementById('buttonPaper');
let buttonScissors = document.getElementById('buttonScissors');
let buttonLizard = document.getElementById('buttonLizard');
let buttonSpock = document.getElementById('buttonSpock');

let gameDiv = document.getElementById('game-div');
let roundText = document.getElementById('roundText');

let playerOneScoreText = document.getElementById('playerOneScoreText');
let playerTwoScoreText = document.getElementById('playerTwoScoreText');

let playerResponseText = document.getElementById('playerResponseText');
playerResponseText.innerText = '';

const GetCPUResponse = async () => {
    const promise = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');
    const response = await promise.text();
    return response;
}

let timer = 30;
timerText.innerText = timer;

setInterval(function() {
    timer--;
    console.log(timer);
    timerText.innerText = timer;
}, 1000);

function ButtonResultChange()
{
    timer = 30;
    timerText.innerText = timer;

    playerTurn += 1;
    roundText.innerText = `Round ${roundCurrent} - Player #${playerTurn}'s Turn!`;

    setTimeout(function() {
        playerResponseText.innerText = '';
    }, 3000);
}

// Button Rock //
buttonRock.addEventListener('click', function() {
    playerOneChoice = rock;
    console.log(playerOneChoice);
    playerResponseText.innerText = `Player #${playerTurn} Chooses Rock!`;
    ButtonResultChange();
});

// Button Paper //
buttonPaper.addEventListener('click', function() {
    playerOneChoice = paper;
    console.log(playerOneChoice);
    playerResponseText.innerText = `Player #${playerTurn} Chooses Paper!`;
    ButtonResultChange();
});

// Button Scissor //
buttonScissors.addEventListener('click', function() {
    playerOneChoice = scissors;
    console.log(playerOneChoice);
    playerResponseText.innerText = `Player #${playerTurn} Chooses Scissors!`;
    ButtonResultChange();
});

// Button Lizard //
buttonLizard.addEventListener('click', function() {
    playerOneChoice = lizard;
    console.log(playerOneChoice);
    playerResponseText.innerText = `Player #${playerTurn} Chooses Lizard!`;
    ButtonResultChange();
});

// Button Spock //
buttonSpock.addEventListener('click', function() {
    playerOneChoice = spock;
    console.log(playerOneChoice);
    playerResponseText.innerText = `Player #${playerTurn} Chooses Spock!`;
    ButtonResultChange();
});


CompareAnswers(playerOneChoice, playerTwoChoice);

roundText.innerText = `Round ${roundCurrent} - Player #${playerTurn}'s Turn!`;

function CompareAnswers(player1, player2)
{
    switch (player1) 
    {
        case rock:
            if (player2 == scissors) {
                playerOneScore++;
            } else if (player2 == lizard) {
                playerOneScore++;
            }
        break;

        case paper:
            if (player2 == rock) {
                playerOneScore++;
            } else if (player2 == spock) {
                playerOneScore++;
            }
        break;

        case scissors:
            if (player2 == paper) {
                playerOneScore++;
            } else if (player2 == lizard) {
                playerOneScore++;
            }
        break;

        case lizard:
            if (player2 == spock) {
                playerOneScore++;
            } else if (player2 == paper) {
                playerOneScore++;
            }
        break;

        case spock:
            if (player2 == scissors) {
                playerOneScore++;
            } else if (player2 == rock) {
                playerOneScore++;
            }
        break;
    }

    switch (player2) 
    {
        case rock:
            if (player1 == scissors) {
                playerTwoScore++;
            } else if (player1 == lizard) {
                playerTwoScore++;
            }
        break;

        case paper:
            if (player1 == rock) {
                playerTwoScore++;
            } else if (player1 == spock) {
                playerTwoScore++;
            }
        break;

        case scissors:
            if (player1 == paper) {
                playerTwoScore++;
            } else if (player1 == lizard) {
                playerTwoScore++;
            }
        break;

        case lizard:
            if (player1 == spock) {
                playerTwoScore++;
            } else if (player1 == paper) {
                playerTwoScore++;
            }
        break;

        case spock:
            if (player1 == scissors) {
                playerTwoScore++;
            } else if (player1 == rock) {
                playerTwoScore++;
            }
        break;
    }
}

playerOneScoreText.innerText = `Player #1 - ${playerOneScore}`;
playerTwoScoreText.innerText = `Player #2 - ${playerTwoScore}`;