const car = {
    brand: "Tesla",
    getBrand: function() {
      return this.brand;
    }
  };
  
   
  const boundGetBrand = car.getBrand.bind(car);
  
  // Call the bound function
  console.log(boundGetBrand()); // Output: "Tesla"