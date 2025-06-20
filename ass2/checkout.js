/**
 * L0 - Fixing E-commerce Checkout System
 * 
 * This script demonstrates a corrected e-commerce checkout system.
 * The original code had issues with type coercion and ES6 syntax errors.
 * This version includes fixes and improvements.
 */

const checkout = {
  items: [],
  total: 0,

  /**
   * Adds an item to the checkout cart after validating its price.
   * @param {object} item - The item object with name and price properties.
   */
  addItem(item) {
    // Improved validation: Check for item object and required properties
    if (!item || typeof item.name !== 'string' || item.name.trim() === '') {
      console.log("Invalid item: Item must have a valid name.");
      return;
    }

    // Convert price to number and validate it
    const price = parseFloat(item.price);
    
    if (typeof price !== 'number' || isNaN(price) || price <= 0) {
      console.log(`Invalid price for ${item.name}: Price must be a positive number.`);
      return;
    }

    // Add item to cart
    this.items.push({
      name: item.name,
      price: price // Store as number, not string
    });
    
    this.total += price;
    console.log(`Added ${item.name} for $${price.toFixed(2)}`);
  },

  /**
   * Returns the total amount formatted as currency.
   * @returns {string} The formatted total amount.
   */
  getTotal() {
    // Fixed template literal syntax
    return `Total: $${parseFloat(this.total).toFixed(2)}`;
  },

  /**
   * Displays all items in the cart.
   */
  showItems() {
    if (this.items.length === 0) {
      console.log("Cart is empty.");
      return;
    }
    
    console.log("\nItems in cart:");
    this.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - $${item.price.toFixed(2)}`);
    });
  },

  /**
   * Clears the cart and resets total.
   */
  clearCart() {
    this.items = [];
    this.total = 0;
    console.log("Cart cleared.");
  }
};

// --- Script Operations ---

console.log("=== E-commerce Checkout System ===\n");

console.log("//--- Adding items to cart ---");

// This will now be rejected due to string price (original issue)
checkout.addItem({ name: "Coffee Maker", price: "99.95" });

// This will work correctly
checkout.addItem({ name: "Milk", price: 3.50 });

// Add more items to demonstrate functionality
checkout.addItem({ name: "Bread", price: 2.99 });
checkout.addItem({ name: "Eggs", price: 4.25 });

console.log("\n//--- Displaying cart contents ---");
checkout.showItems();

console.log("\n//--- Getting total ---");
console.log(checkout.getTotal());

console.log("\n//--- Testing edge cases ---");

// Test invalid items
checkout.addItem({ name: "", price: 5.00 }); // Empty name
checkout.addItem({ name: "Invalid Item", price: "not a number" }); // Invalid price
checkout.addItem({ name: "Negative Price", price: -10 }); // Negative price
checkout.addItem({ name: "Zero Price", price: 0 }); // Zero price

console.log("\n//--- Final cart state ---");
checkout.showItems();
console.log(checkout.getTotal());

console.log("\n//--- Clearing cart ---");
checkout.clearCart();
checkout.showItems();
console.log(checkout.getTotal()); 