function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit(amount) {
        if (amount <= 0) {
          console.log("Deposit amount must be greater than 0.");
          return balance;
        }
        balance += amount;
        return balance;
      },
  
      withdraw(amount) {
        if (amount > balance) {
          console.log("Insufficient funds.");
          return balance;
        }
        if (amount <= 0) {
          console.log("Withdrawal amount must be greater than 0.");
          return balance;
        }
        balance -= amount;
        return balance;
      },
  
      getBalance() {
        return balance;
      }
    };
  }
  
  // Example usage:
  const account = createBankAccount(100);
  
  console.log(account.deposit(50));    // Output: 150
  console.log(account.withdraw(30));   // Output: 120
  console.log(account.getBalance());   // Output: 120
  
   
  console.log(account.balance);        
  