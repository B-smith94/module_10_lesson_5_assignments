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
    document.getElementById('products').innerHTML = 
    products[0].name + ", " + products[0].price + ", " +products[0].description + "; " + 
    products[1].name + ", " + products[1].price + ", " +products[1].description + "; " + 
    products[2].name + ", " + products[2].price + ", " +products[2].description;
    console.log("Displaying Products...")
}

// Task 3
document.getElementById("products").addEventListener("load", displayProducts());