// Creating a Function     1/21/2026

function displayInfo() {
    let courseName = "JavaScript";
    console.log("Hello World!");
    console.log("Welcome to ", courseName);
}

displayInfo();

console.log(courseName); // This will cause an error because courseName is not defined.

//

function displayInfo(){
    var courseName= "javescript";
    var courseName2= "HTML and CSS";
    console.log("Hello World!");
    console.log("Welcome to ", courseName);
    console.log("welcome to", courseName2);
}

var courseName2 = "math"; 
displayInfo();
console.log(courseName2); // This will print "math"
console.log(courseName); // This will cause an error because courseName is not defined.
displayInfo();