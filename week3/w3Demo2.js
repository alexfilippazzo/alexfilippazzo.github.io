// loop - repetition/ iteration

//For -

//for(let i = 5; i >= 10; i+=5){
//    console.log(i+1,"Your Name");  // i = 0,1,2,3,4 i+1= 1,2,3,4,5  
//}
//Multiplication table of n
let n = 15;
for(let i = 1; i <= n; i++){
    console.log(i,"*",n,"=", i*n);
}

for (let x = 15; x <= 17; x++){
    console.log('\n',x);
    for (let i = 1; i <= 5; i++) {
        console.log(i,"*",x,"=", i*x);
    }
}

//while
let y = 0;
while(y < 5){
    console.log("Hello", y);
    y++;
}

//do-while
let z = 0;
do{
    console.log("Hello", z+1);
    z++;
}while(z < 5);
