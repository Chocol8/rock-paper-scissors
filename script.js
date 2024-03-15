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
    let playerScoreDiv = document.querySelector("#playerScore");
    let computerScoreDiv = document.querySelector("#computerScore");
    let result = document.querySelector("#result");
    
    /*computer picks rock*/
    if(computer == "rock" && player == "rock"){
        result.textContent = "Its a tie! Rock doesn't beat Rock";
    }
    else if (computer == "rock" && player == "paper"){
        result.textContent = "You lose! Rock loses to paper";
        computerScoreValue += 1;
        computerScoreDiv.textContent = `Computer score: ${computerScoreValue}`;
    }
    else if (computer == "rock" && player == "scissors"){
        result.textContent = "You win! Rock beats Scissors";
        playerScoreValue += 1;
        playerScoreDiv.textContent = `Player score: ${playerScoreValue}`;
    }
    /*computer picks paper*/
    else if(computer == "paper" && player == "rock"){
        result.textContent = "You win! Paper beats rock";
        playerScoreValue += 1;
        playerScoreDiv.textContent = `Player score: ${playerScoreValue}`;
    }
    else if (computer == "paper" && player == "paper"){
        result.textContent = "Its a tie! Paper doesn't beat paper";
    }
    else if (computer == "paper" && player == "scissors"){
        result.textContent = "You lose! Paper loses to scissors";
        computerScoreValue += 1;
        computerScoreDiv.textContent = `Computer score: ${computerScoreValue}`;
    }
    /*computer picks scissors*/
    else if(computer == "scissors" && player == "rock"){
        result.textContent = "You lose! Scissors loses to rock";
        computerScoreValue += 1;
        computerScoreDiv.textContent = `Computer score: ${computerScoreValue}`;
    }
    else if (computer == "scissors" && player == "paper"){
        result.textContent = "You win! Scissors beats paper";
        playerScoreValue += 1;
        playerScoreDiv.textContent = `Player score: ${playerScoreValue}`;
    }
    else{
        result.textContent = "Its a tie! Scissors doesn't beat scissors";
    }  
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let playerScoreValue = 0;
let computerScoreValue = 0;

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