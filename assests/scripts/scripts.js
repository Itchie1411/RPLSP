// Finding buttons for player
const playerOptions = document.querySelectorAll('.player-gamebtn');
// PC buttons
const gameOptions = document.querySelectorAll('.gamebtn');

// Loop to get all of the player button classes and find the selection with when clicked
for (let i = 0; i < playerOptions.length; i++) {
  playerOptions[i].addEventListener('click', function () {
    console.log(this.innerText);

    // Getting a random selection by the PC:
    // PC will pci k1
    const pcChoice = Math.floor(Math.random() * gameOptions.length)
    let pcPick = pcChoice.toString();
    console.log(pcPick);
  });

};