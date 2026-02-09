// varaiable declaration 

// //string 
// let name:string = "JS"
// console.log(name);

// // boolean 
// let isActive:boolean=true;

// console.log(isActive);

// // Number 
// let n:number=45;

// console.log(n);

// // Any 
// // not recommanded to use as it will never consider the type of data 
// let something:any = true;

// console.log(something);

// // function Declaration 

// // functional equation 
// const sum = (a:number,b:number):number=>{
//     return a+b;
// }

// const ans=sum(45,55);

// console.log(ans);

// // functional expression 
// function sub(a:number,b:number):number{
//     return a-b;
// }

// const ans1 = sub(55,45)

// console.log(ans1);

// let song:(string|number)="shhsih"  // will accept the both type data // union using 

// // regex expression 

// let reg:RegExp = /\d/
// console.log(typeof(reg));

// ////////////////////////////////////////////////////////

// // Arrays 

// let stringarr=["osheen","anurag","manoj"] // will have only string type data 
// let stringnumberarr=["guitar",45698] // have number and string 
// let mixeddataarr=["one",true,45222] // have mixed all types 

// stringarr.push("ghdj") // can push only the type of data entered 
// stringnumberarr=stringarr // can push stingarr as stringnumberarr can have bith number and string value both 

// mixeddataarr.push("hcdjbjc")
// mixeddataarr.push(5545);
// mixeddataarr.push(true)

// let arr =  [{name:"TS"} , {user:"TS"}]
// // arr=mixeddataarr // error 

// console.log(stringarr);
// console.log(stringnumberarr);
// console.log(mixeddataarr);


// // Array Declaration 

// let value:string[] = [] 
// value.push("A")
// value.push("B")
// value.push("C")

// // all other operation of array as in js as shift unshift splice etc 

// console.log(value);

// console.log(value.includes('A'));  // check if exits then true 

// let name1 = "Someone" as string; 
// console.log(name.startsWith('S'));// bool 

// // three ways to define the type of data 
// let name2:string = "Something"
// let name3 = "Something" as string
// let name4 = <string>"Something"

// // Tuples 

// let namearr:(string|number|boolean)[] = ["JS",5454,true] // can have all these type of value 

// let namearr1:[string,number,boolean] = ["TS",4556,true] // defining the type of each index in the tuple have to define the type of each for all 

// namearr = namearr1 // no error 
// // namearr1=namearr// give error as it does not trust coder that it will not change the value of the element in the tuple 

// ///////////////////////////////////////////////////////////////////////

// // Objects 

// let obj = {
//     name:"JS"  // infer the type as it typed 
// }

// // obj.name=true // error 

// // obj declaration type 

// let obj1 ={}
// let obj2=[] // array is an object 


// Interface and Types 

// Interface 

// interface IUser{
//     name:string
//     age:number
//     email:string
// }

// type IUser1={
//     name:string
//     age:number
//     email:string
// }

// let user:IUser1 ={
//     name:"JS",
//     age:56,
//     email:"asdasd@gmail.com"
// }
// have same work 

// Assignment 

// interface User{
//     name?:string
//     phoneNumber:bigint
//     age:number
//     hobbies:string[]
//     isActive?:boolean  // optinal property 
// }

// let user1:User={
//     name: "TS",
//     phoneNumber: 46661326564n,
//     age: 45,
//     hobbies: ["dkhjajdk","nnnkan","dsdahdiu"]
// }

// function greet(user1:User){
//     if(!user1.name  || user1.name===undefined){   // same 
//         return "Please give the name";
//     }
//     else{
//         return `Hello ${user1.name}`;
//     }
// }

// console.log(greet(user1));


// Never 












