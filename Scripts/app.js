const rock = 0;
const paper = 1;
const scissors = 2;
const lizard = 3;
const spock = 4;

const GetCPUResponse = async () => {
    const response = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');
    const text = await response.text();
    console.log(text);
}

function CompareResponse(player1, player2)
{
    switch (player1) 
    {
        case rock:
            if (player2 == scissors) {
                
            } else if (player == lizard) {

            } else {

            }
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
