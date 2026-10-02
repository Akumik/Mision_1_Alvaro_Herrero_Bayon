const dirtPiles = document.querySelector("#dirt_piles");
let treasureLocation;
const nTriesText = document.getElementById("nTries");
const message = document.getElementById("message");
const lowestNtriesText = document.getElementById("lowestNtries");
lowestNtriesText.textContent = "-";

let gameOver = false;
let nTries = 0;
let lowestNtries = 10;

dirtPiles.addEventListener("click", (event) => {
    const pile = event.target.closest(".pile");
    if(!pile){
        return;
    }
    if (gameOver) {
        return;
    }
    dig(Number(pile.dataset.index), pile);
});

initGame();

function initGame() {
    message.textContent = "Elije un monton a excabar";
    treasureLocation = Math.floor(Math.random() * 9);
    dirtPiles.replaceChildren();
    for (let i = 0; i < 9; i++) {
        const pile = document.createElement("div");
        pile.classList.add("pile");
        pile.dataset.index = i;
        dirtPiles.appendChild(pile);
    }
}

function dig(pileID, pile){
    
    if(pile.classList.contains("treasure") || pile.classList.contains("empty")){
        return;
    }
    
    nTriesText.textContent = ++nTries;

    if(pileID === treasureLocation){
        pile.classList.add("treasure");
        message.textContent = `Encontraste el tesoro en ${nTries} intentos!`;
        gameOver = true;
        createRestartButton();
    }else{
        pile.classList.add("empty");
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "d") {
        document.body.classList.toggle("light-mode");
    }
});

function resetGame() {
    gameOver = false;
    if(lowestNtries > nTries){
        lowestNtries = nTries;
    }
    nTries = 0;
    nTriesText.textContent = nTries;
    lowestNtriesText.textContent = lowestNtries;

    initGame();

}

function createRestartButton() {
    const button = document.createElement("button");
    button.textContent = "Reiniciar partida";
    document.body.appendChild(button);
    button.addEventListener("click", () => {
        resetGame();
        button.remove();
    })
}