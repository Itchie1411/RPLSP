// Finding buttons
const playerOptions = document.querySelectorAll('.player-gamebtn');
// // Loop to get all of the player button classes and find the selection with when clicked


function game() {
  // getting the player button input and choice
  for (let i = 0; i < playerOptions.length; i++) {
    playerOptions[i].addEventListener('click', function () {
      const playerPick = this.innerText;
      console.log(playerPick);

      ///PC choice
      const pcPick = document.getElementsByClassName('player-gamebtn');
      const pcOption = pcPick[Math.floor(Math.random() * pcPick.length)];
      console.log(pcOption.textContent)


      // winning conditions 
      if (playerPick === pcOption.textContent) {
        console.log('draw')
        return;
      }
      if (playerPick === 'sci') {
        if (pcOption.textContent === 'paper')
          console.log('You win!')
          return;
      } else {
        console.log('PC won..')
        return;
      }
    })
  }
};

// Printing the choices to the console. 
function choices() {
  console.log(game())
}
choices()