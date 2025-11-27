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

function playGame() {
    function playRound(humanChoice, computerChoice) {
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

        console.log(winString);
    }

    //create a number variable to represent human score with initial value of 0.
    let humanScore = 0;
    //create a number variable to represent computer score with initial value of 0.
    let compScore = 0;

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > compScore) {
        console.log("Congratulations! You won the whole game!");
    } else if (compScore > humanScore) {
        console.log("The computer one this game. Better luck next time!");
    } else {
        console.log("Tie overall!");
    }
}

playGame();


