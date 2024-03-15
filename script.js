function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 1){
        let ComputerChoice = "rock";
        return ComputerChoice;
    }
    else if(num == 2){
        let ComputerChoice = "paper";
        return ComputerChoice;
    }
    else{
        let ComputerChoice = "scissors";
        return ComputerChoice;
    }
}

function playRound(player){
    let computer = getComputerChoice();

    /*computer picks rock*/
    if(computer == "rock" && player == "rock"){
        console.log("Its a tie! Rock doesn't beat Rock")
        return "Its a tie! Rock doesn't beat rock";
    }
    else if (computer == "rock" && player == "paper"){
        console.log("You lose! Rock loses to paper")
        return "You lose! Rock loses to paper";
    }
    else if (computer == "rock" && player == "scissors"){
        console.log("You win! Rock beats Scissors")
        return "You win! Rock beats Scissors";
    }
    /*computer picks paper*/
    else if(computer == "paper" && player == "rock"){
        console.log("You win! Paper beats rock")
        return "You win! Paper beats rock";
    }
    else if (computer == "paper" && player == "paper"){
        console.log("Its a tie! Paper doesn't beat paper")
        return "Its a tie! Paper doesn't beat paper";
    }
    else if (computer == "paper" && player == "scissors"){
        console.log("You lose! Paper loses to scissors")
        return "You lose! Paper loses to scissors";
    }
    /*computer picks scissors*/
    else if(computer == "scissors" && player == "rock"){
        console.log("You lose! Scissors loses to rock")
        return "You lose! Scissors loses to rock";
    }
    else if (computer == "scissors" && player == "paper"){
        console.log("You win! Scissors beats paper")
        return "You win! Scissors beats paper";
    }
    else{
        console.log("Its a tie! Scissors doesn't beat scissors")
        return "Its a tie! Scissors doesn't beat scissors";
    }    
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', function(){
    let value = rock.value;
    playRound(value);
});

paper.addEventListener('click', function(){
    let value = paper.value;
    playRound(value);
});

scissors.addEventListener('click',function(){
    let value =  scissors.value;
    playRound(value);
})
// function playGame(){
//     let score = 0;
//     for (i=1;i<=5;i++){
//         console.log(`Round ${i}`);
//         const computer = getComputerChoice();
//         const player = getPlayerChoice();
//         let round = playRound(player, computer);

//         if(round.includes("win") == true){
//             score++;
//         }
//         else if (round.includes("lose") == true){
//             score--;
//         }
//     }
//     if(score > 0){
//         console.log(`You win! Your score against the computer is ${score}`);
//     }
//     else if (score < 0){
//         console.log(`You lose! Your score against the computer is ${score}`);
//     }
//     else{
//         console.log(`It's a tie! Your score against the computer is 0`);
//     }
// }

// playGame();