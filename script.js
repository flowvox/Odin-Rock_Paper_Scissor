// ask user to input rock paper or scissor
// let computer choose one of the three from random 
//compare and announce winner
//store them in variables
 // ---- rock and papaer then paper wins,rock and scissor then rock wins,paper and scissor then scissor wins,rock and scissor the rock wins,both same then retry

 //getComputerChoice function :
    //gnerates a random number between 0 and 1 multiply that by 10 to get a number between 1 and 10
    //if the number is 0 then rock,if its less than 5 or equal to 5 then paper ,anyother number i.e above 5 then scissor


function getComputerChoice(max,min){
    let randomNum = Math.round(Math.random()*(max-min)+min);
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


console.log(getHumanChoice());
console.log(getComputerChoice(3,1));