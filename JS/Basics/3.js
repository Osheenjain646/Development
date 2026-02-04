// loops

// all other loops as while do while for for each 

// forof loop for array 
// forin loop for object


// for of loop => array

// let arr=[1,2,3,4,5]
// for(let i of arr){
//     console.log(i);
// }

// // for in loop => object 

// let lang={
//     name:"javascript",
//     abb:"js"
// }

// for (let key in lang){
//     console.log(key , lang[key]);
// }


// // using the object and iterating on object 

// const a=Object.keys(lang)   // get the keys of the objects 
// console.log(a);

// const b = Object.values(lang)  // get keys 
// const c = Object.entries(lang)  // get items or pairs 
// console.log(b);
// console.log(c);


// map filter reduce every find foreach 
// in built function loops 

// map 
// used to map all element with some functinality and return the result in the form of array 

// factory function is a function that do some operation 

// function machine(data){
//     return data*2
// }


// let arr=[1,2,3,4,5]

// const ans = arr .map((i)=>i*2)
// console.log(ans);

// foEach 
// does not return anything means if accessed give undefined 

// let arr =[1,2,3,4,5]

// arr.forEach(function(data){
//     console.log(data*5);
// })

// Filter 

// let arr =[1,2,3,4,5]

// function even(data){
//     return data%2==0
// }

// const c = arr.filter(even)
// console.log(c);


// let freinds=["sam","sachin","ramesh"]
// let f = freinds.filter(function(data){
//     return data.startsWith('s')===true
// })

// console.log(f);


// every 
// cheeck for evry value is equal to something or of type specific 

// let arr = ["a","b",5]
// const ans = arr.every(function(data){
//     return typeof data ==="string"
// })

// console.log(ans);

// find
// used to find a particular data 

// let arr = [1,2,3,4,5]

// let element = arr.find(function(data){
//     return data===5    // if not find return undefined 
// })

// console.log(element);

// reduce 

// let arr = [1,2,3,4,5]

// const sum = arr.reduce(function(prevsum/*have previous sum*/,iterator /*have current value*/){
//     return prevsum+iterator//curr is an iterator 
// },0/*initial value*/)
// // it will go until the iterator cross the last element 
// // return the prevsum as result 


// // Assignment 1 
// const products = [
//   { name: 'Apple', price: 1.5, category: 'Fruit' },
//   { name: 'Onion', price: 0.8, category: 'Vegetable' },
//   { name: 'Steak', price: 12.0, category: 'Meat' },
//   { name: 'Banana', price: 1.2, category: 'Fruit' },
//   { name: 'Carrot', price: 0.5, category: 'Vegetable' }
// ];

// // filter 
// let fruits = products.filter((data)=>{
//     return data.category==='Fruit'
// })
// console.log(fruits);


// let names = products.map((data)=>{
//     return data.name
// })
// console.log(names);

// let total_cost= products.reduce((prevsum,products)=>{
//     return prevsum+products.price
// },0)

// console.log(total_cost);



// const users = [
//   { id: 1, name: 'Alice', age: 22, hasID: true },
//   { id: 2, name: 'Bob', age: 17, hasID: true },
//   { id: 3, name: 'Charlie', age: 25, hasID: false },
//   { id: 4, name: 'David', age: 30, hasID: true }
// ];

// // find 
// const user = users.find((data)=>{
//     return data.hasID===false
// })

// console.log(user);

// // every 

// const due_to_bob=users.every((data)=>{
//     return data.age>18
// })

// console.log(due_to_bob);

// // forEach 

// users.forEach((users)=>{
//     console.log(`Checking access for ${users.name}.`);  
// })

// const user1 = {id:1,name:'Alice',age:22,hasId:true}

// Object.entries(user1).forEach(([key,value])=>{
//     console.log(key , value);
// })


// Classes in the js 

// class Car{
//     constructor(name,brand){
//         this.name=name
//         this.brand=brand
//     }

//     message(){
//         return `This is my ${this.name}`;
        
//     }
// }

// const car = new Car("Bugatti","chiron")

// console.log(car.name);
// console.log(car.brand);

// console.log(car.message());


// keywords 
// static 

// class Car{
//     static name="bugatti"  
//     // using the static you can access the method and property 
//     // using the class name directly without creating the object 
//     constructor(name,brand){
//         this.name=name
//         this.brand=brand
//     }

//     static message(){
//         return `This is my ${this.name}`;
        
//     }
// }


// console.log(Car.name);
// console.log(Car.message());


// get or set 

// class User{
//     constructor(name,age){
//         this.age=age
//         this.name=name
//     }

//     get details(){    // this is used to get the data 
//         console.log(`The user Data is ${this.name} ${this.age}`);
//         // return `The user Data is ${this.name} ${this.age}`;
        
//     }

//     set set_age(age){
//         if(age>0){
//             this.age=age
//         }
//     }
// }


// const user1=new User("Alice",45)

// // get the data 
// // console.log(user1.details);// for return 

// user1.details  // without return 

// // set 

// user1.age=48

// user1.details

// Assignment 1 

// class BankAccount{
//     balance = 0
//     constructor(accountHolder,balance){
//         this.__accountHolder=accountHolder
//         this._balance=balance
//     }

//     set balance(_balance){
//         if(_balance<0){
//             console.log(`Transaction denied:Insufficient funds or Invalid amount`);
//         }else{
//             this._balance=_balance
//         }
//     }

//     get formattedBalancer(){
//         return `$${this._balance}`
//     }

//     withdraw (amount){
//         if(this._balance<0){
//             console.log(`Can't withdraw`);
            
//         }
//         this._balance-=amount
//         console.log("amount deducted");
//     }
// }

// const user=new BankAccount('Anurag',99999999999999)
// console.log(user.formattedBalancer);

// Assignment 2 

// class Book{
//     static totalBooks=0
//     constructor(title,author,price){
//         this.title=title
//         this.author=author
//         this.price=price
//         Book.totalBooks+=1  // increase the count number of instances created of the Book class 
//     }

//     static comparePrice(bookA,bookB){
//         return bookA.price>bookB.price ? bookA.title : bookB.title
//     }
// }


// const bookA = new Book("idk Title1" , "idk author1" , 50000)
// const bookB = new Book("idk title2" , "idk author2" , 233)

// console.log(Book.comparePrice(bookA,bookB));
// console.log(bookB.price);

// *****************************
// to make a keyword private in js we use __(can be accessed) or # (can't be accessed)
// to make protected _ 
// must learn it 











