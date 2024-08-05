//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
let winCount = 0;
let loseCount = 0;

initializeGame();

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log("randomNumber: " + randomNumber);
  attempts = 0;

  //hiding the Reset button
  document.querySelector("#resetBtn").style.display = "none";

  //showing the Guess button
  document.querySelector("#guessBtn").style.display = "inline";
  
  //showing the Attempts Remaining
  let attemptsRemaining = document.querySelector("#attemptsremaining");
  attemptsRemaining.textContent = 7;

  let playerGuess = document.querySelector("#playerGuess");
  playerGuess.focus();      //adding focus to textbox
  playerGuess.value = "";    //clearing the textbox

  let feedback = document.querySelector("#feedback");
  feedback.textContent = "";    //clearing the feedback
  
  //clearing previous guesses
  document.querySelector("#guesses").textContent = "";

  document.querySelector("#winCount").textContent = winCount;
  document.querySelector("#loseCount").textContent = loseCount;
}

function checkGuess(){
  let feedback = document.querySelector("#feedback");
  feedback.textContent = "";
  let guess = document.querySelector("#playerGuess").value;
  console.log("Player guess: " + guess);
  if (guess < 1 || guess > 99){
    feedback.textContent = "Enter a number between 1 and 99";
    feedback.style.color = "red";
    return;
  }

  attempts++;
  console.log("Attempts: " + attempts);
  feedback.style.color = "orange";
  if(guess == randomNumber){
    feedback.textContent = "You guessed it! You Won!";
    feedback.style.color = "darkgreen";
    winCount++;
    document.querySelector("#winCount").textContent = winCount;
    gameOver();
  }
  else{
    document.querySelector("#guesses").textContent += guess + " ";
    if(attempts ==7){
      document.querySelector("#attemptsremaining").textContent -= 1;
      feedback.textContent = "Sorry, you lost!\nThe actual number was " + randomNumber +".";
      feedback.style.color = "red";
      loseCount++;
      document.querySelector("#loseCount").textContent = loseCount;
      gameOver();
    }
    else if (guess > randomNumber) {
      document.querySelector("#attemptsremaining").textContent -= 1;
      feedback.textContent = "Guess was high";
    }
    else{
      document.querySelector("#attemptsremaining").textContent -= 1;
      feedback.textContent = "Guess was low";
    }
  }
}

function gameOver(){
  let guessBtn = document.querySelector("#guessBtn");
  let resetBtn = document.querySelector("#resetBtn");
  guessBtn.style.display = "none";  //hide Guess button
  resetBtn.style.display = "inline";
}