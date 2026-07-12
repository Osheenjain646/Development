
// Objects

// let users={
//     name:"JavaScript",
//     abb:"Js"
// }
// console.log(users);

// let users1={}

// Addition of value
// users1.name="JavaScript"
// users1.abb="JS"
// console.log(users1);


// Access
// console.log(users1.name);
// console.log(users1['abb']);


// delete


// delete users1.name
// Delete the whole pair

// console.log(users1);


// to protect data from getting changes use Object.freeze
// const lang=Object.freeze({
//     name:"JavaScript",
//     abb:"Js"
// })

// lang.name="TypeScript"

// console.log(lang);

// function in object

// let main={
//     name:"JavaScript",
//     greet:function(){
//         console.log("Hello");
//     }
// }

// main.greet()


// Assignment

// let smartHome={
//     temp:22,
//     isLightOn:true
// }

// insert
// smartHome.securitySystem="Active"

// access

// console.log(`The Current Temperature is ${smartHome['temp']} degrees`);

// update

// smartHome.temp=18

// remove
// delete smartHome.isLightOn

// console.log the result

// console.log(smartHome);

// // assign 2

// Bank Account

// const bankAccount=Object.freeze({
//     accountNumber:98765,
//     balance:{
//         amount:5000
//     }
// })

// attempt

// bankAccount['balance']=10000

// addition

// bankAccount.currency="USD"

// verification

// console.log(bankAccount);

// // balance will not change as freeze is used


// shallow freeze
// It is used if you create a object in the freeze object
// then you can modify value in that object

// bankAccount.balance.amount=100000

// console.log(bankAccount);



// function in js

// there are 4 types of function

// functional expression
// functional equation
// IIFE Immediately Invoked Functional Equation
// Arrow Function

// Functional Expression
// we can call it anywhere in the function after and before declaration

// main()
// function main(){
//     console.log("Js");
// }

// main()

// Functional Equation

// It is Assigned to someone and can't be call before declaration

// let main1=function(){
//     console.log("JavaScript");
// }

// main1()


// IIFE
// used to protect from pollution when we create many function from other
// used for basically database
// as a program is run it will run first

// ()()

// (function(){
//     console.log("Db Connected");
// })();  // use ; to decide who is invoked first
// (function(){
//     console.log("redis Connected");
// })()


// Arrow function

// let greet = ()=>{
//     console.log("Hello");
// }
// greet()

// if there is only one line in this type of function we don't even need {}


// let sum=(a,b)=>a+b

// console.log(sum(1,2));


// default parameter

// let sum=(a=50,b=60)=>a+b
// console.log(sum());


// Assignment 1

// function toCelsius(f){
//     let celsius = (f-32)*(5/9)
//     return celsius
// }
// let ans=toCelsius(45)
// console.log(ans);


// let isFreezing = (temp)=>{
//     if(temp<=0){
//         return true
//     }
//     return false
// }

// function test(){
//     let temp1=toCelsius(32)
//     console.log(isFreezing(temp1));
// }
// test()


// Assignment 2

// (()=>{
//     securityCode=5
//     console.log(`System Initialized. Security code ${securityCode} generated.`);
// })()

// console.log(securityCode);

// we are able to access as we do not write it as var let or const
// it is getting globally declared



// prototype
// it is a special type of object that store methods and features

// How to make your own prototype
// function can be used to create a prototype

// function main(){

// }
// create a prototype
// main.prototype.Greet=function(){
//     console.log("Hello");
// }

// Delete a prototype

// delete main.prototype.Greet

// function main1(){
//     let obj=new main()
//     obj.Greet()
// }
// main1()


// function main(){
// }

// main.prototype.Random={
//     randomNumberGenerator:function(){
//         console.log(Math.random());
//     }
// }

// function generateRandomNumber(){
//     const ans=new main()
//     ans.Random.randomNumberGenerator()
// }

// generateRandomNumber()


// Rest Operator and Spread Operator

// rest operator take first and put in a and put rest in b
// function main(a,...b){
//     console.log(a);  // give first value
//     console.log(b);  // give array of rest value
// }
// main(1,2,3,4,5,6)


// spread operator

// let arr1=[1,2,3,4,5]
// let arr2=['a','b']
// let arr3=[...arr1,...arr2]
// console.log(arr3);  // this will put all the values of arr1 first then of arr2

// can be done in object also
// if i write same key then it will be overwritten
// let obj1={
//     name:"JS"
// }

// let obj2={
//     name1:"TS"
// }

// let obj3={...obj1,...obj2}
// console.log(obj3);

// Destructuring
// basically it is used to convert complex structured data into structured format


// let arr =[{name:"JavaScript"},{name:"TypeScript"}]

// let /*from which to destructure*/[/*any variable in which the data is get fetched or stored*/a,b,c] = arr /*name of from which to destructure*/

// console.log(a);
// console.log(b);
// console.log(c);

// same for object but provide key in the [] or {} to get value not random variable

