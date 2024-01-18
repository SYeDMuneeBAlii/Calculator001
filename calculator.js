import inquirer from "inquirer";
import { minus } from "./operations/add.js";
import { sum } from "./operations/add.js";
import { divi } from "./operations/add.js";
import { multi } from "./operations/add.js";
let answers = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "num2"
    },
    {
        message: "Select operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    }
]);
if (answers.operator === "+") {
    let result = sum(answers.num1, answers.num2);
    console.log(result);
}
if (answers.operator === "-") {
    let result = minus(answers.num1, answers.num2);
    console.log(result);
}
if (answers.operator === "/") {
    let result = divi(answers.num1, answers.num2);
    console.log(result);
}
if (answers.operator === "*") {
    let result = multi(answers.num1, answers.num2);
    console.log(result);
}
