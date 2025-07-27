const checkout = {
    items: [],
    total: 0,
  
    addItem(item) {
      let price = Number(item.price); // Convert string to number
  
      if (isNaN(price)) {
        console.log("Invalid price.");
        return;
      }
  
      this.items.push({ ...item, price }); // Store item with numeric price
      this.total += price;
      console.log(`Added: ${item.name} - $${price.toFixed(2)}`);
    },
  
    getTotal() {
      return `Total: $${this.total.toFixed(2)}`;
    }
  };
  
  // Testing with mixed type prices
  checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // should convert to number
  checkout.addItem({ name: "Milk", price: 3.50 });             // valid number
  
  console.log(checkout.getTotal()); // Total: $103.45
  