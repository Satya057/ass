function outerFunction() {
    let message = "Hello from the closure!"; // Variable in outer scope
    return function innerFunction() {
        console.log(message); // Accesses `message` via closure
    };
}


const inner = outerFunction(); 
inner(); // Logs: "Hello from the closure!"