const valueStatements = document.querySelector('.statement')

const statementsQuotes = [
	'The niche search engine for your beauty products',
	"Let's find what YOU want",
	'Never stop searching',
];

valueStatements.textContent = statementsQuotes[0];    
setInterval(function () {
valueStatements.textContent = statementsQuotes[0];
}, 7000);
setInterval(function () {
valueStatements.textContent = statementsQuotes[1];
}, 14000);
setInterval(function () {
	valueStatements.textContent = statementsQuotes[2];
}, 2100);
//learn to optimize this


// for(let i = 0; i < statements.length; i++){
//     goThroughStatements(i);
// }
