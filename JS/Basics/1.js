// condition ? "true" : "false"

// let age=45;
// let voted=age>18?"yes":"no"
// console.log(voted)

// let temp=25
// let ans= temp>25?"Hot Day" : (15<=temp && temp<=25 ? "Moderate" : "Cold Day")
// console.log(ans);
// use if-else for cleaner way 

// Nullish coelesence operator 
// we use it to get protected fromgetting any falsy value
// eg:-

// function DB(){
//     console.log("User Data");
// }

// let User = "User data Not Found"/* Default value provided */??DB()  // Original data is fetched 
// // if data is not fetched or it null or undefined or falsy value then default value will get assigned to the variable 

// console.log(User);

// primitive and Non primitive 
// primitive 
// number 
// let a=45;
// let b=45.23
//string
// let a='hd'
// let b="cbujb"
//BigInt
// let a = 6464646652626364665265; // this give it in power of exponential 
//then use 
// let a = 26452645126126552656416496n //this will give value 
// boolean 
// true and false
// null and undefined 
// let a;
// console.log(a);// undefined // falsy 
// let a=null //truthy 
// console.log(a);
// console.log(typeof null);
// console.log(typeof undefined);

// let name=undefined??null // as null is truthy
// console.log(name);

// Symbol 
// const s = Symbol('hello');
// console.log(s);

// non primitive Data Type 
// array , object, function 

// let a =45 
// let b=a
// console.log(a);
// console.log(b);
// b=89
// console.log(a);
// console.log(b);
// this will copy the value only not reference of a 

// but in non primitive it will copy reference too 

// let a={
//     name:"Javascript",
//     abb:"JS"
// }
// // console.log(a);

// let b=a
// // console.log(b);

// b.name="Typescript"
// console.log(a);
// console.log(b);

// Array and List 
//array store homogenuous data only but list store heterogenuous
// there is a list in js no array 

// let arr = ["Javascript",[1,2,3],true]
// // console.log(arr);
// let brr = arr
// // console.log(brr);
// let brr = arr
// brr[0]="Something"
// console.log(arr);
// console.log(brr);

// let arr1=new Array(10)
// console.log(arr1);

// in built function 
// push pop unshift shift splice slice 

// two types of declaration 
// let arr1=[] 
// let arr2=new Array(10)

// // push 
// // insert element in the last of the array 
// arr2.push(10)
// arr2.push(20)
// arr2.push(30)
// arr2.push(40)
// console.log(arr2);

// //pop 
// // this will pop out the element from the end of the array
// arr2.pop()
// console.log(arr2);

// // unshift 
// arr2.unshift(10) // this will shift all the elements and the and insert in the first position in the element 
// console.log(arr2);

// //shift 
// arr2.shift()  // this will delete or pop the element from the start of the array 
// console.log(arr2);


// // slice 
// let arr3=[1,2,3,4,5,6,7,8,9]
// let ans=arr3.slice(0,5)  // start index and no of elements  required 
// // this will take out elements from the orignal array and create a new array of it without deleting from the original 
// console.log(ans);
// console.log(arr3);


// // splice 
// let ans1=arr3.splice(0,5)  // this will copy the first 5 elements from 0 and manipulate the original array 
// console.log(ans1);
// console.log(arr3);





