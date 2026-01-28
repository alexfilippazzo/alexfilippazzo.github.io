//---task 1

var initials = 'A.F';
let last3Digits = '064';
const studentKey = `${initials.toUpperCase()}-${last3Digits}`;
console.log('Student Key:', studentKey);

//----task 2

let name = 'Alexander';
let idsuffix = '064';
let course = "CPAN 113";
let isActive = true;
let skills= ['JavaScript', 'HTML', 'CSS', 'React'];
 // console.log(skills[0]);

 let targets = {weeklyHours: 10, goal: 'Learn JavaScript'};
 console.log(`profile type checks: name=${typeof name}, idSuffix=${typeof idsuffix}, skillsIsArray=${Array.isArray(skills)},`);



//----task 3
initaials = 'Y.Z.';
last3Digits += 1;

 //studentkey = `${initials.toUpperCase()}-${last3Digits}`;  //  error since studentkey is not declared

 const labConfig = {term: "winter 2026"};
    // labConfig ={};  -- // TypeError
labConfig.term = "fall 2025"; 
 //console.log(labConfig.term);  ("fall 2025")  correct output


//-----task 4
let itemA = (last3Digits % 10) + 2.25;
let itemB = ((last3Digits % 7) * 0.75) + 1.50;
let itemC = ((last3Digits % 5) * 1.10) + 3.10;
//Recipt: A=$3.25  B=$4.5  C=$4.2
console.log(`Receipt: A=$${itemA}, B=$${itemB}, C=$${itemC}`);

let subTotal = itemA + itemB + itemC;
//
let tax = subTotal * 0.13;
//
let total = subTotal + tax;

console.log(`subTotal=$${subTotal.toFixed(2)},Tax=$${tax.toFixed(2)},Total=$${total.toFixed(2)}`);



//---task 5

let asnumber = 345;
let asText = '345';
console.log(`Equuality: == ${asnumber == asText}, === ${asnumber === asText}`);


//---task 6 (part a)
let budget = (last3Digits %10) + 10;
if (total <= budget) {
    console.log(`Budget check: within budget (under by $${(budget - total).toFixed(2)})`);
} else {
    console.log(`Budget check: over budget (exceeded by $${Math.abs(budget - total).toFixed(2)})`);
}

//---task 6 (part b)

let theme = last3Digits % 4;
switch (theme) {
    case 0:
        console.log('Theme:, "JavaScript is a fun easy to learn language."');
        break;
    case 1:
        console.log('Theme:, Javascript is native to all browsers."');
        break;
    case 2:
        console.log('Theme:, "JavaScript is the language of the web."');
        break;
    case 3:
        console.log('Theme:, "JavaScript is cool"');
        break;
    default:
        break
}

//---task 7
let signatureNumber = (last3Digits * 7) + Math.floor(total);
const labSignature = `${studentKey}-${signatureNumber}`;
console.log('Lab Signature:', labSignature);

