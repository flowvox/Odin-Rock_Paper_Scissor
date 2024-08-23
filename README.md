# Odin-Rock_Paper_Scissor
The Odin Project -Foundations Javascript Project

getComputerChoice() :-
 -Use Math.random to generate a number which is then scaled and shifted to fit in our range(1-3)
 -this random number is used to select one from rock,paper,scissor
  Code for random number between min and max : 
    `function getComputerChoice(max,min){
        let choice = Math.round(Math.random()*(max-min)+min);
        return choice;
    }`

