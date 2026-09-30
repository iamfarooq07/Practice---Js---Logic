// const users = [
//     { name: "Ali", age: 22, city: "Karachi", skills: ["React", "Node"] },
//     { name: "Ahmed", age: 17, city: "Lahore", skills: ["HTML", "CSS"] },
//     { name: "Sara", age: 25, city: "Karachi", skills: ["React", "MongoDB"] },
//     { name: "Usman", age: 19, city: "Islamabad", skills: ["Node", "Express"] }
// ];

// const result = users.filter(m => m.age > 18 && m.city === "Karachi").map(({ name, skills }) => ({ name, skills }));

// console.log("result", result);

// ===================

// const products = [
//     { name: "Laptop", category: "Electronics", price: 120000, stock: 5 },
//     { name: "Phone", category: "Electronics", price: 80000, stock: 10 },
//     { name: "Shirt", category: "Clothing", price: 3000, stock: 20 },
//     { name: "Shoes", category: "Clothing", price: 7000, stock: 0 },
//     { name: "Headphones", category: "Electronics", price: 5000, stock: 15 },
//     { name: "Mobile Phone", category: "Electronics", price: 5000, stock: 0 }

// ];

// const result = products.filter(m => m.category === "Electronics" && m.stock >= 1).map(({ name, price }) => ({ name, price }));

// console.log("Result", result);

// ====================

// const orders = [
//     { id: 1, status: "completed", total: 5000 },
//     { id: 2, status: "pending", total: 3000 },
//     { id: 3, status: "completed", total: 7000 },
//     { id: 4, status: "cancelled", total: 2000 },
//     { id: 5, status: "completed", total: 4000 }
// ];

// const result = orders.filter(m => m.status === "completed").reduce((acc, item) => acc + item.total, 0);
// console.log("Result", result);

// ====================

// const products = [
//     { name: "Laptop", category: "Electronics", price: 120000 },
//     { name: "Phone", category: "Electronics", price: 80000 },
//     { name: "Shirt", category: "Clothing", price: 3000 },
//     { name: "Shoes", category: "Clothing", price: 7000 },
//     { name: "Headphones", category: "Electronics", price: 5000 },
//     { name: "Watch", category: "Accessories", price: 10000 }
// ];

// const result = products.reduce((acc, item) => {
//     if (!acc[item.category]) {
//         acc[item.category] = { price: item.price };
//     } else {
//         acc[item.category].price += item.price;
//     }

//     return acc
// }, {});

// console.log("Result", result);

// ==========================

const users = [
    {
        name: "Ali",
        skills: ["React", "Node", "MongoDB"]
    },
    {
        name: "Sara",
        skills: ["React", "Next.js"]
    },
    {
        name: "Ahmed",
        skills: ["Node", "Express", "MongoDB"]
    },
    {
        name: "Usman",
        skills: ["React", "Node"]
    }
];


const result = users.flatMap(m => m.skills).reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc
}, {})
console.log("result", result);


