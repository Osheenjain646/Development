// Base code given 
const fs = require('fs').promises; // File System with Promises
const bankDatabase = new Map();
// Global Data Structure to store all accounts
// Key: Account ID (String), Value: Account Object
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
        bankDatabase.set(this._accountHolder,this.#balance);
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

    deposit(amount){
        this._modifyBalance(amount)
    }

    processInternationalTransfer(amount, callback){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                if(amount>10000){
                    reject("Audit Required");
                }else{
                    resolve(callback);
                }
            },2000);
        })
    }

    displaySummary() {
        console.log(`Holder: ${this._accountHolder} | Balance: $${this.balance}`);
    }
}
// Task 1
class InvestmentAccount extends Account{
    static INTEREST_RATE=0.05;
    #lockedFunds =true;

    constructor(_accountHolder){
        
    }

    set lockStatus(status){
        this.#lockedFunds = status;
    }

    _modifyBalance(amount){
        if(this.#lockedFunds===true && amount<0){
            throw new Error("Funds are locked");
        }
        super._modifyBalance(amount)
    }
}

const account1 = new Account("Osheen",20000000000);
const account2 = new Account("Anurag",20000000000);
const account3 = new Account("Manoj",20000000000);
const account4 = new Account("Chitranshi",20000000000);
const account5 = new Account("unknown",-200000);

// Task 2
async function generateMonthlyStatement(accountobj){
    try{
        const {_accountHolder,transactions} = accountobj;
        const filename=`Statement_${_accountHolder}.txt`;
        const Data = JSON.stringify(transactions);
        await fs.writeFile(filename,Data);
    }catch(error){
        throw new Error("Please Provide the file.");
    }
}

account1._modifyBalance(500000);

generateMonthlyStatement(account1);

account1.processInternationalTransfer(10000,function(){
    console.log("Transfer Complete");
}).then(function(data){
    data();
}).catch(function(data){
    console.log(data);
});




function auditBankAssets(bankDatabase){
    let totalLiquidity=0;
    for(const element of bankDatabase){
        if(element[1]<0){
            console.log(element[0]);
        }
        totalLiquidity+=element[1];
    }
    console.log(totalLiquidity);
}

auditBankAssets(bankDatabase);

async function EndofDay() {
    const acc = new Account("Aj",50000)
    const inv = new InvestmentAccount("CJ")
    acc.depo
}


