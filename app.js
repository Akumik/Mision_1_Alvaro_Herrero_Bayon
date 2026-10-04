const dirtPiles = document.querySelector("#dirt_piles");
let treasureLocation;
const nTriesText = document.getElementById("nTries");
const message = document.getElementById("message");
const lowestNtriesText = document.getElementById("lowestNtries");
const TOTAL_PILES = 9;
const resetButton = document.getElementById("reset_button");

let gameOver = false;
let nTries = 0;
let lowestNtries = Infinity;

dirtPiles.addEventListener("click", (event) => {
    const pile = event.target.closest(".pile");
    if(!pile){
        return;
    }
    dig(pile);
});

document.addEventListener("keydown", (event) => {
    if (event.repeat) {
        return;
    }
    if (event.key.toLowerCase() === "d") {
        document.body.classList.toggle("light-mode");
    }
});

resetButton.addEventListener("click", resetGame);

initGame();

function initGame() {
    message.textContent = "Elije un monton a excabar";
    treasureLocation = Math.floor(Math.random() * TOTAL_PILES);
    dirtPiles.replaceChildren();
    for (let i = 0; i < TOTAL_PILES; i++) {
        const pile = document.createElement("div");
        pile.classList.add("pile");
        pile.dataset.index = i;
        dirtPiles.appendChild(pile);
    }
}

function dig(pile){
    if(gameOver){
        return;
    }
    if(pile.classList.contains("treasure") || pile.classList.contains("empty")){
        return;
    }
    
    const pileID = Number(pile.dataset.index);

    ++nTries;
    nTriesText.textContent = nTries;

    if(pileID === treasureLocation){
        pile.classList.add("treasure");
        message.textContent = `Encontraste el tesoro en ${nTries} intentos!`;
        resetButton.hidden = false;
        gameOver = true;
        updateRecord();
        revealPiles();
    }else{
        pile.classList.add("empty");
    }
}

function revealPiles() {
    dirtPiles.querySelectorAll(".pile").forEach((pile) => {
        if (!pile.classList.contains("treasure") && !pile.classList.contains("empty")) {
            pile.classList.add("empty");
        }
    });
}

function updateRecord() {
    lowestNtries = Math.min(lowestNtries, nTries);
    lowestNtriesText.textContent = lowestNtries;
}

function resetGame() {
    gameOver = false;
    nTries = 0;
    nTriesText.textContent = nTries;
    lowestNtriesText.textContent = lowestNtries;
    resetButton.hidden = true;

    initGame();

}
