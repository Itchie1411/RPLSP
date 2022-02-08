// // Wait for DOM to load before running game

// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName('button');

//     for(let button of buttons){
//         button.addEventListener('click', function(){
//             if(this.getAttribute('data-type') === 'submit'){
//                 alert('you clicked Submit!');
//             } else {
//                 let gameType = this.getAttribute('data-type');
//                 alert(`you click ${gameType}`);
//             }
//         })
//     }
// })

// RUN GAME
// function runGame(){

// }

// //mouse over highlight
// function highlight() {

// }

// // countdown (after user selects option, count
// // down from 3)
// function countdown(){

// }

// //COMPUTERS CHOICE
//  function computerChoice(){

//  }

// // scores
// function scores {

// }

// // rest scores and game
// function reset(){

// }


const game = () => {
    //player scores 
    let playerscore = 0;
    let pcscore = 0;

    const playerOption = () => {
        //finding the selection of buttons
        // User choice
        const playerChoice = addEventListener('click', function () {
        const findingbtns = document.getElementById('player-spock');



        
       });


        // PC choice
        const pcOptions = ['spock', 'rock', 'paper', 'lizard', 'sci'];
        
        const computerChoice = addEventListener('click', function () {

            const pcNumber = Math.floor(Math.random() * 6);
            const pcChoice = pcOptions[pcNumber]
            //console logging PCs choice
            console.log(`PC picked ${pcChoice}`)
        });
    }

    // const winners = (playerSelection, pcChoice) => {
        
    //     if(playerSelection === 'paper'){
    //         if(pcChoice === 'rock'){
    //             console.log('player wins!')
    //             playerscore++;
    //             return;
    //         } else {
    //             console.log('PC wins!')
    //             pcscore++;
    //             return;
    //     } 

    //     }
    // }


//call inner functions here
playerOption()
// winners()
}

//call main function here
game()