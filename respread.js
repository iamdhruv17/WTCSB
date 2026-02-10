// function add(...numbers) {
//     let sum = 0;
//     for (let i in numbers) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log(add(1,2,3,4,5,6,10));

// let a=[1,2,3,4,5,7,8,45];
// let[first,second,...last]=a;
// console.log(first,second,...last);

let isEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }}
console.log(isEven(10));

let reverseString = (str) => {    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }   return reversed;}

console.log(reverseString("Hello World"));  



let avgmarks = (...marks) => {
    let sum = 0;
    for (let i in marks) {
        sum += marks[i];
    }
    let avg= sum / marks.length;

    if (avg >= 40) {
        return "pass";
    } else {
        return "fail";
    }
}
console.log(avgmarks(2,3,4,1));