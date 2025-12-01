function getComputerChoice() {
    // Generate one of three random numbers
    let choiceID = Math.floor(Math.random()*3);
    // Assign each choice to a string: "rock", "paper", or "scissors"
    let choiceStr;
    if (choiceID === 0) {
        choiceStr = "rock";
    } else if (choiceID === 1) {
        choiceStr = "paper";
    } else {
        choiceStr = "scissors";
    }
    // Return result
    return choiceStr;
}

function getHumanChoice() {
    // prompt user to choose, and return the value.
    return prompt('Please enter "rock", "paper", or "scissors".');
}

let roundCount = 0;
let compScore = 0;
let humanScore = 0;

let youResult = document.querySelector(".human-score");
let compResult = document.querySelector(".comp-score");
let results = document.querySelector(".results");

let youText = document.createElement('span');
youResult.appendChild(youText);

let compText = document.createElement('span');
compResult.appendChild(compText);



function playRound(humanChoice, computerChoice) {
    if( humanScore >= 5 || compScore >= 5 ) {
        return;
    }

    roundCount += 1;
    // declare output string, initially empty
    let winString = "";
    // determine winner and return corresponding string
    if (humanChoice === computerChoice) {
        // condition for tie.
        winString = "Tie! Both chose " + humanChoice + ".";
    } else if (humanChoice === "rock") { // conditions for non-tie human choice as rock
        if (computerChoice === "paper") {
            winString = "You lose! Paper beats rock.";
            compScore += 1;
        } else {
            winString = "You win! Rock beats scissors.";
            humanScore += 1;
        }
    } else if (humanChoice === "paper") { // conditions for non-tie human choice as paper
        if (computerChoice === "rock") {
            winString = "You win! Paper beats rock.";
            humanScore += 1;
        } else {
            winString = "You lose! Scissors beats paper.";
            compScore += 1;
        }
    } else { // conditions for non-tie human choice as scissors
        if (computerChoice === "rock") {
            winString = "You lose! Rock beats scissors.";
            compScore += 1;
        } else {
            winString = "You win! Scissors beats paper.";
            humanScore += 1;
        }
    }

    youText.textContent = `${humanScore}`;
    compText.textContent = `${compScore}`;

    let newMessage = document.createElement('p');
    newMessage.textContent = "Round " + roundCount + ": " + winString;
    results.appendChild(newMessage);

    let winMessage = document.createElement('p');
    if (humanScore >= 5) {
        winMessage.textContent = "Game over! You win!";
    }
    if (compScore >= 5) {
        winMessage.textContent = "Game over! Computer wins!"
    }
    results.appendChild(winMessage);
}

let rockButton = document.querySelector("#rock");
rockButton.addEventListener('click', () => {playRound("rock", getComputerChoice())});

let paperButton = document.querySelector("#paper");
paperButton.addEventListener('click', () => {playRound("paper", getComputerChoice())});

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener('click', () => {playRound("scissors", getComputerChoice())});



