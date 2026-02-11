"use strict";
// varaiable declaration 
Object.defineProperty(exports, "__esModule", { value: true });
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
// Difference betweeen interface and types 
// type use to define the type of anything like function too 
// interface use to define the type mostly objects classes 
// type alias 
// means you can give any type to anyone 
// type user = string|number|boolean
// let user1:user // it can have all three type of value 
// type assertion 
// type user ="hello" 
// let user1:user="hello"  // this mean that it can have only hello in it 
// to make a and define a function in the interface 
// interface user{
//     name:string
//     details(a:number/*type of parameter*/):number // return type of function 
//     deta:()=>string// return type of function another way 
// }
// Union 
// type A ={name:string}
// type B ={age:string}
// type C = A|B    // this will take may be the property of A or B or Both using the union 
// let obj={
//     name:"bjdcbjsb",
//     age:"bdhvbhjc"
// }
// function main (obj:C){
//     // console.log(obj.name);  // typescript will get confuse that from which it will take the property from A or B or Both 
//     // to protect from getting confuse 
//     // using the type narrowing here 
//     if("name" in obj){  // "in" is checking the object that it contain in it 
//         console.log(obj.name);
//     }
//     if("age" in obj){
//         console.log(obj.age);
//     }
// }
//  main(obj)
// optional parameter 
// interface user{
//     name:string
//     age:number
//     phone?:number
// }
// let obj:user={
//     name:"bjdbjdj",
//     age:55,
//     phone:265656  // can define a phone or not it is optional 
// }
// optional parameter in the functions 
// function sum(a:number,b?:number):number{
//     if(/*check if optional is given or not */ b==undefined){
//         return a
//     }else{
//         // return the work that has to be done 
//         return a+b
//     }
// }
// let a = sum(2);
// console.log(a);   // give the a only 
// let c = sum(5,2);
// console.log(c);  // give the sum 
// spread oprator in ts 
// function sum(a:number,b:number,...c:number[]){
//     // console.log(a);
//     // console.log(b);
//     return a+b+ c.reduce((sum,def)=>{
//         return sum+def
//     },0)
// }
// let s =sum(1,2,2,1)
// console.log(s);
// classes and Objets in TS 
// interface user1{
//     name:string
//     age:number
// }
// class user implements user1{   // we are already defining the type of the method in the interface 
//     name: string
//     age: number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     details(){
//         return `This person is ${this.name} and it's age is ${this.age}`
//     }
//     sum(a:number,b:number):number{
//         return a+b
//     }
// }
// let user2=new user("osheen",45)
// console.log(user2.details());
// let sum1 = user2.sum(4,5);
// console.log(sum1);
// classes 
// encapsulation : here we are combining the different methods and variables in one class by using the private protected and public keywords 
// abstraction : it will show what is going on not how it is used before the class keyword as it has nothin in the class it is implemented in other class or method 
// class coder{   // we have to give access modifier to all 
//     // public name:string
//     // private age:number
//     // protected lang:string[]  // optional way 
//     constructor(readonly /*means i can only read it can't modify it*/name:string,private age:number,protected lang:string[]){
//         this.name=name
//         this.age=age
//         this.lang=[]
//     }
//     public getName(){
//         console.log(this.name);
//     }
// }
// const user = new coder("osheen",20,["hello" , "typescript"])
// user.getName()
// // inheritence in TS 
// class webdev extends coder{
//     constructor(name:string,age:number,lang:string[],public laptop="MacBook Max"){
//         super(name,age,lang)  // using the parent class to help with the datatype and the access modifier 
//         this.laptop=laptop
//     }
//     public details(){
//         console.log(this.laptop);
//     }
// }
// const web = new webdev("osheen",45,["hdshidsa"],"Victus 16 Ultra God")  // if laptop is provided then take it otherwise go for default 
// web.details()
// // Abstraction in TS 
// abstract class  software {
//     // use abstract keyword to tell that it will not have any work in it I will use it later if required 
//     // this is used for something 
//     abstract getDetails():string // return type of abstract function
//     setting(){
//         console.log("User Setting");
//     }
// }
// class ABC extends software{
//     constructor(){
//         super()
//     }
//     getDetails(): string {
//         return `This is Data`
//     }
// }
// const user2 = new ABC()
// user2.setting()
// let ans = user2.getDetails()
// console.log(ans);
// // Interface 
// interface Musician{
//     name:string
//     // plays:(action:string , instrument:string)=>void
//     plays(action:string , instrument:string):string
// }
// class Singer implements Musician{
//     name: string;
//     constructor(name:string){
//         this.name=name
//     }
//     plays(action: string, instrument: string): string {
//         return (`${this.name} ${action} the ${instrument}`)
//     }
// }
// const singer1 = new Singer("Bob")
// const ans1 = singer1.plays("Strums", "Guitar")
// console.log(ans1);
// // Static keyword 
// class User{
//     static count:number=0;   // use static so no one can use it by creating the object of it 
//     static getCount():number{   // like count same 
//         return User.count
//     }
//     constructor(public name:string){
//         this.name=name
//         User.count=++User.count
//     }
// }
// const user3 = new User("A")
// const user4 = new User("B")
// const user5 = new User("C")
// const user6 = new User("D")
// console.log(User.getCount());   // using the User as we can't make them for the object 
// I want to create a band class which will have getter function to return the number of the people in the band and setter used for setting the data that 
// if it has array then it is array and all values must be string 
class Bands {
    bandMembers;
    constructor() {
        this.bandMembers = [];
    }
    get ShowData() {
        return this.bandMembers;
    }
    set SetData(value) {
        if (Array.isArray(value) && value.every((data) => typeof (data) === 'string')) {
            this.bandMembers = value;
        }
        else {
            throw new Error("This Data is not valid");
        }
    }
}
const ans3 = new Bands();
ans3.SetData = ["Sam", "osheen", "manoj"];
console.log(ans3.ShowData);
ans3.SetData = [...ans3.ShowData, "New"];
console.log(ans3.ShowData);
//# sourceMappingURL=main.js.map