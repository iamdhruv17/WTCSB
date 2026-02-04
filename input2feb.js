// const r1=require("readline").createInterface({
//     input:process.stdin,
//     output: process.stdout,
// });

// r1.question("enter something: ",
//     (answer) =>{
//                 console.log("You entered:",answer);
//                 r1.close();
//     }
// );

const calculator = ()=>({
    add:(a,b)=> a+b,
    sub:(a,b)=> a-b,
    mul:(a,b)=> a*b,
    div:(a,b)=> (b===0?"Error a gya":a/b),
    });


console.log(calculator().add(5,6));
console.log(calculator().sub(8,5));
console.log(calculator().mul(2,5));
console.log(calculator().div(6,2));

