import { stdin, stdout } from 'node:process';
import readline from 'readline'

const rd = readline.createInterface({
    input: stdin,
    output: stdout,
});

rd.question('What is your name? ', (name) => {
    console.log(`Welcome` + name );
    rd.close();
});

let word = "Hola esto es javacript";

console.log(word.toLocaleLowerCase());
console.log(word.toUpperCase());
console.log(word.trim().split(/\s+/));
console.log("reverse"+word.split("").reverse().join(""));

console.log(word.replaceAll("","").split(","));

