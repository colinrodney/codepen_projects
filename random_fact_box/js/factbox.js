// page loads with blank fact space
(function loadPage() {
	document.getElementById("randomQuote").innerHTML = " ";
})();

let facts = ["Thanks for using the Factbox!",
	"Coded, Developed, and Maintained by Colin R. Rodney",

	"Most people think of Rosa Parks as the first person to refuse to give up their seat on a bus in Montgomery, Alabama. There were actually several women who came before her; one of whom was Claudette Colvin.",

	"On Wednesday, August 28, 1963, 250,000 Americans united at the Lincoln Memorial for the final speech of the March on Washington. As Martin Luther King Jr. stood at the podium, he eventually pushed his notes aside.",

	"Innoculation was introduced to America by a slave!",

	"The earliest recorded protest against slavery was by the Quakers in 1688",

	"Of the 12.5 million Aficans shipped to the New World during the Transatlantic Slave Trade, fewer than 388,000 arrived in the United States. ",
]


// function to generate rando fact when button is clicked
function getQuote() {
	var randomFacts = Math.floor(Math.random() * facts.length);
	document.getElementById("randomQuote").innerHTML = facts[randomFacts]
}