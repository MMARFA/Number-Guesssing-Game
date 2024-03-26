#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\t\nWellcome to Arfat Asif - number guessing game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer  = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);

if (answer.userGuessNumber === randomNumber){
    console.log("congratulation ! You Guess a correct number");    
}
else{
    console.log("sorry,You guess a wrong number");    
}