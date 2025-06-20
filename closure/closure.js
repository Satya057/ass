function outerFunction() {
    const message = "Hello from the closure!";
    
    function innerFunction() {
        console.log(message);
        return message;
    }
    
    return innerFunction;
}

const storedFunction = outerFunction();
console.log("Outer function has completed execution");
console.log("Now calling the stored function...");
const result = storedFunction();
console.log("Function returned:", result); 