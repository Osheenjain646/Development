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
// stringnumberarr=stringarr // can push stingarr as stringnumberarr can have both number and string value both 

// mixeddataarr.push("hcdjbjc")
// mixeddataarr.push(5545);
// mixeddataarr.push(true)

// let arr =  [{name:"TS"} , {user:"TS"}]
// // arr=mixeddataarr // error as arr can only have object type data 

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

// class Bands{
//     private bandMembers:string[]
//     constructor(){
//         this.bandMembers=[]
//     }

//     public get ShowData():string[]{
//         return this.bandMembers
//     }

//     public set SetData(value:string[]){
//         if(Array.isArray(value) && value.every((data)=>typeof(data)==='string')){
//             this.bandMembers=value
//         }else{
//             throw new Error("This Data is not valid")
//         }
//     }
// }

// const ans3=new Bands()
// ans3.SetData=["Sam",  "osheen" , "manoj"]
// console.log(ans3.ShowData);

// ans3.SetData=[...ans3.ShowData,"New"]
// console.log(ans3.ShowData);



// Index Signatures in TS 


// providing type to the key and value of the object 

// interface User{
//     readonly [key:string]:number  // readonly will not allow to change the value of the key once it is assigned 
//     age?:number
//     pizza?:number
// }

// const user1:User={
//     name:45,
//     age:78  // i can change the value of age but not name as it is read only due to the readonly defined for the keys not defined in the interface 
// }

// user1.age=55
// user1.pizza=45
// user1.name=45  // error as it is readonly 

// type Incomess = "salary" |"bonus"| "sidehustle"

// // type 1 
// interface Incomesss{
//     [key:string]:number|string
// }  // in this we can have only one type of value for the key but we can have different type of value for the key 


// type 2
// Record is a utility type in TypeScript that allows you to create a new type by specifying the keys and their corresponding value types. It is often used to define objects with specific key-value pairs.
// Record<type of key, type of value>

// type Inc = Record<Incomess,number | string> 

// let Incc={
//     salary:254526545454,
//     bonus:265654512645,
//     sidehustle:4564216456215461,
//     "csknk":46545,
//     "nxsxknxkasn":"nxsxkn"
// }

// // Extracting the Extracting the keys type from the interface

// for(const key in Incc){
//     console.log(Incc[key as keyof Inc]);  // here we are using the keyof to tell that it will take the key from the Inc type and then we are using the type assertion to tell that it will be of type key of Inc 
// }

// // Extracting the keys type from object
// for(const key in Incc){
//     console.log(Incc[key as keyof typeof Incc]); // here we are using the typeof to tell that it will take the type of the Incc object 
//     // and keyof to take out the keys of the object 
// }

// // keyof is used to fetch the type of the key 
// // typeof is used to fetch the type of the object 


//Generics in TS 
// Generics are a powerful feature in TypeScript that provide 
// a feature that you can provide them any type of data and it will infer it and give you the output according to that type of data

// generic function
// const func = <T>(arg:T):T=>arg   T is a type of InterFace here 


// interface BoolCheck<T>{
//     arg:T
//     isObject:boolean
// }

// const isObject = <T>(arg:T)=>{
//     if(typeof arg === "object" && !Array.isArray(arg) && arg !== null){
//         return {arg , isObject:true}
//     }
//     return {arg , isObject:false}
// }

// console.log(
//     isObject({name:"JS"}),
//     isObject([45]),
//     isObject(true),
//     isObject(null)
// );


// extending the generic type 

// let user={
//     id:1,
//     name:"something"
// }

// interface HasID{
//     id:number
// }

// // interface HasID1{
// //     name:string
// // }

// // interface C extends HasID,HasID1{

// // }

// const isUser = <T extends HasID>(arg:T)=>{
//     // it means that it must have a id property in it of number type 
// }

// interface Hasname{
//     name:string
// }

// const user1 = [{name:"Osheen"} , {name:"Anurag"} , {name:"Manoj"} , {name:"Chitranshi"}]

// const isUser1= <T extends Hasname , k extends keyof T> (arg : T[] , key : k):T[k][]=>{
//     return arg.map((user)=>user[key])
// }

// let ans = isUser1(user1 , "name");
// console.log(ans);


// Generic Classes

// class User<T,k>{
//     name:T
//     constructor(name:T,date:k){
//         this.name=name
//     }
//     get user():T{
//         return this.name
//     }
// }

// const user = new User<string,number>("JS",45);
// console.log(user.user);


// Peartial Required and Readonly Record in TS 

// Partial : it will make all the properties of the type optional 

// 
// interface User1{
//     name:string
//     age?:number
// }

// type PartialUser = Partial<User1>  // all the properties of the User1 type will be optional in the PartialUser type
// type RequiredUser = Required<PartialUser> // all the properties of the PartialUser type will be required in the RequiredUser type
// type ReadonlyUser = Readonly<User1> // all the properties of the User1 type will be readonly in the ReadonlyUser type and we can't change the value of the properties once it is assigned
// type RecordUser = Record<string,number> // it will create a type with the keys of string type and values of number type

// // This will allow us to create a user with only name property and age is optional
// const user1:PartialUser={
//     name:"JS"
// }

// // This will not allow us to create a user without name property and age is required
// const uaer2:RequiredUser={
//     name:"JS",
//     age:45
// }

// // This will not allow us to change the value of the property once it is assigned
// const user3:ReadonlyUser={
//     name:"JS",
//     age:45
// }

// user3.name="TS" // error as it is readonly

// interface User1{
//     name:string,
//     age:number
// }

// type UserRecord = Record<string,User1> // it will create a type with the key as string and value as User1 type 

// const user:UserRecord={
//     "user1":{
//         name:"JS",
//         age:45
//     }
// }

// console.log(user["user1"]);



// pick omit Exclude Extract in TS

// pick : it will allow us to pick the properties from the type and create a new type with those properties 
// omit : it will allow us to omit the properties from the type and create a new type without those properties
// Exclude : it will allow us to exclude the properties from the union type and create a new type without those properties 
// Extract : it will allow us to extract the properties from the union type and create a new type with those properties


// interface User1{
//     name:string,
//     age:number,
//     email:string,
//     password:string
// }

// // Pick and Omit perform via object and interface 
// type Login = Pick<User1/*Interface from where to pick*/ , "email" | "password"/*properties to pick*/> // it will create a new type with only email and password properties from the User1 interface
// type SignUp = Omit<User1 , "email" | "password"> // it will create a new type with all the properties except email and password properties from the User1 interface

// // Exclude and Extract perform via union tyes 
// type status = "active" | "inactive" | "pending"
// type ExcludeStatus = Exclude<status , "Active"> // it will create a new type with all the properties except "Active" from the status type
// type ExtractStatus = Extract<status , "active" | "pending"> // it will create a new type with only "active" and "pending" properties from the status type


// function main(name:string , age:number){
//     return{
//         name:"hndcjn",
//         age:45,
//         isactive:true
//     }
// }

// type ReturnTypeOfMain = ReturnType<typeof main> // it will give the return type of the main function 
// type ParametersOfMain = Parameters<typeof main> // it will give the parameters type of the main function 

// async function main1():Promise<{name:string}>{
//     return {name:"TS"}
// }

// type p = ReturnType<typeof main1> // it will tell the what can promise return in the future means a wrpper of the promise having the original return type of the function
// type AW = Awaited<ReturnType<typeof main1>> // it will tell the original return type of the function without the promise wrapper 

// function getFirstElement<T>(arr:T[]):T{
//     return arr[0]!    // it can't be undefined so we are using the non null assertion operator to tell that it will not be undefined or null 
//     return arr[0]!!  // bang operator is used to tell that convert all the falsy value to flase and all the truthy value to true and then it will return the value of the first element of the array
// }


// Assignment 1

// interface User{
//     id:number,
//     name:string,
//     eamil?:string
//     role:role
//     isAtive:boolean
// }

// // type Assertion 
// type role = "admin" | "user" | "guest"

// function createUser(user:User):string{
//     if(typeof user.eamil===undefined){
//         return `Email missing`
//     }
//     else{
//         return `User Created`
//     }
// }

// const user1:User={
//     id:1,
//     name:"Osheen",
//     eamil:"bdcsdjbdsjbdcs@gmail.com",
//     role:"admin",
//     isAtive:true
// }

// function getUserRoleMessage<T extends role>(role:T):string{
//     if(role==="admin"){
//         return "Full access"
//     }else if(role==="user"){
//         return "Limited access"
//     }else{
//         return "Read Only"
//     }
// }


// console.log(createUser(user1));
// console.log(getUserRoleMessage(user1.role));


// Assignment 2 

// function swapValues<T,U>(a:T,b:U):[U,T]{
//     return [b,a]
// }

// function getFirstElement<T>(arr:T[]):T{
//     return arr[0]!    // it can't be undefined 
// }


// Assignment 3
//  class Employee{
//     public name
//     private salary
//     protected department
//     constructor(name:string,salary:number,department:string){
//         this.name=name
//         this.salary=salary
//         this.department=department
//     }

//     get getSalary():number{
//         return this.salary
//     }

//     get getDepartment():string{
//         return this.department
//     }
// }

// class Manager extends Employee{
//     constructor(name:string,salary:number,department:string,public teamsize:number){
//         super(name,salary,department)
//         this.teamsize=teamsize
//     }

//     get getManagerDetails():string{
//         return `Manager Details: 
//         Manager Name: ${this.name}
//         Department: ${this.getDepartment}
//         Salary: ${this.getSalary}
//         Team Size: ${this.teamsize}`
//     }
// }

// const manager1 = new Manager("Osheen", 50000, "IT", 10)
// console.log(manager1.getManagerDetails);

// const employee1 = new Employee("Anurag", 30000, "HR")
// console.log(employee1.name); 
// console.log(employee1.getSalary);
// console.log(employee1.getDepartment);

















