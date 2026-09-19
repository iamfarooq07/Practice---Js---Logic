console.log("Leed Code With JavaScript");

// let nums = [2, 7, 11, 15];
// let target = 9

// for (let i = 0; i < nums.length; i++) {
//     // console.log(i);
//     for (let j = i; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             console.log([i, j]);
//         }
//     }
// }

// let nums = [2, 7, 11, 15];
// let target = 9;

// let left = 0;
// let right = nums.length - 1;
// console.log(right);


// while (left < right) {
//     let sum = nums[left] + nums[right];

//     if (sum === target) {
//         // console.log([left + 1, right + 1]); // 1-based index
//         break;
//     }

//     if (sum > target) {
//         right--;
//     } else {
//         left++;
//     }
// }

// ---------------------------------------------

// let str = "()()";
// let counter = 0;

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);

//     if (str[i] === "(") {
//         counter++
//     } else {
//         counter--
//     }

//     if (counter < 0) {
//         console.log(false);
//         break;
//     }
// }
// console.log(counter);

// ---------------------------------------------
// function isValid(str) {

//     const stack = [];
//     const map = {
//         ")": "(",
//         "}": "{",
//         "]": "["
//     };

//     for (let ch of str) {
//         if (ch === "[" || ch === "(" || ch === "{") {
//             stack.push(ch)
//         } else {
//             if (stack.pop() !== map[ch]) {
//                 return false
//             }
//         }
//     }
//     return stack.length = 0;
// }
// console.log(isValid("{[]}"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));

// ---------------------------

// let nums = [2, 7, 11, 15];
// let target = 9;

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);

//     for (let j = i; j < nums.length; j++) {
//         // console.log(nums[j]);

//         if (nums[i] + nums[j] === target) {
//             console.log(nums[i], nums[j]);
//         }

//         if (nums[i] + nums[j] < 0) {
//             console.log(false);
//             break;

//         }

//     }

// }

// ---------------------------

// var reverseList = function () {
//     let head = [1, 2, 3, 4, 5];
//     for (let i = head.length - 1; i >= 0; i--) {
//         console.log(head[i]);
//     }

// };

// reverseList()

// ----------------------------------------
// largest Number

// let arr = [10, 420, 30, 60, 50, 100];
// let maxNum = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//         maxNum = arr[i]
//     }
// }

// let smallNum = arr[arr.length - 2];

// console.log("Smallest Number", smallNum);

// console.log("Largest Number", maxNum);

// --------------------------------------

// const users = [
//     { id: 1, name: 'ali', isActive: true },
//     { id: 2, name: 'farooq', isActive: false },
//     { id: 3, name: 'hamza', isActive: true },
// ];

// function active() {
//     const inactive = users.filter((n) => n.isActive === true).map((m) => m.name.toUpperCase());
//     console.log(inactive);

// }
// active()

// Deep Copy and Shollow Copy

// const obj = {
//     name: "Ali",
//     email: "ali@gmail.com",
//     address: {
//         city: "karachi",
//         location: {
//             home: "nazimabad"
//         }
//     }
// }
// console.log("Orignal Object", obj);

// // Object Ko Copy Karna Ka old version
// // let copy = Object.assign(obj);

// // Object Ko Copy Karna Ka New version
// let shallowCopy = { ...obj };
// let deepCopy = JSON.parse(JSON.stringify(obj));

// obj.address.city = "Islamabad"
// obj.address.location.home = "North Karachi"

// console.log("Deep Copy", deepCopy);
// console.log("shallow Copy", shallowCopy);

// console.log("Orignal Object", obj);
// console.log("shallow Copy", shallowCopy);

// =======================

// function nameRevers(str) {
//     for (let i = str.length; i >= 0; i--) {
//         console.log(str[i]);
//     }
// }
// nameRevers("Hello")

// =======================

// function countVowels(str) {
//     let count = 0
//     let vowel = "aeiouAEIOU"
//     for (let i = 0; i < str.length; i++) {
//         if (vowel.includes(str[i])) {
//             count++
//         }
//     }
//     console.log("counts", count);

// }

// countVowels("Web And Mobile App Developments")

// =======================

// function maxNumber() {
//     let arr = [1, 2, 3, 4, 5];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log("Max Number:", max);
// }
// maxNumber();

// ===============

// function maxNum() {
//     let arr = [10, 20, 30, 400, 50];
//     let maxNumder = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])

//         if (arr[i] > maxNumder) {
//             maxNumder = arr[i]
//         }

//     }
//     console.log("Max Numder", maxNumder);
// }

// maxNum()

// =================

// function secondLargest() {
//     let arr = [10, 20, 30, 400, 50];

//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];
//         }
//     }

//     console.log("Largest:", largest);
//     console.log("Second Largest:", secondLargest);
// }

// secondLargest();


// Even And Odd

// let value = alert(num)

// function evenOdd(num) {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else if (typeof num === "string") {
//         console.log("Please Enter A Number");
//     } else {
//         console.log("Odd");

//     }
// }

// evenOdd(value)

// // String Return

// function reverString(num) {
//     for (let i = num.length - 0; i >= 0; i--) {
//         console.log(num[i]);

//         // }
//         // for (let i = 0; i < num.length; i++) {
//         //     console.log(num[i]);
//         // }
//     }
// }

// reverString("Farooq")

// let arr = [1, 2, 3, 4, 5];
// let newArr = Math.max(...arr);

// console.log("Array", arr);
// console.log("Max Number", newArr);

// function arrMax() {
//     let arr = [1, 2, 3, 4, 5];
//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] >= max) {
//             max = arr[i]
//         }
//     }
//     console.log(max);
//     return max
// }

// arrMax()

// function sumArr() {
//     let arr = [5, 10, 15, 20];
//     let sum = 0

//     for (let item of arr) {
//         sum += item
//     }

//     console.log(sum);
//     return sum
// }

// sumArr()

// function string(str) {
//     let reversed = "";
//     const vowels = "aeiouAEIOU";
//     const vowelsArray = [];
//     for (let item of str) {
//         reversed = item += reversed
//     };

//     for (let itemTwo of reversed) {
//         if (vowels.includes(itemTwo)) {
//             vowelsArray.push(itemTwo)
//         }

//     }

//     console.log(reversed);
//     console.log(vowelsArray);

// }
// string("farood")

// Level Up JavaScript

// const users = [
//     { name: "Ali", age: 17 },
//     { name: "Ahmed", age: 22 },
//     { name: "Farooq", age: 25 },
//     { name: "Usman", age: 16 }
// ];

// function findData(users) {
// let result = []
// for (let item of users) {
//     if (item.age > 18) {
//         result.push(item)
//     }

// }
// console.log(result);
// return result

// ECMAScript Code 
// let result = users.filter((m) => m.age > 18);
// console.log(result);

// }

// findData(users);

// ===============

// let arr =;

// let max = -Infinity;
// let secondMax = -Infinity;

// for (const item of arr) {
//     if (item > max) {
//         secondMax = max; // The old max becomes the second largest
//         max = item;      // Update max to the new highest number
//     } else if (item > secondMax && item !== max) {
//         secondMax = item; // Update secondMax if it's between max and the old secondMax
//     }
// }

// console.log(secondMax); // Outputs: 15


// findSecondLargest([10, 5, 20, 8, 15]);
// Output: 15

// =========================================

// countFrequency([1, 2, 2, 3, 1, 1, 4])

// function countFrequency(arr) {
//     let frequency = {};

//     for (let num of arr) {
//         frequency[num] = (frequency[num] || 0) + 1;
//     }

//     return frequency;
// }
// console.log(countFrequency([1, 2, 2, 3, 1, 1, 4]))