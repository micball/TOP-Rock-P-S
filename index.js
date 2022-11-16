let computerChoice;
function getComputerChoice(){
    let temp = Math.floor(Math.random()*10);
    if (temp >= 0 && temp <=2){
        computerChoice = "rock";
        return;
    } else if (temp > 2 && temp < 6){
        computerChoice = "paper";
        return;
    } else if (temp >= 6 && temp < 9){
        computerChoice = "scissors";
        return;
    } else {
        getComputerChoice();
        return;
    }
    
}

let playerSelection;

function getPlayerSelection(){
    temp = prompt("Do you choose rock, paper, or scissors?");
    if (temp == "rock" || temp == "Rock") {
        playerSelection = "rock";
        return;
    } else if (temp == "paper" || temp == "Paper") {
        playerSelection = "paper";
        return;
    } else if (temp == "scissors" || temp == "Scissors") {
        playerSelection = "scissors";
        return;
    } else {
        console.log("That's not an option!  Try again:");
        getPlayerSelection();
    }
}

getPlayerSelection();
console.log(`You've selected ${playerSelection}!`);