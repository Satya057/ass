const userProfile = {
  name: "Alice",
  age: 28,
  details() {
    return `${this.name} is ${this.age} years old.`;
  },
  updateAge(newAge) {
    if (typeof newAge !== "number" || newAge <= 0) {
      console.log("Invalid age. Please provide a positive number.");
      return;
    }
    this.age = newAge;
    console.log(this.details());
  },
};

console.log("Initial details:");
console.log(userProfile.details());

console.log("\nUpdating age to 30...");
userProfile.updateAge(30);

console.log("\nFinal details check:");
console.log(userProfile.details()); // Expected: "Alice is 30 years old."

console.log("\nAttempting to update with an invalid age:");
userProfile.updateAge(-10); 