// Empty strings to hold player and bot choices when selected
let userChoice = '';
let botChoice = '';

// empty values to hold the scores
let playerScore = 0;
let pcScore = 0;

// Finding classes to update the scores
const updateScore = () => {
  const userScore = document.querySelector('.player-score h3');
  const botScore = document.querySelector('.pc-score h3');
  userScore.textContent = playerScore;
  botScore.textContent = pcScore;
};

//finding winner class
let playerWinner = document.querySelector('.player-winner');
let pcWinner = document.querySelector('.pc-score');

//finding player + PC choices to display what has been selected
let playerChoice = document.querySelector('.playerChoice');
let pcChoice = document.querySelector('.pcChoice');

// finding score elements to add points
// Finding button
const playerOptions = document.querySelectorAll(".player-gamebtn");
// // Loop function to get all of the player button classes and find the selection with when clicked

function generateBotOption() {
  const pcPick = document.getElementsByClassName("bot-gamebtn");
  const pcOption = pcPick[Math.floor(Math.random() * pcPick.length)];
  console.log(pcOption.textContent);
  botChoice = pcOption.textContent;
}

function bindUserInput() {
  for (let i = 0; i < playerOptions.length; i++) {
    playerOptions[i].addEventListener("click", function () {
      const playerPick = this.innerText;
      console.log(playerPick);
      userChoice = playerPick;
      playerChoice.textContent = 'You chose : ' + userChoice;

      // Bot option
      generateBotOption();
      pcChoice.textContent = 'Bot chose : ' + botChoice

      // Winners
      winCondtion()

      // updating scores
      updateScore();

    });
  }
}

function winCondtion() {
  if (userChoice === botChoice) {
    playerWinner.textContent = 'It is a draw!';
    return;
  }
  //// Checking Spock conditions
  if (userChoice === 'spock') {
    if ((botChoice == 'rock') || (botChoice == 'scissors')) {
      playerWinner.textContent = 'You win!!';
      playerScore++;
      updateScore();
      return;
    } else {
      playerWinner.textContent = 'The PC wins';
      pcScore++;
      updateScore();
      return;
    }
  } 

  if (userChoice === 'rock') {
    if ((botChoice == 'scissors') || (botChoice == 'lizard')) {
      playerWinner.textContent = 'You win!!';
      playerScore++;
      updateScore();
      return;
    } else {
      playerWinner.textContent = 'The PC wins';
      pcScore++;
      updateScore();
      return;
    }
  } 

  if (userChoice === 'paper') {
    if ((botChoice == 'spock') || (botChoice == 'rock')) {
      playerWinner.textContent = 'You win!!';
      playerScore++;
      updateScore();
      return;
    } else {
      playerWinner.textContent = 'The PC wins';
      pcScore++;
      updateScore();
      return;
    }
  } 

  if (userChoice === 'lizard') {
    if ((botChoice == 'spock') || (botChoice == 'paper')) {
      playerWinner.textContent = 'You win!!';
      playerScore++;
      updateScore();
      return;
    } else {
      playerWinner.textContent = 'The PC wins';
      pcScore++;
      updateScore();
      return;
    }
  } 

  if (userChoice === 'scissors') {
    if ((botChoice == 'paper') || (botChoice == 'lizard')) {
      playerWinner.textContent = 'You win!!';
      playerScore++;
      updateScore();
      return;
    } else {
      playerWinner.textContent = 'The PC wins';
      pcScore++;
      updateScore();
      return;
    }
  } 





};



window.addEventListener('load', bindUserInput);