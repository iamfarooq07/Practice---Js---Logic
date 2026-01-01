console.log("Connected javascript");
// const elem = document.getElementById("element");
// const btn = document.getElementById("btn");
// console.log(btn);
// console.log(elem);



// DSA Array Traversing Question :

// let data = [2, 45, 67, 87, 43, 23, 89, 34, 54, 55, 12, 11, 90, 70, 59];

// // for (let i = 0; i < data.length; i++) {
// //     console.log(data[i]);
// // }

// let x = 12;
// console.log(data[x]);

// btn.addEventListener('click', () => {
//     const inputValue = Number(elem.value.trim());

//     if (inputValue < data.length && inputValue >= 0) {

//         alert(data[inputValue])


//     } else {
//         alert("Please Enter A Valid Number")
//     }

//     elem.value = "";
// })

// =============== End ================

// Insert in element in Array:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// arr.splice(2, 1, 200, 200);
// console.log(arr);
// let element = 3;
// let position = 2;

// for (let i = arr.length - 1; i >= 0; i--) {
//     // console.log(arr[i]);
//     if (i >= position) {
//         arr[i + 1] = arr[i]
//         if (i === position) {
//             arr[i] = element
//         }
//     }
//     console.log(arr);
// }
// let element = 3;
// let position = 2;

// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i--) {
//     // console.log(arr[i]);
//     if (i >= position) {
//         arr[i + 1] = arr[i];
//         if (i === position) {
//             arr[i] = element
//         }
//     }
//     console.log(arr);
// }

// =============== End ================

// ProCoder DSA in JavaScript

// let num = Number(prompt("Enter a number"))
// let num = 10
// for (let i = num - 0; i >= 1; i--) {
//     console.log(i);
// }

// for (let i = 1; i <= num; i++) {
//     // console.log(num - i + 1);
//     // console.log(num);
//     console.log(num - i);
// }

// const elem = document.getElementById("element");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', () => {

//     const input = elem.value.trim();

//     for (let i = 1; i <= input; i++) {
//         console.log(i);
//     }
// })

// =======================

// let num = prompt("Enter a number");

// for (let i = 0; i <= num; i++) {
//     // console.log(i);

//     if (i % 2 === 0) {
//         console.log(i, "Even")
//     } else {
//         console.log(i, "Odd");

//     }
// }

// =======================

// let num = prompt("Enter a number");
// let sum = 0;

// for (let i = 0; i <= num; i++) {
//     sum += i
// }
// console.log(sum);

// opitmize code

// let num = Number(prompt('Enter a number'));
// let sum = num * (num + 1) / 2;
// // console.log(`Sum of first ${num} natural numbers is ${sum}`);
// console.log(sum);

// =======================

// Factorial Formula and Logic;

// let num = prompt("Enter a number");
// let sum = 1;

// for (let i = 1; i <= num; i++) {
//     sum *= i
// }
// console.log(`Factorial of ${num} is ${sum}`);

// Factorial Table in JavaScript

// const elem = document.getElementById("element");
// const btn = document.getElementById("btn");
// const Ullist = document.getElementById("list");

// let sum = 1;
// btn.addEventListener("click", () => {
//     const input = elem.value.trim();

//     for (let i = 1; i <= input; i++) {
//         sum *= i
//     }
//     const li = document.createElement("li")
//     li.textContent = sum

//     Ullist.appendChild(li)
//     elem.value = "";

// })

// =======================

// Addition of Even Number

// let num = prompt("Enter a Number");
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         sum += i
//     }
// }
// console.log(sum);

// =======================

// let num = prompt("Enter a Number");

// for (let i = 1; i <= num; i++) {
//     let val = i ** 2;


//     console.log(val);
// }

// =======================

// Print all number divisible by 3 and 5 up to n

// let num = Number(prompt("Enter A Number"));

// for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i, "Divisible by 3 and 5")
//     }
// }

// =======================

// Print the sum of all odd number up to n;

// let num = Number(prompt("Enter a Number"));
// let sum = 0;
// for (let i = 0; i <= num; i++) {
//     if (i % 2 === 1) {
//         sum += i
//     }
// }
// console.log(sum);

// =======================

// Both Condition Even and Squres

// let num = Number(prompt("Enter a Number"));
// let sum = 0;
// for (let i = 0; i <= num; i++) {
//     if (Math.sqrt(i) % 1 === 0 && i % 2 === 0) {
//         console.log(i);
//     }
// }

// =======================

// ========== Part 01 Completed ==========

// ========== Part 02 Start ==========

// Find A Max Number

// function maxNum(a, b, c) {

//     let max;

//     if (a > b && a > c) {
//         max = a
//     } else if (b > a && b > c) {
//         max = b
//     } else {
//         max = c
//     }
//     return max
// }
// console.log(maxNum(4, 4, 2));

// ===================

// const button = document.querySelector(".btn");

// button.addEventListener("click", () => {
//     console.log("Clicked Me");

// })

// ===================

let a = 100;
let b = 100;
let c = 50;

let maxNum;

a > b && a > c ? maxNum = a : b > c ? maxNum = b : maxNum = c;


console.log(`The Biggest Number is ${maxNum}`);

