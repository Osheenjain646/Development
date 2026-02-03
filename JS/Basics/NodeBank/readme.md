# Assignment

Here is a comprehensive JavaScript assignment based on a **"FinTech Dashboard"** system. This assignment is designed to test your understanding of modern JavaScript, Object-Oriented Programming (OOP), and asynchronous operations.

### Assignment Scenario: The "NodeBank" System

You are building the backend core for a new banking application. You need to manage different types of accounts, handle secure transactions, and save records to the disk.

**Note on "Protected" fields:** Since JavaScript does not have a native `protected` keyword, use the convention of an underscore prefix (e.g., `_accountHolder`) to indicate a property should be treated as protected (accessible by subclasses). Use `#` for true private fields.

---

### Phase 1: The Starter Code

Review the base code below. You will use this as the foundation for your 5 tasks.

JavaScript

# 

`const fs = require('fs').promises; // File System with Promises

// 1. Base Class: Account
class Account {
    // Protected property convention
    _accountHolder;
    
    // Private property (Truly private)
    #balance; 

    constructor(name, initialBalance) {
        this._accountHolder = name;
        this.#balance = initialBalance;
        this.transactions = []; // Array to store history
    }

    // Getter for balance (Read-only for outside world)
    get balance() {
        return this.#balance;
    }

    // Protected-style method to modify balance
    _modifyBalance(amount) {
        this.#balance += amount;
        this.transactions.push({
            type: amount > 0 ? 'CREDIT' : 'DEBIT',
            amount: amount,
            date: new Date()
        });
    }

    displaySummary() {
        console.log(`Holder: ${this._accountHolder} | Balance: $${this.balance}`);
    }
}

// Global Data Structure to store all accounts
// Key: Account ID (String), Value: Account Object
const bankDatabase = new Map();`

---

### Phase 2: The Assignment Tasks (Moderate Level)

Here are your 5 tasks. Implement them using the specific concepts requested.

### Task 1: Subclasses, Static Methods & Private Fields

**Concept:** *Inheritance, Static, Private, Get/Set*

Create a class `InvestmentAccount` that extends `Account`.

1. Add a **static** property `INTEREST_RATE` set to `0.05`.
2. Add a **private** field `#lockedFunds` (boolean) initialized to `true`.
3. Add a **setter** method `set lockStatus(status)` that allows changing the locked status.
4. Override `_modifyBalance`. If `#lockedFunds` is true and the user tries to withdraw (negative amount), throw an error: "Funds are locked."

### Task 2: Async/Await & File I/O

**Concept:** *Async/Await, fs module, Error Handling*

Create a standalone **async** function called `generateMonthlyStatement(accountObj)`.

1. This function should take an account object.
2. It should format the account's transaction history into a string.
3. Use `await fs.writeFile()` to save this data to a file named `statement_[AccountHolderName].txt`.
4. Wrap the file writing in a `try...catch` block to handle any I/O errors.

### Task 3: Promises & Callbacks

**Concept:** *Promises, Callbacks, Simulation*

Add a method to the `Account` class called `processInternationalTransfer(amount, callback)`.

1. This method should return a **Promise**.
2. Inside the promise, use `setTimeout` to simulate a 2-second delay for currency verification.
3. If the amount is greater than 10,000, **reject** the promise with "Audit Required".
4. Otherwise, resolve the promise.
5. **Crucial:** If a `callback` function is provided, execute it **after** the promise resolves (inside a `.then()` block attached to the operation) to notify the user "Transfer Complete".

### Task 4: Loops & Map Data Structure

**Concept:** *Map iteration, Loops, Logic*

Write a function `auditBankAssets(databaseMap)`.

1. This function takes the `bankDatabase` (Map) as an argument.
2. Use a loop (e.g., `for...of`) to iterate through the **values** of the Map.
3. Calculate the **total** liquidity (sum of all balances) in the bank.
4. Identify and log the names of any `_accountHolder` who has a balance below $0 (Debt).

### Task 5: Complex Logic Integration

**Concept:** *Integration of all concepts*

Write a script to simulate a "End of Day" processing batch.

1. Create two instances: one `Account` and one `InvestmentAccount`. Add them to the `bankDatabase` Map.
2. Perform a deposit on both.
3. Call `generateMonthlyStatement` for both accounts (ensure they run sequentially or concurrently using `Promise.all`).
4. Use the `auditBankAssets` function to print the final bank status.

---

### Helpful Hints for the Solution

- **Maps:** Remember that `map.set(key, value)` adds items and `map.values()` gives you an iterator for the loops.
- **Private Fields:** You cannot access `#balance` from the child class directly. You must use the methods provided in the parent or `super`.
- **File System:** When using `fs.promises`, you don't need a callback for the write function; you just `await` it.

---

**Would you like me to provide the solution code for any of these specific tasks to help you get started?**