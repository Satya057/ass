// L0 - Using call() Method
// Problem Statement: Create a function personInfo that logs the name and age of a person. 
// Using the call() method, call the function with a specific this context 
// (an object with properties name and age).

function personInfo() {
  console.log("Name:", this.name);
  console.log("Age:", this.age);
}

const person1 = {
  name: "John",
  age: 30
};

const person2 = {
  name: "Sarah",
  age: 25
};

personInfo.call(person1);
console.log("---");
personInfo.call(person2); 