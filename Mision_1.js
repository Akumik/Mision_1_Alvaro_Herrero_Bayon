const treasureLocation = Math.floor(Math.random() * 9);
let piles = document.querySelectorAll(".pile");
let nTriesText = document.getElementById("nTries");
let nTries = 0;


function dig(pileID){
    nTriesText.innerHTML = ++nTries;

    if(pileID == treasureLocation){
        piles[pileID].classList.add("treasure");
        document.getElementById("message").textContent = "Encontraste el tesoro";
    }else{
        piles[pileID

        ].classList.add("empty");
    }
}

