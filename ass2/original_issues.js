/**
 * Original Issues Demonstration
 * 
 * This file shows the original problems from the problem statement
 * and how they've been fixed in the main checkout.js file.
 */

console.log("=== ORIGINAL PROBLEMATIC CODE ===\n");

// Original problematic code (commented out to prevent errors)
/*
const checkout = {
  items: [],
  total: 0,
  
  addItem(item) {
    if (typeof item.price !== 'number' || isNaN(item.price)) {
      console.log("Invalid price.");
      return;
    }
    this.items.push(item);
    this.total += item.price;
  },
  
  getTotal() {
    return Total: $${parseFloat(this.total).toFixed(2)}; // SYNTAX ERROR!
  }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // TYPE COERCION ISSUE
checkout.addItem({ name: "Milk", price: 3.50 });
console.log(checkout.getTotal()); // Expected issue!
*/

console.log("ISSUES IDENTIFIED:");
console.log("1. Type Coercion: The first item has price as string '99.95' instead of number");
console.log("2. Syntax Error: getTotal() method has incorrect template literal syntax");
console.log("3. Validation: Price validation could be more robust");
console.log("4. Error Handling: No proper error messages for invalid data");

console.log("\n=== FIXES IMPLEMENTED ===");
console.log("1. ✅ Fixed type coercion by using parseFloat() to convert string prices to numbers");
console.log("2. ✅ Fixed template literal syntax in getTotal() method");
console.log("3. ✅ Improved validation to check for positive numbers and valid item names");
console.log("4. ✅ Added better error handling with descriptive messages");
console.log("5. ✅ Added additional utility methods (showItems, clearCart)");
console.log("6. ✅ Store prices as numbers in the items array for consistency");

console.log("\n=== TESTING THE FIXES ===");
console.log("Run 'node checkout.js' to see the corrected implementation in action!"); 