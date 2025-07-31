function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== 'number' || number % 2 !== 0) {
      reject(`${number} is odd or invalid`);
    } else {
      resolve(`${number} is even`);
    }
  });
}

// Test cases
checkEvenNumber(4).then(console.log).catch(console.error);  // "4 is even"
checkEvenNumber(5).then(console.log).catch(console.error);  // "5 is odd or invalid"
checkEvenNumber('text').then(console.log).catch(console.error); // "text is odd or invalid"

module.exports = checkEvenNumber;