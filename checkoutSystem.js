const checkout = {
    items: [],
    total: 0,

    // Improved addItem method with proper type checking and conversion
    addItem(item) {
        // Validate item object
        if (!item || typeof item !== 'object') {
            console.log("Invalid item: Must be an object");
            return false;
        }

        // Validate item name
        if (!item.name || typeof item.name !== 'string') {
            console.log("Invalid item: Name is required and must be a string");
            return false;
        }

        // Validate and convert price
        let price;
        if (typeof item.price === 'string') {
            price = parseFloat(item.price);
            if (isNaN(price)) {
                console.log("Invalid price: Must be a valid number");
                return false;
            }
        } else if (typeof item.price === 'number') {
            price = item.price;
        } else {
            console.log("Invalid price: Must be a number or valid number string");
            return false;
        }

        // Validate price is positive
        if (price <= 0) {
            console.log("Invalid price: Must be greater than 0");
            return false;
        }

        // Add item to cart
        this.items.push({
            name: item.name,
            price: price
        });
        
        this.total += price;
        console.log(`Added ${item.name} to cart: $${price.toFixed(2)}`);
        return true;
    },

    // Improved getTotal method with proper formatting
    getTotal() {
        return `Total: $${this.total.toFixed(2)}`;
    },

    // New method to display cart contents
    displayCart() {
        if (this.items.length === 0) {
            console.log("Cart is empty");
            return;
        }

        console.log("\nShopping Cart:");
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name}: $${item.price.toFixed(2)}`);
        });
        console.log(this.getTotal());
    }
};

// Test the improved checkout system
console.log("Testing Checkout System:\n");

// Try to add item with string price
checkout.addItem({ name: "Coffee Maker", price: "99.95" });

// Add item with number price
checkout.addItem({ name: "Milk", price: 3.50 });

// Try to add invalid items
checkout.addItem({ name: "Invalid Item", price: "not a number" });
checkout.addItem({ price: 10.00 }); // Missing name
checkout.addItem({ name: "Negative Price", price: -5.00 });

// Display cart contents and total
checkout.displayCart(); 