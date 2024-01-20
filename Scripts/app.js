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

if (playerResponseText !== null) {
    playerResponseText.innerText = '';
}
let resultsElement = document.getElementById('resultsElement');

if (resultsElement !== null) {
    let roundCheck = parseInt(localStorage.roundleftResults);

    resultsElement.innerHTML = `<p class="jc-paragraph" id="resultsElement">
    Player #1 Score: ${localStorage.playerOneResults}<br>
    Player #2 Score: ${localStorage.playerTwoResults}<br><br>
    Time Left: ${localStorage.timeStoreResults}<br>
    Rounds Reached: ${roundCheck}
    </p>`;
}

let playerStatusText = document.getElementById('playerStatusText');

if (playerStatusText !== null) {
    if (localStorage.playerOneResults > localStorage.playerTwoResults) {
        playerStatusText.innerText = `Player #1 Won!`;
    } else if (localStorage.playerOneResults < localStorage.playerTwoResults) {
        playerStatusText.innerText = `Player #2 Won!`;
    } else if (localStorage.playerOneResults == localStorage.playerTwoResults) {
        playerStatusText.innerText = `It's a Tie!`;
    }
}

let canInteract = true;
let altInteract = false;

const GetCPUResponse = async () => {
    const promise = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');
    const response = await promise.text();
    
    switch (response)
    {
        case "Rock":
            playerTwoChoice = rock;
            playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Rock!`;
            ButtonResultChange();   
        break;

        case "Paper":
            playerTwoChoice = paper;
            playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Paper!`;
            ButtonResultChange();   
        break;

        case "Scissors":
            playerTwoChoice = scissors;
            playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Scissors!`;
            ButtonResultChange();   
        break;

        case "Lizard":
            playerTwoChoice = lizard;
            playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Lizard!`;
            ButtonResultChange();   
        break;

        case "Spock":
            playerTwoChoice = spock;
            playerResponseText.innerText = `Player #${clamp(playerTurn, 1, 2)} Chooses Spock!`;
            ButtonResultChange();   
        break;
    }
}

let timer = 30;

if (timerText != null) {
    timerText.innerText = timer;

    setInterval(function() {
        if (canInteract || altInteract) 
        {
            timer--;
            console.log(timer);

            if (timer == 0) {
                timer = 30;
                playerResponseText.innerText = `Time is up!`;
                ButtonResultChange();   
            }   
            
            timerText.innerText = timer;
        }
    }, 1000);
}
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
    //timer = 30;

    if (timerText != null) {
        timerText.innerText = timer;
    }

    setTimeout(function() {
        playerTurn++;

        if (roundText !== null) { roundText.innerText = `Round ${roundCurrent} - Player #${clamp(playerTurn, 1, 2)}'s Turn!`; }
        
        if (playerResponseText !== null) playerResponseText.innerText = '';
        
        if (localStorage.playerSetting == 0) {
            canInteract = true;
        } else {
            if (!altInteract) {
                setTimeout(function() {
                    GetCPUResponse();
                }, 1000);
            }
            altInteract = true;
        }

        if (playerTurn == 3) {
            CompareAnswers(playerOneChoice, playerTwoChoice);
        }
        if (playerTurn == 4) {
            if (localStorage.modeSetting == 0) {
                localStorage.playerOneResults = playerOneScore;
                localStorage.playerTwoResults = playerTwoScore;
                localStorage.timeStoreResults = timer;
                localStorage.roundleftResults = clamp(roundCurrent, 1, 10);

                window.location.href='./results.html';                   
            } else if (localStorage.modeSetting == 1) {
                if (roundCurrent == 5) {
                    localStorage.playerOneResults = playerOneScore;
                    localStorage.playerTwoResults = playerTwoScore;
                    localStorage.timeStoreResults = timer;
                    localStorage.roundleftResults = clamp(roundCurrent, 1, 10);
                    
                    window.location.href='./results.html';
                } 
                if (playerOneScore == 3 || playerTwoScore == 3)
                {
                    localStorage.playerOneResults = playerOneScore;
                    localStorage.playerTwoResults = playerTwoScore;
                    localStorage.timeStoreResults = timer;
                    localStorage.roundleftResults = clamp(roundCurrent, 1, 10);

                    window.location.href='./results.html';
                } 
            } else if (localStorage.modeSetting == 2) {
                if (roundCurrent == 7) {
                    localStorage.playerOneResults = playerOneScore;
                    localStorage.playerTwoResults = playerTwoScore;
                    localStorage.timeStoreResults = timer;
                    localStorage.roundleftResults = clamp(roundCurrent, 1, 10);

                    window.location.href='./results.html';
                } 
                if (playerOneScore == 4 || playerTwoScore == 4)
                {
                    localStorage.playerOneResults = playerOneScore;
                    localStorage.playerTwoResults = playerTwoScore;
                    localStorage.timeStoreResults = timer;
                    localStorage.roundleftResults = clamp(roundCurrent, 1, 10);

                    window.location.href='./results.html';
                } 
            }

            altInteract = false;
            playerTurn = 1;
            roundCurrent++;

            if (roundText !== null) {
                roundText.innerText = `Round ${roundCurrent} - Player #${clamp(playerTurn, 1, 2)}'s Turn!`;
            }
        }
    }, 3000);
}

// Button Rock //
if (buttonRock !== null) {
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
}
// Button Paper //
if (buttonPaper !== null) {
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
}


// Button Scissor //
if (buttonScissors !== null) {
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
}


// Button Lizard //
if (buttonLizard !== null) {
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
}


// Button Spock //
if (buttonSpock !== null) {
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
}

if (roundText !== null) {
    roundText.innerText = `Round ${roundCurrent} - Player #${clamp(playerTurn, 1, 2)}'s Turn!`;
}

function CompareAnswers(player1, player2)
{
    if (player1 == player2) {
        playerResponseText.innerText = `It's a Tie!`;
        ButtonResultChange();

        playerOneScoreText.innerText = `Player #1 - ${playerOneScore}`;
        playerTwoScoreText.innerText = `Player #2 - ${playerTwoScore}`;

        return;
    }

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
                playerResponseText.innerText = 'Scissors decapitates Lizard!';
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
                playerResponseText.innerText = 'Scissors decapitates Lizard!';
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
if (playerOneScoreText !== null) {
    playerOneScoreText.innerText = `Player #1 - ${playerOneScore}`;
}
if (playerTwoScoreText !== null) {
    playerTwoScoreText.innerText = `Player #2 - ${playerTwoScore}`;
}
