//Finding players input
const playerOption = function playerOption(clicked_id) {
    playerChoice = clicked_id
    console.log(playerChoice);
    
};


// Getting a random selection of options by the PC:
computerChoice = addEventListener('click', computerChoice);
// const pcOptions = ['spock', 'rock', 'paper', 'lizard', 'sci'];
const pcOptions = ['spock'];

function computerChoice() {
    const pcNumber = Math.floor(Math.random());
    const pcChoice = pcOptions[pcNumber]
    // Console out PC choice
    console.log(pcChoice)
    return;
}


//adding winning conditions
function winners (playerOption, computerChoice) {
    if(playerOption == computerChoice) {
            console.log('draw!');
            return;
        }

}
playerOption();

winners();
