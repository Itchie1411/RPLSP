//Finding players input

const playerOptions = document.querySelectorAll('#player-spock', '#player-rock', '#player-paper', '#player-lizard', '#player-sci');

playerOptions.addEventListener('click', function(){
    console.log(pChoice)
});


// Getting a random selection by the PC:
// PC choice
// const pcOptions = ['spock', 'rock', 'paper', 'lizard', 'sci'];
const pcOptions = ['spock'];
const computerChoice = addEventListener('click', function () {

    const pcNumber = Math.floor(Math.random());
    const pcChoice = pcOptions[pcNumber];
    //console logging PCs choice
    console.log(pcChoice)
    return pcChoice;
});


//adding winning conditions
function winners (playerOption, computerChoice) {
    if(playerOption === computerChoice) {
            console.log('draw!');
            return;
        }

}
playerOptions();
computerChoice();
winners();
