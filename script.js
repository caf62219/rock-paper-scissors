var rockButton = document.getElementById('rock');
var paperButton = document.getElementById('paper');
var scissorsButton = document.getElementById('scissors');
var resultElement = document.getElementById('result')
 var resetButton = document.getElementById('reset');

rockButton.addEventListener('click', () => {
    playRound('rock');
})
paperButton.addEventListener('click', () => {
    playRound('paper');
})
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
})
resetButton.addEventListener('click', () => {
    reset();
})

function reset(){
    resultElement.textContent = "";
}

function playRound(playerMove) {

    // Generate a random move for the computer
    const moves = ['rock', 'paper', 'scissors'];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];
  
    // Determine the winner
    let result;
    if (playerMove === computerMove) {
      result = 'It's a tie!';
    } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')
    ) {
      result = 'You win!';
    } else {
      result = 'Computer wins!';
    }
  
    // Display the result
    resultElement.textContent = `Player chose ${playerMove}, Computer chose ${computerMove}. ${result}`;
  }
 
 
