// L1: Deep vs Shallow copy
// Problem Statement: Write a function deepClone(obj) that creates a deep copy of a given object 
// using JSON.stringify() and JSON.parse(). The function should ensure that modifying the cloned 
// object does not affect the original object.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Test with the example input
const original = { 
  name: "Alice", 
  hobbies: ["reading", "traveling"] 
};

// Create deep clone
const clone = deepClone(original);

// Modify the clone
clone.hobbies.push("coding");

// Display results
console.log("Original:", original);
console.log("Clone:", clone);

// Additional test cases
console.log("\n=== Additional Test Cases ===");

// Test with nested objects
const nestedOriginal = {
  person: {
    name: "Bob",
    address: {
      city: "New York",
      country: "USA"
    }
  },
  scores: [85, 92, 78]
};

const nestedClone = deepClone(nestedOriginal);

// Modify nested clone
nestedClone.person.address.city = "Los Angeles";
nestedClone.scores.push(95);

console.log("Nested Original:", nestedOriginal);
console.log("Nested Clone:", nestedClone);

// Verify they are truly separate
console.log("\n=== Verification ===");
console.log("Are they the same object?", original === clone);
console.log("Are nested objects the same?", nestedOriginal.person === nestedClone.person); 