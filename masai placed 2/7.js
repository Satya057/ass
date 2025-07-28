function multiplyNumbers(num1, num2) {
  
    const product = (function() {
      return this.num1 * this.num2;
    }).apply({ num1, num2 });  
    
    return product;
  }
  
  
  console.log(multiplyNumbers(5, 3)); // Output: 15