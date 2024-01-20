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

let canInteract = true;

const GetCPUResponse = async () => {
    const promise = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');
    const response = await promise.text();
    return response;
}

let timer = 30;
timerText.innerText = timer;

setInterval(function() {
    if (canInteract) {
        timer--;
        console.log(timer);
        timerText.innerText = timer;
    }
}, 1000);

function clamp(num, min, max) {
    return num <= min 
      ? min 
      : num >= max 
        ? max 
        : num
  }

function ButtonResultChange()
{
    canInteract = false;
    timer = 30;
    timerText.innerText = timer;

    setTimeout(function() {
        playerTurn++;
        roundText.innerText = `Round ${roundCurrent} - Player #${clamp(playerTurn, 1, 2)}'s Turn!`;
        playerResponseText.innerText = '';
        canInteract = true;

        if (playerTurn == 3) {
            CompareAnswers(playerOneChoice, playerTwoChoice);
        }
        if (playerTurn == 4) {
            playerTurn = 1;
            roundCurrent++;
            roundText.innerText = `Round ${roundCurrent} - Player #${clamp(playerTurn, 1, 2)}'s Turn!`;
        }
    }, 3000);
}

// Button Rock //
buttonRock.addEventListener('click', function() {
    if (canInteract)
    {
        if (playerTurn == 1) {
            playerOneChoice = rock;
        } else if (playerTurn == 2) {
            playerTwoChoice = rock;
        }

        playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Rock!`;
        ButtonResultChange();   
    }
});

// Button Paper //
buttonPaper.addEventListener('click', function() {
    if (canInteract)
    {
        if (playerTurn == 1) {
            playerOneChoice = paper;
        } else if (playerTurn == 2) {
            playerTwoChoice = paper;
        }

        playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Paper!`;
        ButtonResultChange();
    }
});

// Button Scissor //
buttonScissors.addEventListener('click', function() {
    if (canInteract)
    {
        if (playerTurn == 1) {
            playerOneChoice = scissors;
        } else if (playerTurn == 2) {
            playerTwoChoice = scissors;
        }

        playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Scissors!`;
        ButtonResultChange();
    }
});

// Button Lizard //
buttonLizard.addEventListener('click', function() {
    if (canInteract)
    {
        if (playerTurn == 1) {
            playerOneChoice = lizard;
        } else if (playerTurn == 2) {
            playerTwoChoice = lizard;
        }

        playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Lizard!`;
        ButtonResultChange();
    }
});

// Button Spock //
buttonSpock.addEventListener('click', function() {
    if (canInteract)
    {
        if (playerTurn == 1) {
            playerOneChoice = spock;
        } else if (playerTurn == 2) {
            playerTwoChoice = spock;
        }
        
        playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Spock!`;
        ButtonResultChange();
    }
});

roundText.innerText = `Round ${roundCurrent} - Player #${clamp(playerTurn, 1, 2)}'s Turn!`;

function CompareAnswers(player1, player2)
{
    switch (player1) 
    {
        case rock:
            if (player2 == scissors) {
                playerOneScore++;
                playerResponseText.innerText = 'Rock crushes Scissors!';
                ButtonResultChange();
            } else if (player2 == lizard) {
                playerOneScore++;
                playerResponseText.innerText = 'Rock crushes Lizard!';
                ButtonResultChange();
            }
        break;

        case paper:
            if (player2 == rock) {
                playerOneScore++;
                playerResponseText.innerText = 'Paper covers Rock!';
                ButtonResultChange();
            } else if (player2 == spock) {
                playerOneScore++;
                playerResponseText.innerText = 'Paper disproves Spock!';
                ButtonResultChange();
            }
        break;

        case scissors:
            if (player2 == paper) {
                playerOneScore++;
                playerResponseText.innerText = 'Scissors cut Paper!';
                ButtonResultChange();
            } else if (player2 == lizard) {
                playerOneScore++;
                playerResponseText.innerText = 'Paper decapitates Lizard!';
                ButtonResultChange();
            }
        break;

        case lizard:
            if (player2 == spock) {
                playerOneScore++;
                playerResponseText.innerText = 'Lizard poisons Spock!';
                ButtonResultChange();
            } else if (player2 == paper) {
                playerOneScore++;
                playerResponseText.innerText = 'Lizard eats Paper!';
                ButtonResultChange();
            }
        break;

        case spock:
            if (player2 == scissors) {
                playerOneScore++;
                playerResponseText.innerText = 'Spock smashes Scissors!';
                ButtonResultChange();
            } else if (player2 == rock) {
                playerOneScore++;
                playerResponseText.innerText = 'Spock Vaporizes Rock!';
                ButtonResultChange();
            }
        break;
    }

    switch (player2) 
    {
        case rock:
            if (player1 == scissors) {
                playerTwoScore++;
                playerResponseText.innerText = 'Rock crushes Scissors!';
                ButtonResultChange();
            } else if (player1 == lizard) {
                playerTwoScore++;
                playerResponseText.innerText = 'Rock crushes Lizard!';
                ButtonResultChange();
            }
        break;

        case paper:
            if (player1 == rock) {
                playerTwoScore++;
                playerResponseText.innerText = 'Paper covers Rock!';
                ButtonResultChange();
            } else if (player1 == spock) {
                playerTwoScore++;
                playerResponseText.innerText = 'Paper disproves Spock!';
                ButtonResultChange();                
            }
        break;

        case scissors:
            if (player1 == paper) {
                playerTwoScore++;
                playerResponseText.innerText = 'Scissors cut Paper!';
                ButtonResultChange();
            } else if (player1 == lizard) {
                playerTwoScore++;
                playerResponseText.innerText = 'Paper decapitates Lizard!';
                ButtonResultChange();
            }
        break;

        case lizard:
            if (player1 == spock) {
                playerTwoScore++;
                playerResponseText.innerText = 'Lizard poisons Spock!';
                ButtonResultChange();
            } else if (player1 == paper) {
                playerTwoScore++;
                playerResponseText.innerText = 'Lizard eats Paper!';
                ButtonResultChange();
            }
        break;

        case spock:
            if (player1 == scissors) {
                playerTwoScore++;
                playerResponseText.innerText = 'Spock smashes Scissors!';
                ButtonResultChange();
            } else if (player1 == rock) {
                playerTwoScore++;
                playerResponseText.innerText = 'Spock Vaporizes Rock!';
                ButtonResultChange();
            }
        break;
    }

    playerOneScoreText.innerText = `Player #1 - ${playerOneScore}`;
    playerTwoScoreText.innerText = `Player #2 - ${playerTwoScore}`;
}

playerOneScoreText.innerText = `Player #1 - ${playerOneScore}`;
playerTwoScoreText.innerText = `Player #2 - ${playerTwoScore}`;