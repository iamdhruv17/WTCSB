// (function show(){
//     console.log("welcome to CSB")
// })();
// // iife--> imediate invoke file

// (()=>{
//     console.log("welcome to CSB");
// })();

function person(){
    this.age=25;

    setTimeout(function (){
        console.log(this.age);

    },1000);
}
new person();


function Person(){
    this.age=25;

    setTimeout(()=>{
        console.log(this.age);

    },1000);
}
new Person();