import inquirer from "inquirer";

const answer:{
    Sentence:string
}= await inquirer.prompt([
    {
        name:"Sentence",
        type:"input",
        message:"Enter your Sentence to Count  the Word:"
    }
    


])
const words = answer.Sentence.trim().split("")
console.log(`Your Sentence word is ${words.length}`);

