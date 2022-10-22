const userScore = document.getElementById("userScoreVal");
const computerScore = document.getElementById("compScoreVal");
const usersChoice = document.getElementById("result-user-stat");
const computersChoice = document.getElementById("result-comp-stat");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
let userTotalScore = 0;
let computerTotalScore = 0;
let rounds = 5;
const arr = ["Rock", "Paper", "Scissor"];

// Reset everything
function resetEverything() {
    rounds = 5;
    userTotalScore = 0;
    computerTotalScore = 0;
    userScore.innerText = 0;
    computerScore.innerText = 0;
    usersChoice.innerText = "User: ";
    computersChoice.innerText = "Computer:";
    setTimeout(() => {
        document.getElementById("result-final-stat").innerText = "Winner: ";
    }, 2000);
}

// Reset the game after 5 rounds
function checkRounds() {
    rounds--;
    if (rounds > 0) {
        return 1;
    } else {
        if (userTotalScore > computerTotalScore) {
            document.getElementById("result-final-stat").innerText = "Winner: USER";
            resetEverything();
        } else if (userTotalScore < computerTotalScore) {
            document.getElementById("result-final-stat").innerText =
                "Winner: COMPUTER";
            resetEverything();
        } else {
            document.getElementById("result-final-stat").innerText =
                "Winner: DRAW";
            resetEverything();
        }
    }
}

// Simulate computers choice
function simulate() {
    const compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

// Update the choice on the screen
function updateChoice(userChoice, computerChoice) {
    usersChoice.innerText = `User: ${arr[userChoice]}`;
    computersChoice.innerText = `Computer: ${arr[computerChoice]}`;
}

// Calculate the score
function calculateScore(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return;
    } else if (
        (userChoice === 0 && computerChoice === 1) ||
        (userChoice === 1 && computerChoice === 2) ||
        (userChoice === 2 && computerChoice === 0)
    ) {
        computerTotalScore += 1;
        computerScore.innerText = computerTotalScore;
    } else {
        userTotalScore += 1;
        userScore.innerText = userTotalScore;
    }
}

rock.addEventListener("click", () => {

    if (checkRounds()) {
        let compChoice = simulate();
        calculateScore(0, compChoice);
        updateChoice(0, compChoice);
    }
});

paper.addEventListener("click", () => {

    if (checkRounds()) {
        let compChoice = simulate();
        calculateScore(1, compChoice);
        updateChoice(1, compChoice);
    }
});

scissor.addEventListener("click", () => {

    if (checkRounds()) {
        let compChoice = simulate();
        calculateScore(2, compChoice);
        updateChoice(2, compChoice);
    }
});
