const rock = 0;
const paper = 1;
const scissors = 2;
const lizard = 3;
const spock = 4;

let roundCurrent = 1;
let playerOneScore = 0;
let playerTwoScore = 0;

let timerText = document.getElementById('timerElementID');

let buttonRock = document.getElementById('buttonRock');
let buttonPaper = document.getElementById('buttonPaper');
let buttonScissors = document.getElementById('buttonScisssors');
let buttonLizard = document.getElementById('buttonLizard');
let buttonSpock = document.getElementById('buttonSpock');

const GetCPUResponse = async () => {
    const response = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');
    const text = await response.text();
    console.log(text);
}

let timer = 60;
function myFunction() {
    timer--;
    timerText.innerText = timer;
}

setInterval(myFunction, 1000);

buttonRock.addEventListener('click', function() {
    alert('Test');
});






function CompareAnswers(player1, player2)
{
    switch (player1) 
    {
        case rock:

        break;

        case paper:

        break;

        case scissors:

        break;

        case lizard:

        break;

        case spock:

        break;
    }

    switch (player2) 
    {
        case rock:

        break;

        case paper:

        break;

        case scissors:

        break;

        case lizard:

        break;

        case spock:

        break;
    }
}
