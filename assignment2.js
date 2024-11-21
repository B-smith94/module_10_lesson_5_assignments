/*
Assignment 1
Task 1: Create an HTML form with input fields for the user's name, email, and message

Task 2: Write JS code to handle form submissions and store input in an object

Task 3: Implement form validation to ensure that all required fields are filled before submission
*/

// Task 2
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert("Congratulations, " + name + " Form Submitted Successfully!");
    document.getElementById('form').reset();
}