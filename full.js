const users = [
    { name: "Ali", age: 22, city: "Karachi", skills: ["React", "Node"] },
    { name: "Ahmed", age: 17, city: "Lahore", skills: ["HTML", "CSS"] },
    { name: "Sara", age: 25, city: "Karachi", skills: ["React", "MongoDB"] },
    { name: "Usman", age: 19, city: "Islamabad", skills: ["Node", "Express"] }
];

const result = users.filter(m => m.age > 18 && m.city === "Karachi").map(({ name, skills }) => ({ name, skills }));

console.log("result", result);
