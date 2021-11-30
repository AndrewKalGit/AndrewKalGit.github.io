/*
 * DOTS: Level One
 * 
 */
let score = 0; 

const scoreCard = document.querySelector('.js-score');
const dotBtn = document.querySelector('.js-dot');

dotBtn.addEventListener('click', clicked);

function clicked(event){
    score += 10;
    scoreCard.innerText = score;
    if (score === 100){
    document.body.classList.add("game-over");
    }
}
