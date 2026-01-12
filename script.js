console.log("Connected javascript");
// const elem = document.string("element");
// const btn = document.getElemreturnentById("btn");
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

// let a = 100;
// let b = 100;
// let c = 50;

// let maxNum;

// a > b && a > c ? maxNum = a : b > c ? maxNum = b : maxNum = c;


// console.log(`The Biggest Number is ${maxNum}`);

// ===================

// Leap Year Question
// const elem = document.getElementById("element");
// const btn = document.getElementById("btn");
// const Ullist = document.getElementById("list");

// btn.addEventListener("click", () => {
//     const inputVal = Number(elem.value);

//     if (!inputVal) {
//         alert("Please enter a valid year");
//         return;
//     }

//     const li = document.createElement("li");

//     if ((inputVal % 4 === 0)) {
//         li.textContent = `${inputVal} is a Leap Year`;
//     } else {
//         li.textContent = `${inputVal} is NOT a Leap Year`;
//     }

//     Ullist.appendChild(li);
//     elem.value = "";
// });

// ===================

// Number positive, Nagetive and Zero

// function findNum() {
//     let num = Number(prompt('Enter A Number'));

//     if (isNaN(num)) {
//         alert("Allow Number Not String");
//         return;
//     }

//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// console.log(findNum());

// ===================

// Find a Vowel and Consonants;

// const elem = document.getElementById("element");
// const btn = document.getElementById("btn");
// const Ullist = document.getElementById("list");

// btn.addEventListener("click", () => {
//     const data = elem.value.toLowerCase().trim();
//     elem.value = "";

//     let message = "";

//     if (data === "") {
//         message = "Please enter a letter";
//     } else if (["a", "e", "i", "o", "u"].includes(data)) {
//         message = "This is a Vowel Letter";
//     } else if (/^[a-z]$/.test(data)) {
//         message = "This is a Consonant";
//     } else {
//         message = "Not a valid alphabet";
//     }

//     console.log(message);
//     Ullist.textContent = message;
// });

// function checkVowel() {

//     // const character = value.toLowerCase();
//     const character = prompt("Enter a letter").toLowerCase();

//     if (character === "a" ||
//         character === "e" ||
//         character === "i" ||
//         character === "o" ||
//         character === "u" &&
//         character !== "") {
//         return "This Is Vowel Letter"
//     } else if (/[a-z]/.test(character)) {
//         return "This is Consonants"
//     }
//     return "Not a Vaild Alphabet"
// }
// // console.log(checkVowel());

// ===================

// Find a Again Leap Year Question

// let year = prompt("Enter Your Year");
// function checkLeapYear(year) {
//     if (year === '') {
//         console.log("Please Enter Your Year");
//         return;
//     }

//     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//         console.log("Leap Year");
//     } else {
//         console.log("Normal Year");
//     }
// }

// // Example usage:
// checkLeapYear(2024);
// checkLeapYear(2025);

// ========================

// Find the Min and Max value for array ;

// let data = [10, 13, 98, 56, 37, 87, 56, 24, 100, 200, 23]
// console.log(data);


// let max = data[0];
// let min = data[0];
// // console.log(max);


// for (let i = 0; i < data.length; i++) {
//     if (data[i] > max) {
//         max = data[i]
//     } else if (data[i] < min) {
//         min = data[i]
//     }
//     // console.log(data[i]);
// }


// console.log(`The Largest Number is ${max}`);
// console.log(`The Smallest Number is ${min}`);

// ========================

// let a = 10;

// (function () {
//     // code Block
//     console.log(a);
//     let a = 20;
// })();
// // console.log(a);

// ========================

// console.log(typeof foo);

// var foo = function () {
//     return "Hello";
// };

// console.log(typeof foo);

// ========================

// let x = 1;

// function outer() {
//     console.log(x);
//     let x = 2;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }

// outer();

// ========================

// const arr = [3, 5, 2, 8, 1, 4];
// let even = [];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         even.push(arr[i])
//         sum += arr[i]
//     }

// }
// console.log(even);
// console.log(sum);

// Optimize Code and One Line Solution;

// const arr = [3, 5, 2, 8, 1, 4];

// let evenNum = arr.filter((n) => n % 2 === 0).reduce((acc, current) => acc + current, 0);
// console.log(evenNum);

// ========================

// const names = ["Ali", "Sara", "Ahmed", "Zara", "Ayaan"];
// let newArray = [];

// for (let i = 0; i < names.length; i++) {
//     let newNames = names[i].toUpperCase();

//     if (newNames[0] === "A") {
//         newArray.push(newNames)
//     };
// };
// console.log(newArray);

// Optimize Code and One Line Solution;

// const names = ["Ali", "Sara", "Ahmed", "Zara", "Ayaan"];

// let newNames =
//     names.filter((n) => n[0].toUpperCase() === "A")
//         .map((n) => n.toUpperCase())
//         .sort();

// console.log(newNames);

// ========================

// const nums = [12, 5, 8, 130, 44, 7, 200];

// let even = nums.filter((n) => n % 2 == 0).map(n => n ** 2).reduce((acc, curt) => acc + curt, 0);
// console.log(even);

// ========================

// const sentences = [
//     "JavaScript is fun",
//     "I love coding",
//     "OpenAI is amazing",
//     "Coding challenges are great"
// ];

// let srt = sentences.filter((n) => n.toLowerCase().includes("coding")).
//     map(n => n.toUpperCase());
// console.log(srt);

// ========================

// const students = [
//     { name: "Ali", marks: 85 },
//     { name: "Sara", marks: 92 },
//     { name: "Ahmed", marks: 78 },
//     { name: "Zara", marks: 95 },
//     { name: "Ayaan", marks: 65 }
// ];

// let marks = students.filter(m => m.marks > 80).map(n => n.name.toUpperCase()).sort();
// console.log(marks);

// ========================

// const products = [
//     { name: "Laptop", price: 800, category: "Electronics" },
//     { name: "Shirt", price: 40, category: "Clothing" },
//     { name: "Phone", price: 600, category: "Electronics" },
//     { name: "Shoes", price: 90, category: "Clothing" },
//     { name: "Headphones", price: 120, category: "Electronics" }
// ];

// let newProducts =
//     products.filter((n) => n.category === "Electronics" && n.price > 100).map((n) => n.name.toUpperCase());
// console.log(newProducts);

// ========================

const employees = [
    { name: "Ali", department: "IT", salary: 5000 },
    { name: "Sara", department: "HR", salary: 4000 },
    { name: "Ahmed", department: "IT", salary: 7000 },
    { name: "Zara", department: "Finance", salary: 6000 },
    { name: "Ayaan", department: "IT", salary: 3000 },
    { name: "Maya", department: "HR", salary: 4500 }
];

const itEmployees = employees
    .filter(n => n.department === "IT" && n.salary > 4000)
    .sort((a, b) => b.salary - a.salary)
    .map(n => n.name.toUpperCase());

console.log(itEmployees);














