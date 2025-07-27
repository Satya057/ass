const userProfile = {
    name: "Alice",
    age: 28,
  
    details() {
      return `${this.name} is ${this.age} years old.`;
    },
  
    updateAge(newAge) {
      if (newAge <= 0) {
        console.log("Invalid age.");
        return;
      }
  
      this.age = newAge;
      console.log(this.details()); // Corrected: called the method using ()
    }
  };
  
  userProfile.updateAge(30);             // Logs: Alice is 30 years old.
  console.log(userProfile.details());    // Logs: Alice is 30 years old.
  