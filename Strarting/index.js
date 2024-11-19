const crypto = require('crypto');
const args = process.argv.slice(2); 
const operation = args[0];
const num1 = +(args[1]);
const num2 = +(args[2]);
function generateRandomNumber(length) {
    return crypto.randomBytes(length).toString('hex');
}
switch (operation) {
    case 'add':
        console.log(`Result: ${num1 + num2}`);
        break;
    case 'sub':
        console.log(`Result: ${num1 - num2}`);
        break;
    case 'mult':
        console.log(`Result: ${num1 * num2}`);
        break;
    case 'divide':
        if (num2 !== 0) {
            console.log(`Result: ${num1 / num2}`);
        } else {
            console.log("Cannot divide by zero.");
        }
        break;
    case 'sin':
        console.log(`Result: ${Math.sin(num1)}`);
        break;
    case 'cos':
        console.log(`Result: ${Math.cos(num1)}`);
        break;
    case 'tan':
        console.log(`Result: ${Math.tan(num1)}`);
        break;
    case 'random':
        const length = +(num1);
        if (isNaN(length)) {
            console.log("Provide length for random number generation.");
        } else {
            console.log(`Random Number: ${generateRandomNumber(length)}`);
        }
        break;
    default:
        console.log("Invalid operation");
        break;
}
