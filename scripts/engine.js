const lilys = [
    './images/babyLily.jpg',
    './images/babyLily.jpg',
    './images/lilyAniversario.PNG',
    './images/lilyAniversario.PNG',
    './images/lilyBruno.jpg',
    './images/lilyBruno.jpg',
    './images/lilyCastrada.jpg',
    './images/lilyCastrada.jpg',
    './images/lilyDormindo.jpg',
    './images/lilyDormindo.jpg',
    './images/lilyLeao.jpg',
    './images/lilyLeao.jpg',
    './images/lilySuricato.jpg',
    './images/lilySuricato.jpg',
    './images/monaLily.JPG',
    './images/monaLily.JPG',
    './images/nataLily.jpg',
    './images/nataLily.jpg',
    './images/lilyPraiana.jpg',
    './images/lilyPraiana.jpg',
    './images/lilySantana.png',
    './images/lilySantana.png',
    './images/carro.jpg',
    './images/carro.jpg',
    './images/renner.jpg',
    './images/renner.jpg',
    './images/caixote.jpg',
    './images/caixote.jpg',
    './images/urso.jpg',
    './images/urso.jpg',
    './images/anestesiada.jpg',
    './images/anestesiada.jpg'
];

const nivelButtons = document.querySelectorAll('.nivel');
const game = document.querySelector('.game');
const turnoElement = document.getElementById('turno');
const nomepLabel = document.querySelector('#turno .nomep');
const numPlayersSelect = document.getElementById('numPlayers');
const placarElement = document.getElementById('placar');
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');

let nivelAtual = 'facil'; 
let columns;
let openCards = [];
let numPlayers = Number(numPlayersSelect.value);
let currentPlayer = 1;

let pontuacaoPlayer1 = 0;
let pontuacaoPlayer2 = 0;

//mudando numero de jogadores
numPlayersSelect.addEventListener('change', (e) => {
    numPlayers = Number(e.target.value);

    if(numPlayers===2){ //mostra o player que ta jogando
        turnoElement.style.display = 'block';
        currentPlayer = 1;
        nomepLabel.textContent = `Player ${currentPlayer}`;
        placarElement.style.display = 'block';
    }
    else{ // so tem um jogador
        turnoElement.style.display = 'none';
        placarElement.style.display = 'none';
    }
});

nivelButtons.forEach(botSel =>{
    botSel.addEventListener('click', ()=> {
        nivelAtual = botSel.dataset.level;
        nivelButtons.forEach(b=> b.classList.remove('ativo'));
        botSel.classList.add('ativo')

        resetGame();
    })
})

function resetGame(){
    // limpa o grid
    game.innerHTML = '';
    openCards = [];
    pontuacaoPlayer1 = 0;
    pontuacaoPlayer2 = 0;

    if (numPlayers===2){
        placarElement.style.display = 'block';
    }
    else{
        placarElement.style.display = 'none';
    }

    score1El.textContent = pontuacaoPlayer1;
    score2El.textContent = pontuacaoPlayer2;

    if (nivelAtual === 'facil') {
    lilysNoJogo = lilys.slice(0, 8 * 2);
    columns     = 4;
    } 
    else if (nivelAtual === 'medio') {
    lilysNoJogo = lilys.slice(0, 12 * 2);
    columns     = 6;
    } 
    else if (nivelAtual === 'dificil') {
    lilysNoJogo = lilys.slice(0, 16 * 2);
    columns     = 8;
    } 
    else {
    // fallback, caso alguém injete outro nivel
    lilysNoJogo = lilys.slice(0, 8 * 2);
    columns= 4;
    }

    game.style.gridTemplateColumns = `repeat(${columns}, 100px)`;
    game.style.width = 'fit-content';
    game.style.margin = '0 auto';

    let randLilys = lilysNoJogo.sort(() => (Math.random() > 0.5) ? 2 : -1);
    
    for (let i=0; i < lilysNoJogo.length; i++){
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = `<img src="${randLilys[i]}" />`;
        box.onclick = handleClick;
        document.querySelector(".game").appendChild(box);
    }
}

function handleClick(){

    if (this.classList.contains('boxOpen') || this.classList.contains('boxMatch')) {
        return;
    }
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

        if(numPlayers===2){
            if(currentPlayer===1){
                pontuacaoPlayer1++;
                score1El.textContent = pontuacaoPlayer1;
            }
            else{
                pontuacaoPlayer2++;
                score2El.textContent = pontuacaoPlayer2;
            }
        }
    }
    else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");

        if(numPlayers===2){
            currentPlayer = (currentPlayer === 1) ? 2 : 1;
            nomepLabel.textContent= `Player ${currentPlayer}`;
        }
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === lilysNoJogo.length){
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

        setTimeout(() => {
            if(numPlayers===2){
                if(pontuacaoPlayer1 > pontuacaoPlayer2){
                    alert(`O Player 1 venceu por ${pontuacaoPlayer1}×${pontuacaoPlayer2}`);
                }
                else if(pontuacaoPlayer2 > pontuacaoPlayer1){
                    alert(`O Player 2 venceu por ${pontuacaoPlayer2}×${pontuacaoPlayer1}`);
                }
                else{
                   alert(`Empate: ${pontuacaoPlayer1}×${pontuacaoPlayer2}`); 
                }
            }
            else{
                alert("Você Venceu!");
            }
        }, 500);
    }
}

resetGame();
