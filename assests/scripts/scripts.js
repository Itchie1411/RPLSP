//Finding players input

const playerOptions = document.querySelectorAll('.plyerbtn');

for (let i = 0; i < playerOptions.length; i++) {
  playerOptions[i].addEventListener('click', function(){
    console.log(this.innerText);
  });
}


// Getting a random selection by the PC:
// PC choice
//const pcOptions = ['spock', 'rock', 'paper', 'lizard', 'sci'];
const pcOptions = ['spock'];
const computerChoice = addEventListener('click', function () {

    const pcNumber = Math.floor(Math.random());
    const pcChoice = pcOptions[pcNumber];
    //console logging PCs choice
    console.log(pcChoice)
    return pcChoice;
});


// //adding winning conditions
// function winners (playerOption, computerChoice) {
//     if(playerOption === computerChoice) {
//             console.log('draw!');
//             return;
//         }

// }
// playerOptions();

