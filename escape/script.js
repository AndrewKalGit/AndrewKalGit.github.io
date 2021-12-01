// Enable navigation prompt
// window.onbeforeunload = function () {
// 	return true;
const emptySpaceMsg = document.querySelector('#examineEmptySpace');
const consoleMsg = document.querySelector('.consoleMsg');
const originalConsoleMsg = "There has to be way out of here... Let's keep looking around!";

emptySpaceMsg.addEventListener('click', nothingToSeeHere);

function nothingToSeeHere(event) {
	document.querySelector('.consoleMsg').innerHTML =
		'Nothing to see here... better keep moving on.';
}

function originalMessage(event) {
	document.querySelector('.consoleMsg').innerHTML = originalConsoleMsg;
}

setTimeout(originalMessage, 5000);
