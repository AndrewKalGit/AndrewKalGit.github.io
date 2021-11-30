/*
 * DOTS: Level Two
 *
 */
const dotLevel2 = document.querySelector('.js-arena');
console.log(dotLevel2);

const scoreDisplayEl = document.querySelector('.js-score');
console.log(scoreDisplayEl);

let score = 0;

// dotLevel2.forEach(function () {
// (addEventListener("click", increment))});

// function increment(event) {
//     score += 10;
//     scoreDisplayEl.innerText = score;
//     if (score === 100) {
//         document.body.classList.add("game-over")
//     }
// }

dotLevel2.addEventListener('click', increment);

function increment(event) {
	score += 10;
	scoreDisplayEl.innerText = score;
	if (score === 100) {
		document.body.classList.add('game-over');
	}
}