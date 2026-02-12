//Makes the Enter key the activator
document.getElementById("rollButton").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        rollDice();
    }
});

// Roll when the button is clicked
document.getElementById("rollButton").addEventListener("click", rollDice);

//Allows for the dice to be pre-rolled
window.onload = rollDice;

function rollDice() {
    //Rolls 2 random numbers from 1-6
    const roll = Math.floor(Math.random() * 6) + 1;
    const opponentRoll = Math.floor(Math.random() * 6) + 1;

    document.getElementById("result").textContent = roll;
    document.getElementById("opponentResult").textContent = opponentRoll;
    
    //Creates a result message to change with the comparison below
    let resultMessage = "";
    
    if (roll > opponentRoll) {
        resultMessage = "Player wins!";
    } else if (roll < opponentRoll) {
        resultMessage = "Opponent wins!";
    } else {
        resultMessage = "It's a draw!";
    }

    document.getElementById("resultMessage").textContent = resultMessage;
}
