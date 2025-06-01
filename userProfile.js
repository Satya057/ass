const userProfile = {
    name: "Alice",
    age: 28,

    // Improved details method using template literals
    details() {
        return `${this.name} is ${this.age} years old.`;
    },

    // Improved updateAge method with better validation and logging
    updateAge(newAge) {
        // Validate input type
        if (typeof newAge !== 'number') {
            console.log("Invalid age: Must be a number");
            return false;
        }

        // Validate age range
        if (newAge <= 0 || newAge > 120) {
            console.log("Invalid age: Must be between 1 and 120");
            return false;
        }

        // Update age
        this.age = newAge;
        console.log("Age updated successfully");
        console.log(this.details());
        return true;
    },

    // New method to update name
    updateName(newName) {
        if (!newName || typeof newName !== 'string') {
            console.log("Invalid name: Must be a non-empty string");
            return false;
        }

        this.name = newName;
        console.log("Name updated successfully");
        console.log(this.details());
        return true;
    },

    // New method to display full profile
    displayProfile() {
        console.log("\nUser Profile:");
        console.log(this.details());
    }
};

// Test the improved user profile system
console.log("Testing User Profile System:\n");

// Display initial profile
userProfile.displayProfile();

// Update age with valid value
console.log("\nUpdating age to 30:");
userProfile.updateAge(30);

// Try invalid age updates
console.log("\nTrying invalid age updates:");
userProfile.updateAge(-5);
userProfile.updateAge("not a number");
userProfile.updateAge(150);

// Update name
console.log("\nUpdating name:");
userProfile.updateName("Alice Smith");

// Display final profile
console.log("\nFinal profile state:");
userProfile.displayProfile(); 