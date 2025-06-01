// Global variable declaration
let age = 25;

// Function in global execution context
function displayAge() {
    console.log("Current age:", age);
}

// Function that modifies the global variable
function changeAge(newAge) {
    age = newAge;
    console.log("Age updated to:", age);
}

// Initial display of age
console.log("Initial age value:");
displayAge(); // Output: Current age: 25

// Change the age and display again
console.log("\nAfter changing age:");
changeAge(30); // Output: Age updated to: 30
displayAge(); // Output: Current age: 30

// Demonstrate that age is truly global
console.log("\nAccessing age directly from global context:", age); // Output: 30 