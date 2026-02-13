//Makes the Enter key the activator
document.getElementById("rollButton").addEventListener("click", rollDice);

document.getElementById("rollButton").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        rollDice();
    }
});

//Allows for the dice to be pre-rolled
window.onload = rollDice;

function rollDice() {
    //Rolls 2 random numbers from 1-6
    const roll = Math.floor(Math.random() * 6) + 1;
    const opponentRoll = Math.floor(Math.random() * 6) + 1;

    document.getElementById("playerRoll").value = roll;
    document.getElementById("opponentRoll").value = opponentRoll;
    
    //Creates a result message that changes with the comparison below
    if (roll > opponentRoll) {
        document.getElementById("resultMessage").value = "Player Wins!";
    } else if (roll < opponentRoll) {
        document.getElementById("resultMessage").value = "Opponent Wins!";
    } else {
        document.getElementById("resultMessage").value = "It's a Draw!";
    }
}
