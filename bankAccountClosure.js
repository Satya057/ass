function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      } else {
        console.log("Deposit amount must be positive.");
        return balance;
      }
    },
    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      } else if (amount > balance) {
        console.log("Insufficient funds.");
        return balance;
      } else {
        console.log("Withdrawal amount must be positive.");
        return balance;
      }
    },
    getBalance: function() {
      return balance;
    }
  };
}

// Example usage:
const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120

console.log(account.withdraw(200)); // Output: Insufficient funds. 120
console.log(account.deposit(-10)); // Output: Deposit amount must be positive. 120 