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

function getPlayerChoice(){
    var input = prompt("Rock Paper or Scissors?");
    var PlayerChoice = input.toLowerCase();
    return PlayerChoice;
}

function playRound(player,computer){
    /*computer picks rock*/
    if(computer == "rock" && player == "rock"){
        console.log("Its a tie! Rock doesn't beat Rock");
    }
    else if (computer == "rock" && player == "paper"){
        console.log("You lose! Rock loses to paper");
    }
    else if (computer == "rock" && player == "scissors"){
        console.log("You win! Rock beats Scissors");
    }
    /*computer picks paper*/
    else if(computer == "paper" && player == "rock"){
        console.log("You win! Paper beats rock");
    }
    else if (computer == "paper" && player == "paper"){
        console.log("Its a tie! Rock doesn't beat Rock");
    }
    else if (computer == "paper" && player == "scissors"){
        console.log("You lose! Rock loses to paper");
    }
    /*computer picks scissors*/
    else if(computer == "scissors" && player == "rock"){
        console.log("You lose! Scissors loses to rock");
    }
    else if (computer == "scissors" && player == "paper"){
        console.log("You win! Scissors beats paper");
    }
    else{
        console.log("Its a tie! Scissors doesn't beat scissors");
    }    
}

for (i=1;i<=5;i++){
    console.log(`Round ${i}`);
    const computer = getComputerChoice();
    const player = getPlayerChoice();
    playRound(player, computer);
}