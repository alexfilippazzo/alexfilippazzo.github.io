
//Alexander Filippazzo n10017064


console.log("TASK 1 — CONDITIONAL STATEMENTS");
console.log("(1.) Temperature Checker (18*C)");
//Write an if / else if / else statement that checks a variable temperature and prints:
//
//"Cold" if temperature is below 10
//"Warm" if temperature is between 10 and 25
//"Hot" if temperature is above 25

let temperature = 18;
if (temperature < 10) {
    console.log("Cold");
} else if (temperature >= 10 && temperature <= 25) {
    console.log("Warm");
} else {
    console.log("Hot");
}
console.log("(2.) Day of the Week (saturday)");
//Write a switch statement that prints the type of day based on a variable day:
//
//"Weekend" for "Saturday" or "Sunday"
//"Weekday" for "Monday" through "Friday"
//"Invalid day" for anything else

let day = "saturday";
switch (day) {
    case "saturday":
    case "sunday":
        console.log("Weekend");
        break;
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("Weekday");
        break;
    default:
        console.log("Invalid day");
}


console.log("TASK 2 — LOOP STATEMENTS");
console.log("(1.) Countdown");
//Write a while loop that counts down from 10 to 1, printing each number.

let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

console.log("(2.) Multiples of 4");
//Write a do-while loop that prints the first 6 multiples of 4.

let multiple = 4;
let i = 1;
do {
    console.log(multiple * i);
    i++;
} while (i <= 6);

console.log("(3.) Shopping List");
//Given an array shoppingList = ["Milk", "Eggs", "Bread", "Apples"],
//write a for loop that prints each item with its index (e.g., "0: Milk").


let shoppingList = ["Milk", "Eggs", "Bread", "Apples"];
for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
}


console.log("TASK 3 — ITERATION STATEMENTS");
console.log("(1.) User Profile");
//Create an object user with properties: name, age, and city.
//Use a for-in loop to print each property and its value.

let user = {
    name: "Alexander",
    age: "21",
    city: "Toronto",
}
for (let key in user) {
    console.log(key, ":", user[key]);
}

console.log("(2.) Exam Scores");
//Given an array scores = [88, 92, 75, 91, 85],
//use a for-of loop to print each score.

let scores = [88, 92, 75, 91, 85];
for (let score of scores) {
    console.log(score);
}


console.log("TASK 4 — BREAK & CONTINUE");
console.log("(1.) Stop at 7");
//Write a loop that prints numbers from 1 to 10, but stops completely when the number reaches 7.

for (let i = 1; i <= 10; i++) {
    if (i === 8) {
        break;
    }
    console.log(i);
}

console.log("(2.) Skip Short Words")
//Given an array, words = ["cat", "elephant", "dog", "hippopotamus", "ant"],
//write a loop that prints only the words with 5 or more characters, skipping shorter words using continue.

let words = ["cat", "elephant", "dog", "hippopotamus", "ant"];
for (let word of words) {
    if (word.length < 5) {
        continue;
    }
    console.log(word);
}

//end of file