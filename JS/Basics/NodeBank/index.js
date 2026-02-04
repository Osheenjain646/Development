// Global Data Structure to store all accounts

// Key: Account ID (String), Value: Account Object
const bankDatabase = new Map();

const fs = require('fs').promises; // File System with Promises

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
        bankDatabase.set(this._accountHolder,this.#balance);
    }

    processInternationalTransfer(amount, callback){
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                if(amount>10000){
                    reject("Audit Required")
                }
                else{
                    resolve(callback);
                }
            },2000)
        })
    }

    deposit(amount){
        this._modifyBalance(amount)
    }

    displaySummary() {
        console.log(`Holder: ${this._accountHolder} | Balance: $${this.balance}`);
    }
}
// Task 1 
class InvestmentAccount extends Account{
    static INTEREST_RATE=0.05;
    #lockedFunds=true;

    constructor(name,initialBalance){
        super(name,initialBalance)
    }

    set locedStatus(status){
        this.#lockedFunds=status;
    }

    _modifyBalance(amount){
        if(this.#lockedFunds===true && amount<0){
            throw new Error("Funds are locked");
        }
        super._modifyBalance(amount)
    }
}

const account1 = new Account("osheen",42656236561656);
account1._modifyBalance(5000);

// Task 2 
async function generateMonthlyStatemnet(accountObj) {
    try{
        const {_accountHolder,transactions}=accountObj;
        const data=JSON.stringify(transactions);
        const pathFile =`statement_${_accountHolder}.txt`
        await fs.writeFile(pathFile,data);
    }catch(error){
        throw new Error(error);
    }
}

generateMonthlyStatemnet(account1);

// Task 3 
function callback(){}

function completed(){
    console.log("Transfer Completed");
}

function rejected(data){
    console.log(data);
}

account1.processInternationalTransfer(10000,callback).then(completed).catch(rejected) 


function auditBankAssets(databaseMap){
    let liquidity=0;
    for(const [Key,Value] of databaseMap){
        if(Value<0){
            console.log(Key);
            continue;
        }
        liquidity+=Value;
    }
}

auditBankAssets(bankDatabase)

function EndofDay(){
    const acc = new Account("acc1",1336665);
    const inv = new InvestmentAccount("inv1",2665656)

    acc.deposit(6462626)
    inv.deposit(5656166)

    Promise.all([generateMonthlyStatemnet(acc),generateMonthlyStatemnet(inv)]).then(()=>{
        console.log("Statements Generated");
    })

    auditBankAssets(bankDatabase)

}


EndofDay()


