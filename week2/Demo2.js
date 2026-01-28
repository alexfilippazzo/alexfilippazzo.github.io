// Function ctd.

function getGrade(marks) {
    
    if (marks >= 50) {
        let message = "Congrats";  //block scope
        console.log(message);
        console.log("You have passed the exam.");
 } else {
        var message = "sorry";  //function scope
        console.log(message);
        console.log("you have failed the exam.");
    }
}
    getGrade(34);
    getGrade(54);
    getGrade(45);