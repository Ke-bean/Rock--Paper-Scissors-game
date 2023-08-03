function getComputerChoice(rock, paper, scissor){
    // calculating random number between 0 and function arguments length.
    let randomChoice = Math.floor(Math.random() * [...arguments].length);
    // getting a random value from the values passed to the function.
    let computerChoice = [...arguments][randomChoice];
    return computerChoice;
}
// let playerSelection = prompt("Enter you choice");
// let computerSelection = getComputerChoice("rock", "paper", "scissor");
// // A function responsible for showing rounds played btn computer and a player.
// function playRound(getComputerChoice, playerSelection){
//     if(getComputerChoice == "rock" && playerSelection.toLowerCase() == "paper"){
//         return "You win! Paper beats Rock.";
//     }
//     else if(getComputerChoice == "paper" && playerSelection.toLowerCase() == "rock"){
//         return "You loose! Paper beats Rock.";
//     }
//     else if(getComputerChoice == "rock" && playerSelection.toLowerCase() == "scissor"){
//         return "You loose! Rock beats Scissor.";
//     }
//     else if(getComputerChoice == "scissor" && playerSelection.toLowerCase() == "rock"){
//         return "You win! Rock beats Scissor.";
//     }
//     else if(getComputerChoice == "scissor" && playerSelection.toLowerCase() == "paper"){
//         return "You loose! Scissor beats Paper.";
//     }
//     else if(getComputerChoice == "paper" && playerSelection.toLowerCase() == "scissor"){
//         return "You win! Scissor beats paper.";
//     }else{
//         return "You both have the same guess! try again.";
//     }
// }
// function game(){
//     let winner = 0;
//     let looser = 0;
//     for (let i = 0; i < 5; i++){
//       let result = playRound(computerSelection, playerSelection);
//        if(result.includes("You win")){
//            winner++;
//            console.log(result);
//         }else if(result.includes("You loose")){
//             looser++;
//             console.log(result);
//         }else{
//             console.log("You both have the same guess! try again.");
//         }
//     } 
//     // calculating the overall winner of the game after 5 rounds.
//     if(winner > looser){
//         console.log("You win against the computer, Congrats!");
//     }else if(winner < looser){
//         console.log("Oops! You loose against the computer.")
//     }else if(winner == 0 && looser == 0 || winner == looser){
//         console.log("you both have the same points.");
//         return;
//     } 
// }

// // console.log(playRound(computerSelection, playerSelection));
// game();


