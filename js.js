let HumanScore = 0;
let ComputerScore = 0;
game();
function getComputerChoice() {

    var items = ['Rock', 'Paper', 'Scissors'];
    var item = items[Math.floor(Math.random() * items.length)];
    console.log("Computer Chose: " + item);
    return item;
}

function getPlayerChoice(playerSelection) {
    playerSelection = prompt("What's your choice?");
    console.log("Human Chose: " + playerSelection);
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
   
   
    if (playerSelection === computerSelection) {
        console.log("It is a tie");
        return;
    } if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        console.log("Human Won!")
        HumanScore++
        console.log("Human: " + HumanScore);
        return playerSelection;
    }
    if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
    ) {
        console.log("Computer Won!")
        ComputerScore++;
        console.log("CS " + ComputerScore);
        return computerSelection;
    
    }
}

function game() {
    for (let numberOfRounds = 0; numberOfRounds < 5; numberOfRounds++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    } 
}

function announceWinner() {
    if (HumanScore > ComputerScore) {
        console.log("FINALLLLY Human WON!!")
    } else {
        console.log("FINALLLLY Computer Won! ")
    }
}

announceWinner();


    