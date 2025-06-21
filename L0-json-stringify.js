// L0 - JSON Stringify Object
// Problem Statement: Create a simple JavaScript object called student with properties: 
// name, age, and course. Then, use the JSON.stringify() method to convert the object 
// into a JSON string and log it to the console.

// Create the student object
let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

// Convert the object to JSON string and log it
console.log(JSON.stringify(student, null, 2));

// Alternative: Log without pretty printing (single line)
// console.log(JSON.stringify(student)); 