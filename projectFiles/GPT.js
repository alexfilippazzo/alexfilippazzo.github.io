                   
                   
                   //lesson 1 state: Data that changes over time
//example of using a variable to track a bank account balance

const { startTransition } = require("react");

 let balance = 1000;
balance = balance + 500;     // Deposit
balance = balance - 200;     // Withdrawal
console.log("Final Balance:", balance);      // Output: Final Balance: 1300  //"" show the word 'Final Balance:'

//shortcut
balance += 500;    // Deposit
balance -= 200;   // Withdrawal
console.log("Final Balance:", balance);      // Output: Final Balance: 1300

          


             //percentages

let price = 1000;
let increase = price * 0.20;  // 20% increase
let newPrice = price + increase;
console.log("Total" + newPrice);  // Output: Total 1200

//shortcut

price *= 1.20;  // 20% increase
console.log("Total" + price);  // Output: Total 1200

//Mini exercise

let buyPrice = 800;
let sellPrice = 1000;
let profit = sellPrice - buyPrice;
let perentangegain = (profit / buyPrice) * 100;
console.log("Percentage Gain:" + perentangegain + "%");  // Output: Percentage Gain:25%






