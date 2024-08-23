// ask user to input rock paper or scissor
// let computer choose one of the three from random 
//compare and announce winner
//store them in variables
 // ---- rock and papaer then paper wins,rock and scissor then rock wins,paper and scissor then scissor wins,rock and scissor the rock wins,both same then retry

 //getComputerChoice function :
    //gnerates a random number between 0 and 1 multiply that by 10 to get a number between 1 and 10
    //if the number is 0 then rock,if its less than 5 or equal to 5 then paper ,anyother number i.e above 5 then scissor

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(max,min){
    let randomNum = Math.floor(Math.random()*(max-min)+min);
    let choice = " "
    if (randomNum == 1){
        choice = "rock";
    }else if(randomNum == 2){
        choice = "paper";
    }else{
        choice = "scissor";
    }
    return choice;
}

// Promt human to make a choice from rock paper scissor,make it lowercase to compare

function getHumanChoice(){
    let choice = prompt("Choose one : Rock , Paper or Scissor");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "scissor"){
        console.log("You Win! Rock beats Scissor");
        humanScore++;
    }else if (humanChoice == "scissor" && computerChoice == "rock"){
        console.log("You Lose! Rock beats Scissor");
        computerScore++;
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    }else if (humanChoice == "paper" && computerChoice == "scissor"){
        console.log("You Lose! Scissor beats Paper");
        computerScore++;
    }else if (humanChoice == "scissor" && computerChoice == "paper"){
        console.log("You Win! Scissor beats Paper");
        humanScore++;
    }else if(humanChoice==computerChoice){
        console.log("Psyche!Its a Draw.");
    }else{
        console.log("Incorrect Choice! Please Retry.");
    }

}


for (let i = 0;i<5;i++){
    playRound(getHumanChoice(), getComputerChoice(3,1));
    console.log("Your Score = ", humanScore);
    console.log("AI Score = ", computerScore);


}

if(humanScore > computerScore){
    console.log("You Win!!!")
}else if(humanScore === computerScore){
    console.log("Its a Draw.")
}else{
    console.log("You Lost! Play Again.")
}



         