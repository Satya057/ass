const squareAndCube = (num) => ({ square: num * num, cube: num * num * num });

 
const number = 5;
const result = squareAndCube(number);
console.log(result); // Expected output: { square: 25, cube: 125 } 