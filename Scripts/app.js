const GetCPUResponse = async () => {
    const response = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');
    const text = await response.text();
    console.log(text)
}

function CompareResponse()
{

}