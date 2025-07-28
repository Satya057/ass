function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // Example Usage:
  const originalObj = {
    name: "Alice",
    hobbies: ["reading", "traveling"]
  };
  
  const clonedObj = deepClone(originalObj);
  
  // Modify the cloned object
  clonedObj.hobbies.push("coding");
  
  console.log("Original:", originalObj);
  console.log("Clone:", clonedObj);