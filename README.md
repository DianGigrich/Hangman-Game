# Hangman-Game

startGame.addEventListener(“click”, function() {

}


Var startGame = document.getElementById (“start-button”)

var over = document.querySelector(“.playfield”)

var secondsLeft = 10

Function setTime() {

var startGame = setInterval(function(){
	secondsLeft--;
	timeEl.textContent = secondsLeft;

	if (secondsLeft === 0 ){
		clearInterval(timerInterval);
		over.textContent = “GAME OVER”
		over.setAttribute(“style”, “font-size: 40px; font-weight: bold”
}
}, 1000);
}


var winSpan = document.getElementId("winCount");
var lossSpan = document.getElementId("lossCount")

localStorage.setItem("wins", wins)
localStorage.setItem("losses", losses)
var retrieveWins = localStorage.getItem("wins")
var retrieveLosses = localStorage.getItem("loss")

<!-- var retrievePassword = localStorage.getItem("password"); -->

winSpan.textContent = retrieveWins;
lossSpan.textContent = retrieveLosses;
