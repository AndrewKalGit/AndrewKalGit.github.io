/*
 * DOTS: Level Three
 *
 */
const buttonEl = document.querySelector(".js-arena")

const scoreDisplayEl = document.querySelector(".js-score")
console.log(scoreDisplayEl);

let score = 0;

buttonEl.addEventListener("click", increment);

function increment(event) {
    const increment = parseInt(event.target.dataset.increment);
    //Dataset are read as stringies
    console.log(increment);
    if (score < 100 && increment) {
			if (increment === 20) {
				score += 20;
				console.log(score);
				scoreDisplayEl.innerText = score;
			} else if (increment === 5) {
				score += 5;
				scoreDisplayEl.innerText = score;
			} else if (increment === 10) {
				score += 10;
				scoreDisplayEl.innerText = score;
			}
		} else if (!increment) {
            score -= 25;
            scoreDisplayEl.innerText = score;
		} else if (score >= 100) {
			document.body.classList.add('game-over');
		} 
        if (score < 0) {
            document.body.classList.add('you-lost');
        }
}
