function startGame() {
	var question1 = prompt("What would you like to do on a rainy day?");

	document.getElementById("answer1").innerHTML = question1; 
}

function continueGame1() {
	var question2 = prompt("What is your favorite book?");

	document.getElementById("answer2").innerHTML = question2;
}

function continueGame2() {
	var question3 = prompt("What is your favorite movie?");

	document.getElementById("answer3").innerHTML = question3;
}

function continueGame3() {
	var question4 = prompt("What do you like to drink when it is cold?");
	var question5 = prompt("What is your name?")

	document.getElementById("answer4").innerHTML = question4;
	document.getElementById("answer5").innerHTML = question5;
}