var age = 25; // 1. Declare a global variable age and assign a value to it.

// 2. Create a function displayAge that logs the value of age.
function displayAge() {
  console.log("The current age is: " + age);
}

// 3. Create a second function changeAge, which changes the value of age.
function changeAge(newAge) {
  age = newAge;
  console.log("Age has been updated to: " + age);
}

// 4. Call displayAge and changeAge and check how the value of age is updated.
console.log("--- Demonstrating Execution Contexts ---");

// Call displayAge to show the initial value from the global context
displayAge();

// Call changeAge to modify the global variable from a function context
changeAge(30);

// Call displayAge again to show the updated value
displayAge();

console.log("--- End of Demonstration ---"); 