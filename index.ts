#! /usr/bin/env node 

//importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

//display a colorfull welcome message
console.log(chalk.bold.bgCyan(" \n \t\t Code With Zainab - Word Counter"));
console.log("=".repeat(60));

//prompt the user to enter a sentence
let userAnswer = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a Sentence",
    }
])

//trimming the sentence and splitting into words based on "spaces"
let words = userAnswer.sentence.trim().split(" ");

//analyses of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words :"));
console.log(words);
console.log(chalk.bold(`\n - Word Count :  ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));



