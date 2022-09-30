//create array of words
    //when start button (eventlistener) is pressed, 
        //var underscoreArray = [] 
        //var arrayOfWords
        // var gameWord
        // a random word is chosen from array of words and give value of var gameWord
        // timer starts at 10
        // underscore length = word.length
            // word must be blanked out
            
var answerArray = [];
var arrayOfWords = ["elephant", "giraffe", "hippo", "platapus", "monkey", "banana"];
var word = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
console.log ("Random word: " + word);
// var lettersLeft = word.length;

// event listener on start button, calls startGame

function startGame() {
    // start timer
    // pick word
    for (let i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    console.log("Answer Array: " + answerArray);
    renderGuesses()
}

// eventlistener for keystrokes, call check guess

function checkGuess(event) {
    var guess = event.key
    // compare with answer
    // if in answer...
    for (let x = 0; x < word.length; x++) {
        if (word[x] === guess) {
            answerArray[x] = guess;
            // lettersLeft--;
        }
    }
    if (answerArray === word.split("")) {
        alert("NICE JOB!!");
    }
}

function renderGuesses () {
    // put whatever guess array is on the page
    if (answerArray === word.split("")) {
        document.querySelector(".playfield").textContent = answerArray;
    }
}

