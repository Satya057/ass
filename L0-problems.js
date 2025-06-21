// L0 JavaScript Problems

// ========================================
// Problem 1: JSON Stringify Object
// ========================================

console.log("=== Problem 1: JSON Stringify Object ===");

let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

console.log(JSON.stringify(student, null, 2));

// ========================================
// Problem 2: Using apply() to Multiply Numbers
// ========================================

console.log("\n=== Problem 2: Using apply() to Multiply Numbers ===");

function multiply(a, b) {
  return a * b;
}

function multiplyNumbers(num1, num2) {
  return multiply.apply(null, [num1, num2]);
}

console.log("multiplyNumbers(5, 3):", multiplyNumbers(5, 3));
console.log("multiplyNumbers(10, 7):", multiplyNumbers(10, 7));
console.log("multiplyNumbers(2.5, 4):", multiplyNumbers(2.5, 4));
console.log("multiplyNumbers(-3, 6):", multiplyNumbers(-3, 6)); 