const emojis = [
    "😍",
    "😍",
    "🥳",
    "🥳",
    "😶‍🌫️",
    "😶‍🌫️",
    "🫶",
    "🫶",
    "🐶",
    "🐶",
    "🤩",
    "🤩",
    "🤗", 
    "🤗",
    "🤡",
    "🤡"
];
let openCards = [];

let randEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for (let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = randEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
    else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        // toca o confetti
        const params = {
        particleCount: 500,
        spread: 90,
        startVelocity: 70,
        origin: { x: 0, y: 0.5 },
        angle: 45
        };
        confetti(params);
        // lança de volta pra direita
        confetti({ ...params, origin: { x: 1, y: 0.5 }, angle: 135 });

        // alert("Você Venceu!")
        setTimeout(()=> {
            alert("Você Venceu!");
        }, 1000);
    }
}


