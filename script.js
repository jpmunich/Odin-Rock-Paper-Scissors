const root = document.querySelector(':root');
const weapons = document.querySelectorAll(".weapon-img");
const score = Array.from(document.querySelectorAll(".score-label"));
const gameInfo = document.querySelector('h2');
const gameInfoSubheading = document.querySelector('#game-info-subheading');
const playerSelectedWeapon = document.querySelector("#player-selected-weapon");
const computerSelectedWeapon = document.querySelector('#computer-selected-weapon');
const endGameButton = document.querySelector('#button');
const endGameScreen = document.querySelector('.end-game-screen');
const overlay = document.querySelector('.overlay');

const changeColorButton = document.querySelector('#change-color');
let hue = 165;

//Color Change mode
changeColorButton.addEventListener("click", () => {
    hue += 60;
    root.style.setProperty('--darker-background', `hsl(${hue}, 17%, 33%)`)
})
let computerScore = 0;
let playerScore = 0;

for (let i = 0; i < weapons.length; i++) {
    weapons[i].addEventListener("click", () => {
        const computer = getComputerTurn();
        playRound(computer, i)
        if (computer == 0) computerSelectedWeapon.src = "./images/rock.png";
        if (computer == 1) computerSelectedWeapon.src = "./images/paper.png";
        if (computer == 2) computerSelectedWeapon.src = "./images/scissors.png";
    })
}

endGameButton.addEventListener("click", resetGame);

weapons[0].addEventListener("click", () => {playerSelectedWeapon.src = "./images/rock.png"});
weapons[1].addEventListener("click", () => {playerSelectedWeapon.src = "./images/paper.png"});
weapons[2].addEventListener("click", () => {playerSelectedWeapon.src = "./images/scissors.png"});

const updateGame = () => {
    score[0].innerText = "Player: " + playerScore;
    score[1].innerText = "Computer: " + computerScore;

    if (computerScore > 4 || playerScore > 4) {
        endGame();
    }
}
updateGame();

function endGame() {
    computerScore = 0;
    playerScore = 0;
    overlay.setAttribute("id", "overlay");
    endGameScreen.setAttribute("id", "game-over");
    updateGame();
}

function resetGame() {
    gameInfo.innerText = "Choose Your Weapon!";
    overlay.setAttribute("id", "disappear");
    endGameScreen.setAttribute("id", "disappear");
    playerSelectedWeapon.src = "./images/question-mark.png";
    computerSelectedWeapon.src = "./images/question-mark.png";
}

const getComputerTurn = () => {return Math.floor(Math.random() * 3);}

function playRound(computer, player) {
    const playerWinConditions = [[2, 0], [0, 1], [1, 2]];
    const computerWinConditions = [[0, 2], [1, 0], [2, 1]];
    const result = [computer, player];

    for (let i = 0; i < 3; i++) {
        if (playerWinConditions[i].join("") === result.join("")) {
            playerScore++;
            gameInfo.innerText = "You Won!";
            break;
        } else if (computerWinConditions[i].join("") === result.join("")) {
            computerScore++;
            gameInfo.innerText = "You Lost!";
            break;
        } else {
            gameInfo.innerText = "It's a Tie!"
        }

    }
    updateGame();
}
