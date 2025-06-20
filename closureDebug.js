function createFunctionList() {
  let functions = [];

  for (var i = 0; i < 5; i++) {
    functions.push(function () {
      console.log("Index:", i);
    });
  }

  return functions;
}

console.log("=== BUGGY CODE ===");
const functionList = createFunctionList();

functionList[0]();
functionList[1]();
functionList[2]();
functionList[3]();
functionList[4]();

function createFunctionListFixed1() {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log("Index:", i);
    });
  }

  return functions;
}

console.log("\n=== SOLUTION 1: Using let ===");
const functionListFixed1 = createFunctionListFixed1();

functionListFixed1[0]();
functionListFixed1[1]();
functionListFixed1[2]();
functionListFixed1[3]();
functionListFixed1[4]();

function createFunctionListFixed2() {
  let functions = [];

  for (var i = 0; i < 5; i++) {
    functions.push((function (index) {
      return function () {
        console.log("Index:", index);
      };
    })(i));
  }

  return functions;
}

console.log("\n=== SOLUTION 2: Using IIFE ===");
const functionListFixed2 = createFunctionListFixed2();

functionListFixed2[0]();
functionListFixed2[1]();
functionListFixed2[2]();
functionListFixed2[3]();
functionListFixed2[4]();

function createFunctionListFixed3() {
  let functions = [];

  for (var i = 0; i < 5; i++) {
    functions.push(function (index) {
      console.log("Index:", index);
    }.bind(null, i));
  }

  return functions;
}

console.log("\n=== SOLUTION 3: Using bind ===");
const functionListFixed3 = createFunctionListFixed3();

functionListFixed3[0]();
functionListFixed3[1]();
functionListFixed3[2]();
functionListFixed3[3]();
functionListFixed3[4](); 