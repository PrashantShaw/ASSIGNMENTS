const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please enter your name:", USERNAME =>{
    console.log('Hello', USERNAME)
    rl.close()
})

