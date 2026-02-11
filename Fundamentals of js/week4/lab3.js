//1.creating arrays 
let students = ['alessandro', 'alex', 'paul']
let grades =  [68, 89, 74]
let isPresent = Array.of(true, false, false );

//2,accesing and updating 
console.log (students[0])
grades.splice(1, 1, 84); //splice() in JavaScript is an array method that adds, removes, or replaces elements in an array by modifying the original array.
console.log (students); 
console.log (grades);

//3 array modification 
students.push ('billy')
isPresent.pop ()
console.log (isPresent)
console.log (students)

//4
//(a) use loop to display 
let students = ['alessandro', 'alex', 'paul']
for (let i = 0; i < students.length; i++)
    console.log(students[i]);
//(b)use foreach
let students = ['alessandro', 'alex', 'paul']
let grades =  [68, 89, 74]
    students.forEach((students, i) => { // foreach dont need to declare I as 0
    console.log (`${students}: ${grades[i]}`);// this list in order students and their grades
    });
//(c) use loop to display attendance
let isPresent = Array.of(true, false, false );
for (let attendance of isPresent)  //for of loops directly over tha values of an array
   if (attendance === true) { //if attendace = True
    console.log ("Present") // use present 
   } else { //if else use away is what im telling computer to do 
    console.log ("Away")
   }
 //(D) use entries
let students = ['alessandro', 'alex', 'paul'];

for (let [index, student] of students.entries()) {
    console.log(`${index}: ${student}`);

}


//task 5 Using Array Methods
const grades = [68, 84, 74];

for (let grade of grades){
    if (grade >= 50) {
      console.log ("passing")
      }  else {
     console.log ("failing");
      }
    }

//b
const grades = [68, 84, 74];

const doubledGrades = grades.map(grade => grade * 2);
//c
    console.log (grades)
    console.log (doubledGrades);
    



