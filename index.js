let computerSelection;
function getComputerChoice(){
    let temp = Math.floor(Math.random()*10);
    if (temp >= 0 && temp <=2){
        computerSelection = "Rock";
        return;
    } else if (temp > 2 && temp < 6){
        computerSelection = "Paper";
        return;
    } else if (temp >= 6 && temp < 9){
        computerSelection = "Scissors";
        return;
    } else {
        getComputerChoice();
        return;
    }
    
}

let playerSelection;
function getPlayerSelection(){
    temp = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
    if (temp == "rock") {
        playerSelection = "Rock";
        return;
    } else if (temp == "paper") {
        playerSelection = "Paper";
        return;
    } else if (temp == "scissors") {
        playerSelection = "Scissors";
        return;
    } else {
        console.log("That's not an option!  Try again:");
        getPlayerSelection();
    }
}

function getWinner(playerSelection, computerSelection) {
    let temp;
    switch (computerSelection) {
        case "Rock":
            switch (playerSelection) {
                case "Rock":
                    temp="tie";
                    break;
                case "Paper":
                    temp="playerWin";
                    break;
                case "Scissors":
                    temp="computerWin";
                    break;
            }
            break;
        case "Paper":
            switch (playerSelection) {
                case "Rock":
                    temp="computerWin";
                    break;
                case "Paper":
                    temp="tie";
                    break;
                case "Scissors":
                    temp="playerWin"
                    break;
            }
            break;
        case "Scissors" :
            switch (playerSelection) {
                case "Rock":
                    temp="playerWin";
                    break;
                case "Paper":
                    temp="computerWin";
                    break;
                case "Scissors":
                    temp="tie"
                    break;
            }
    }
    switch (temp) {
        case "playerWin":
            console.log(`You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`);
            break;
        case "computerWin":
            console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`);
            break;
        case "tie":
            console.log(`It was a tie! You both picked ${playerSelection.toLowerCase()}! :-0`)
    }
}

function playAgainInquiry() {
    let temp = (prompt("Would you like to play again? yes/no")).toLowerCase();
    temp == "yes" ? playGame() : console.log("Okay, thanks for playing with me!");

}

function playGame(){
    getPlayerSelection();
    getComputerChoice();
    getWinner(playerSelection, computerSelection);
    playAgainInquiry();
}

playGame();