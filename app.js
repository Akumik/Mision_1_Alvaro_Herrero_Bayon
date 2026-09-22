const dirtPiles = document.querySelector("#dirt_piles");
const treasureLocation = Math.floor(Math.random() * 9);
const nTriesText = document.getElementById("nTries");
const message = document.getElementById("message");

let gameOver = false;
let nTries = 0;

for (let i = 0; i < 9; i++) {
    const pile = document.createElement("div");
    pile.classList.add("pile");
    pile.dataset.index = i;
    dirtPiles.appendChild(pile);
}

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

function dig(pileID, pile){
    
    if(pile.classList.contains("treasure") || pile.classList.contains("empty")){
        return;
    }
    
    nTriesText.innerHTML = ++nTries;

    if(pileID === treasureLocation){
        pile.classList.add("treasure");
        message.textContent = "Encontraste el tesoro";
        gameOver = true;
    }else{
        pile.classList.add("empty");
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "d") {
        document.body.classList.toggle("light-mode");
    }
});