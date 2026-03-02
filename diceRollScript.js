const API = "https://web-dice-nodejs-e3c5ajhfezd5gdg0.centralus-01.azurewebsites.net"

//Makes the Enter key the activator
document.getElementById("rollButton").addEventListener("click", rollDice);

document.getElementById("rollButton").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        rollDice();
    }
});

//Allows for the dice to be pre-rolled
window.onload = rollDice;
window.onload = wakeServer;

async function rollDice()
{
    try
    {
        const response =
            await fetch(API + "/api/roll?dice=1&sides=6");

        const data =
            await response.json();

        document.getElementById("result").value =
            data.rolls[0];
    }
    catch(error)
    {
        console.log("Roll failed:", error);
    }
}

async function wakeServer()
{
    try
    {
        await fetch(API + "/api");
        console.log("Server awake");
    }
    catch(error)
    {
        console.log("Wake failed:", error);
    }
}