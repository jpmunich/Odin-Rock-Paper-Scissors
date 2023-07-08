const weapons = document.querySelectorAll(".weapon-img");
const score = Array.from(document.querySelectorAll(".score-label"));
const gameInfo = document.querySelector('h2');
const gameInfoSubheading = document.querySelector('#game-info-subheading');

let computerScore = 0;
let playerScore = 0;

for (let i = 0; i < weapons.length; i++) {
    weapons[i].addEventListener("click", () => {
        playRound(getComputerTurn(), i)
    })
}

const updateScore = () => {
    score[0].innerText = "Player: " + playerScore;
    score[1].innerText = "Computer: " + computerScore;
}
updateScore();

const getComputerTurn = () => {return Math.floor(Math.random() * 3);}
const getPlayerTurn = () => {return Math.floor(Math.random() * 3);}

function playRound(computer, player) {
    const playerWinConditions = [[2, 0], [0, 1], [1, 2]];
    const computerWinConditions = [[0, 2], [1, 0], [2, 1]];
    const result = [computer, player];

    for (let i = 0; i < 3; i++) {
        if (playerWinConditions[i].join("") === result.join("")) {
            playerScore++;


        }
        else if (computerWinConditions[i].join("") === result.join("")) computerScore++;
    }
    updateScore();
}
