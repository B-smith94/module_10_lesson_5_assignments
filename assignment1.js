/*
Assignment 1
Task 1: Create an array containing information about different products
-include name, price, and description

Task 2: Write a function to display product information on the webpage dynamically

Task 3: Implement event listener to trigger display of products when the page loads

*/

// Task 1
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2
function displayProducts() {
    const newParagraph = document.createElement("p")
    newParagraph.innerHTML = products;
}

// Task 3
document.getElementsByTagName("body").addEventListener("load", displayProducts);