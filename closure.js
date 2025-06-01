function outerFunction() {
  const message = "Hello from the closure!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

// Demonstrate closure
const myClosure = outerFunction();

// Call the stored function
myClosure(); 