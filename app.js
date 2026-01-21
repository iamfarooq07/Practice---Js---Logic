const products = [
    {
        id: 1,
        image: "/images/products/krunchBurger.png",
        title: "Burger1",
        description: "Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce",
        price: 100,
        category: "Burger",
        rating: 5,
    },
    {
        id: 2,
        image: "/images/products/shawarma.jpg",
        title: "Shawarma1",
        description: "Aromatic arabian rice with 6 pcs of hot shots and famous vietnamese sauce",
        price: 200,
        category: "Shawarma",
        rating: 4,
    },
    {
        id: 3,
        image: "/images/products/pizza.jpg",
        title: "Pizza1",
        description: "Crispy Zinger, double-crispy fried to perfection wrapped in a soft, buttery paratha",
        price: 300,
        category: "Pizza",
        rating: 3,
    },
    {
        id: 4,
        image: "/images/products/burger.png",
        title: "Burger2",
        description: "Juicy chicken burger with fresh lettuce, tomato, and cheese",
        price: 150,
        category: "Burger",
        rating: 4,
    },
    {
        id: 5,
        image: "/images/products/shawarma.jpg",
        title: "Shawarma2",
        description: "Spicy and flavorful shawarma roll with garlic sauce",
        price: 250,
        category: "Shawarma",
        rating: 3,
    },
    {
        id: 6,
        image: "/images/products/pizza.jpg",
        title: "Pizza2",
        description: "Cheesy Margherita pizza with fresh basil and tomato sauce",
        price: 350,
        category: "Pizza",
        rating: 5,
    },
    {
        id: 7,
        image: "/images/products/sandwichs.jpg",
        title: "Sandwich1",
        description: "Grilled vegetable sandwich with cheddar cheese and mayo",
        price: 120,
        category: "Sandwich",
        rating: 4,
    },
    {
        id: 8,
        image: "/images/products/krunchBurger.png",
        title: "Burger3",
        description: "Double patty burger with caramelized onions and BBQ sauce",
        price: 180,
        category: "Burger",
        rating: 5,
    },
    {
        id: 9,
        image: "/images/products/shawarma.jpg",
        title: "Shawarma3",
        description: "Classic beef shawarma with pickles and tahini sauce",
        price: 300,
        category: "Shawarma",
        rating: 4,
    },
    {
        id: 10,
        image: "/images/products/pizza.jpg",
        title: "Pizza3",
        description: "Pepperoni pizza with extra cheese and chili flakes",
        price: 400,
        category: "Pizza",
        rating: 3,
    },
    {
        id: 11,
        image: "/images/products/sandwich1.jpg",
        title: "Sandwich2",
        description: "Club sandwich with chicken, bacon, lettuce and tomato",
        price: 180,
        category: "Sandwich",
        rating: 5,
    },
    {
        id: 12,
        image: "/images/products/krunchBurger.png",
        title: "Burger4",
        description: "Spicy chicken burger with jalapenos and cheese sauce",
        price: 220,
        category: "Burger",
        rating: 4,
    },
    {
        id: 13,
        image: "/images/products/shawarma.jpg",
        title: "Shawarma4",
        description: "Chicken shawarma wrap with fresh vegetables and garlic sauce",
        price: 350,
        category: "Shawarma",
        rating: 3,
    },
    {
        id: 14,
        image: "/images/products/pizza.jpg",
        title: "Pizza4",
        description: "Veggie pizza with bell peppers, olives, mushrooms and onions",
        price: 420,
        category: "Pizza",
        rating: 4,
    },
    {
        id: 15,
        image: "/images/products/sandwichs.jpg",
        title: "Sandwich3",
        description: "Toasted ham and cheese sandwich with mustard mayo",
        price: 200,
        category: "Sandwich",
        rating: 3,
    },
    {
        id: 16,
        image: "/images/products/burger.png",
        title: "Burger5",
        description: "Classic beef burger with lettuce, tomato, and special sauce",
        price: 250,
        category: "Burger",
        rating: 5,
    },
    {
        id: 17,
        image: "/images/products/shawarma.jpg",
        title: "Shawarma5",
        description: "Beef shawarma with spicy sauce and crispy fries",
        price: 400,
        category: "Shawarma",
        rating: 4,
    },
    {
        id: 18,
        image: "/images/products/pizza.jpg",
        title: "Pizza5",
        description: "BBQ chicken pizza with onions and fresh cilantro",
        price: 500,
        category: "Pizza",
        rating: 5,
    },
    {
        id: 19,
        image: "/images/products/sandwich1.jpg",
        title: "Sandwich4",
        description: "Grilled chicken sandwich with creamy mayo and lettuce",
        price: 220,
        category: "Sandwich",
        rating: 4,
    },
    {
        id: 20,
        image: "/images/products/krunchBurger.png",
        title: "Burger6",
        description: "Cheese burger with crispy onions and pickles",
        price: 300,
        category: "Burger",
        rating: 5,
    },
    {
        id: 21,
        image: "/images/products/sandwichs.jpg",
        title: "Burger6",
        description: "Cheese burger with crispy onions and pickles",
        price: 300,
        category: "Burger",
        rating: 5,
    },
];

// Calculate price range automatically
const findRange = () => {
    let min = products[0].price;
    let max = products[0].price;

    products.forEach((product) => {
        if (product.price < min) min = product.price;
        if (product.price > max) max = product.price;
    });

    return { min, max };
};
// export const priceRange = findRange();

// console.log(products);

// map Logic

// let newTitle = products.map((n) => n.title);
// const discountedProducts = products.map(product => ({
//     ...product,
//     discountPrice: product.price - product.price * 0.10
// }));

// let newDiscount = discountedProducts.map((n) => n.discountPrice);
// console.log(newDiscount);
// console.log(discountedProducts);
// console.log(newTitle);

// Filter Logic

// let category = products.filter((value) => value.category === "Burger").filter((value) => value.price < 200);
// // console.log(priceMin);
// console.log(category);

// let rating = products.filter((value) => value.rating === 5);
// console.log(rating);

// Sort Logic Price ;

// let highToLow = [...products].sort((a, b) => b.price - a.price);
// console.log("High to Low:", highToLow);
// let lowToHigh = [...products].sort((a, b) => a.price - b.price);
// console.log("Low to high", lowToHigh);

// ============

// Sort Logic Rating

// let lowToHigh = [...products].sort((a, b) => a.rating - b.rating);
// console.log("Low to High:", lowToHigh);

// let highToLow = [...products].sort((a, b) => b.rating - a.rating);
// console.log("High to Low:", highToLow);

// Sorting Basic Logic Done;

// ============


// Medium (Combination)

// let arr = products.filter((value) => value.category === "Pizza" && value.rating > 4).map((n) => [{
//     title: n.title,
//     price: n.price
// }]);
// console.log(arr);

// let ascending = products.filter((n) => n.category === "Shawarma").sort((a, b) => a.price - b.price)
// console.log(ascending);

// let descending = [...ascending].filter((m) => m.price <= 300).sort((a, b) => b.price - a.price);
// console.log(descending);

// ============

// let data = products.map((n) => `Rs ${n.price}`.toUpperCase());
// console.log(data);
// let arr = [];
// for (let i = 0; i < products.length; i++) {
//     arr.push(`Rs ${products[i].price}`.toUpperCase())
// }
// console.log(arr);



// ============

// Level 3: Reduce(Important for Interviews)

// let total = products.reduce((acc, curt) => acc + curt.price, 0);
// let averagePrice = total / products.length;
// console.log(total);
// console.log(averagePrice);


// -----------------------Gpt Code-----------------------
// let grouping = products.reduce((acc, value) => {
//     if (!acc[value.category]) {
//         acc[value.category] = { items: [], count: 0 };
//     }
//     acc[value.category].items.push(value);
//     acc[value.category].count += 1;
//     return acc;
// }, {})
// console.log(grouping);

// let maxPrice = products.map((n) => n.price).reduce((acc, curt) => (curt > acc ? curt : acc), 0);
// let minPrice = products.map((n) => n.price).reduce((acc, curt) => (curt <= acc ? curt : acc), Infinity);

// console.log(`Max Prics ${maxPrice}`);
// console.log(`Min Prics ${minPrice}`);

// ============

// Level 4: Real-World Logic;

// Search Bar Sorting products item basic logic

// const serInput = document.getElementById("search");
// const button = document.getElementById("btn");
// const formInput = document.getElementById("form");

// formInput.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const inputVal = serInput.value;
//     let sortingData = products.filter((m) => m.category === inputVal);
//     if (sortingData.length === 0) {
//         alert(`${inputVal} Not Found`)
//         serInput.value = ""
//         return
//     }
//     console.log(sortingData);

//     serInput.value = ""
// })

// ============

// Rating Filter

// let rating = products.filter((n) => n.rating >= 4 && n.rating <= 5);
// console.log(rating);

// let result = products.map((n) => n.title);
// let check = result.filter((m) => m.title === result);
// console.log(check);

// console.log(result);

// console.log(products[0].title);
// let titleArr = []
// let sameArr = []

// for (let i = 0; i < products.length; i++) {
//     // console.log(products[i].title);s
//     titleArr.push(products[i].title)


//     // console.log(titleArr);

//     for (let j = 0; j < titleArr.length; j++) {
//         if (titleArr[j] === products[i].title) {
//             sameArr.push(titleArr[j])

//         }

//     }
// }
// console.log(sameArr);
// let seen = {};
// let sameArr = [];

// for (let i = 0; i < products.length; i++) {
//     let title = products[i].title;

//     if (seen[title]) {
//         sameArr.push(title);
//     } else {
//         seen[title] = true;
//     }
// }

// console.log(sameArr);

// ============

// const users = [
//     { id: 1, name: "Ali", skills: ["HTML", "CSS"] },
//     { id: 2, name: "Farooq", skills: ["JS", "React"] },
//     { id: 1, name: "Ali", skills: ["CSS", "JS"] },
//     { id: 3, name: "Ahmed", skills: ["Node", "JS"] },
// ];
// console.log(users);

// const filtering = users.filter(
//     (user, index) =>
//         users.map(u => u.id).indexOf(user.id) === index
// );

// const filtering2 = users.filter((value, index) => users.map((n) => n.id).indexOf(value.id) === index)

// // console.log(filtering2);
// let arr = []
// const merag = [...users].map((m) => m.id);
// if (merag === 1) {
//     arr.push(merag)
// }
// console.log(merag);
// console.log(arr);

// ===============Star Question ==================

// let star = 5;

// for (let i = 0; i <= 5; i++) {
//     let str = "*";
//     for (let j = 1; j <= i; j++) {
//         str = str + "*";
//     }
//     console.log(str);

// }



// --------------Function Basic To Advance-------------------

// function isEven(num) {
//     if (typeof num !== "number" || num <= 0) {
//         console.log("Invalid input");
//         return
//     }
//     return num % 2 === 0 ? true : false

// }
// console.log(isEven(2));

// function isEven(num) {
//     if (typeof num !== "number" || num <= 0) {
//         console.log("Invalid Input");
//         return

//     }
//     return num % 2 === 0 ? `${num} is Even Number` : `${num} is Odd Number`
// }
// console.log(isEven(21));





