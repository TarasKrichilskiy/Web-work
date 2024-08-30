// main.js

// Function to evaluate the condition
function checkCondition() {
    // Example variable
    let number = 10;

    // Get the result element
    let resultElement = document.getElementById('result');

    // If-else statement to check the condition
    if (number > 5) {
        resultElement.textContent = 'The number is greater than 5.';
    } else {
        resultElement.textContent = 'The number is 5 or less.';
    }
}

// Call the function to check the condition
checkCondition();