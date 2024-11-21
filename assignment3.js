/*
Assignment 3
Task 1: Create at least 5 html elements to be styled dynamically

Task 2: Write JS Code to dynamically change the color of the box element when clicked

Task 3: Add additional stylings based on user interaction
-ie: onclick, onmouseover, etc.
*/

// Task 2
function changeColor() {
    document.getElementById("box").style.backgroundColor = "lightblue";
}

// Task 3
function changeFontType() {
    document.getElementById("box2").style.fontFamily ='Arial, Helvetica, sans-serif';
}

function changeFontSize() {
    document.getElementById("box3").style.fontSize = '40px';
}

function changeFontColor() {
    document.getElementById("box4").style.color = 'red';
}

function changeFontStyle() {
    document.getElementById("box5").style.fontStyle = 'italic';
}