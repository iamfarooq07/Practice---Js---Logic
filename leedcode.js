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

var reverseList = function () {
    let head = [1, 2, 3, 4, 5];
    for (let i = head.length - 1; i >= 0; i--) {
        console.log(head[i]);
    }

};

reverseList()


