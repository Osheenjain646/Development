// closure and lexical scoping (the scope where in which child function can accesss all the features of the parent function) 
// lexical scope of function parent 
// function parent(){
//     let name="JS"
//     function child1(){
//         console.log(name);
//     }
//     child1()
//     function child2(){
//         console.log(name);
//     }
//     child2()
// }


// parent()


// closure 

// function parent(){
//     let name="JS"
//     return function(){
//         console.log(name);
//     }
// }

// let ans=parent()
// ans()


// this keyword 
// console.log(this);  // node will return the {} as of node env 


// let obj={
//     name:"JS",
//     greet:function(){   // also know as standalone function (if we use arrow function it does not have this keyword so it do not check in the parent obj it check in the grandparent if exist give if not so undefined)
//         console.log(this.name);
//     }
// }
// for arrow function 
// let obj1={
//     name:"JS",
//     greet:function(){
//         setTimeout(()=>{
//             console.log(this.name);
//         },1000)
//     }
// }
// obj.greet()


// let lang={
//     name:"JS",
//     greet:function(){
//         console.log(this.name);
//     }
// }
// lang.greet()
// let abb=lang.greet
// abb()  // can't access this keyword as have global check give undefined 

// to recover it 

// use bind 

// let abb1=lang.greet.bind(lang)  // bind the lang to call it easily but not call it immediately 
// abb1()

// if you forgot .bind you can use call as 

// abb.call(lang)   // call greet from the lang obj 

// apply 

// abb.apply(lang)

// but apply and call will call the function immediately 


// function message(city,car){
//     console.log(`Hello this is ${this.name} and city ${city} and car ${car}`);
// }

// let user={
//     name:"Osheen jain",
// }

// const abb=message.bind(user)

// abb("Delhi" , "bugatti")


// to avoid it we use call and apply 

// message.call(user,"hir","hi")

// message.apply(user,["hjb","lccka"])

// classes type 

// map :- store the data in key value pair it is a data structure of js 

// let map = new Map()
// map.set('name' , 'JS')
// map.set('lang' , 'javascript')

// console.log(map.get('name'));
// console.log(map.has('name'));
// console.log(map.delete('lang'));
// console.log(map);
// // have set also but to provide both key and value pair 

// Date class 

// const date = new Date()
// console.log(date.getDate(),
// date.getDay(),
// date.getFullYear(),
// date.getHours(),
// date.getMinutes(),
// date.getMilliseconds(),
// date.getTimezoneOffset(),
// );


// const users = [
//   { name: "Anurag", score: 80 },
//   { name: "Rahul", score: 45 },
//   { name: "Priya", score: 92 }
// ];

// function evaluate(passingMarks, bonus) {
//   return {
//     name: this.name,
//     finalScore: this.score + bonus,
//     status: this.score + bonus >= passingMarks ? "Pass" : "Fail"
//   };
// }

// let arr=[]
// users.forEach((users)=>{
//     arr.push(evaluate.apply(users,[60,10]))
// })
// console.log(arr);

// const items = [
//   { id: 101, name: "Laptop", price: 60000 },
//   { id: 102, name: "Mouse", price: 1500 },
//   { id: 101, name: "Laptop", price: 60000 },
//   { id: 103, name: "Keyboard", price: 3000 },
//   { id: 102, name: "Mouse", price: 1500 }
// ];

// let map = new Map()
// items.forEach((product)=>{
//     if (map.has(product.id)){
//         let item=map.get(product.id)
//         item.quantity+=1
//     }
//     else{
//         map.set(product.id,{name: product.name, price: product.price, quantity: 1});
//     }
// })

// console.log(map);

// CallBack also known as function is a function that can pass as an argument inside a function so it is also known as functional argument 

// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function res(a,b,CallBack){
//     return CallBack(a,b)
// }

// const ans=res(45,56,sub/*functional argument*/);
// console.log(ans);


// Promises 
// It is a class 

// Synchronous execution 
// executes only line by line only and no line will run after it until it gets finished '

// console.log("jii");

// let sum=0;
// for(let i=0; i,5000000000; i++){
//     sum+=i
// }
// console.log(sum);
// console.log("kii");

// asynchronous execution 

// console.log("hello1");
// setTimeout(()=>{                   // it is function made by google that is not provided by node but by v8 
//     // all asynchronous operation go to web apis and do not disturb the other execution and after execution go to callback queue and wait for its execution 
//     console.log("inner hii");
// })

// console.log("hello2");

// file read 
// console.log("hello1");

// const fs=require('fs')
// const ans = fs.readFileSync('./a.txt'/*used to access any file over any folder*/,'utf-8')
// console.log(ans);

// console.log("hello2");

// console.log("hello1");

// const fs=require('fs')
// function CallBack(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// }
// const ans = fs.readFile('./a.txt'/*used to access any file over any folder*/,'utf-8',CallBack)

// console.log("hello2");

// fs.writeFileSync('./a.txt')


// Promises 
// It is a class who tell that a asynchronous function is done or not , resolved or reject 

// function ReadFilePromisified(){
//     const p = new Promise()
//     return p
// }  // normal syntax 


// const fs = require('fs')

// function ReadFilePromisified(file){
//     const p = new Promise(function(resolve,reject){
//         fs.readFile(file,'utf-8',(err,data)=>{
//             if(err){
//                 reject("Give me the file")     // error call catch and go to the notdone function 
//             }else{
//                 resolve(data)     // get data call the then and go to the done function 
//             }
//         })
//     })
//     return p
// }

// function done(data){
//     console.log(data);
// }
// function notdone(err){
//     console.log(err);
// }

// function lastexecution(){
//     console.log("Execution completed");    // finally will always execute at the end of the call of the promisified function 
// }
// ReadFilePromisified('').then(done).catch(notdone).finally(lastexecution)

// setTimeOut

// function timeout1(){
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             resolve("function 1 completed");
//         },2000)
//     })
// }
// function timeout2(){
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             resolve("function 2 completed");
//         },5000)
//     })
// }
// function timeout3(){
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             resolve("function 3 completed");
//         },7000)
//     })
// }
// Promise.all([timeout1(),timeout2(),timeout3()]).then((data)=>{    // used to resolve all the promises at once then then function will call 
//     console.log(data);// give array formatted data 
//     console.log("All task completed");
    
// })


// callback Hell

// function setTimeOutPromisified(time){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//         },time*1000)
//     })
// }
// to print idk1 after 1 sec and idk 2 after 3 sec after idk1 print then after 5 sec of idk2 print then print idk3  

// CallBack Hell 
// setTimeOutPromisified(1).then(()=>{
//     console.log("IDK1");
//     setTimeOutPromisified(3).then(()=>{
//         console.log("IDK2");
//         setTimeOutPromisified(5).then(()=>{
//             console.log("IDK3");
//         })
//     })
// })

// to see good 

// setTimeOutPromisified(1).then(()=>{
//     console.log("IDk1");
//     return setTimeOutPromisified(3)
// }).then(()=>{
//     console.log("IDK2");
//     return setTimeOutPromisified(5)
// }).then(()=>{
//     console.log("IDK3");
// })


// asyncawait that work asynchronously outside and internaly synchronously 
// IMP better way of writing the callback 

// function must be async 
// async function main() {
//     await setTimeOutPromisified(1)
//     console.log("IDK1");
//     await setTimeOutPromisified(3)
//     console.log("IDK2");
//     await setTimeOutPromisified(5)
//     console.log("IDK3");
// }
// main()


// microtask that has priority to execute first and macrotask is executed usually 

// console.log("A");

// setTimeout(()=>{     // macrotask execute after the microtask 
//     console.log("B");
// },1000)

// Promise.resolve().then(()=>{       // microtask execute first 
//     console.log("C");
// }).then(()=>{
//     console.log("D");
// })

// console.log("E");

// Assiignment 






