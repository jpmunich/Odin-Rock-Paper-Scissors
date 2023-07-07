const weapons = document.querySelectorAll(".weapon-img");

for (let i = 0; i < weapons.length; i++) {
    weapons[i].addEventListener("click", () => {
        playRound(getComputerTurn(), i)
    })
}

function getComputerTurn() {
    return Math.floor(Math.random() * 3);
}

function getPlayerTurn() {
    return Math.floor(Math.random() * 3);
}

function playRound(computer, player) {
    const playerWinConditions = [[2, 0], [0, 1], [1, 2]];
    const computerWinConditions = [[0, 2], [1, 0], [2, 1]];
    const result = [computer, player];

    for (let i = 0; i < 3; i++) {
        if (playerWinConditions[i].join("") === result.join("")) return "player";
        else if (computerWinConditions[i].join("") === result.join("")) return "computer";
    }
        return "tie";
}

function game() {
    for (let i = 0; i < 5; i++) {
        return playRound(getComputerTurn(), 1);
    }
}
