// function setTimeOut(callback,time){
//     let start = Date.now();
//     while(Date.now()-start<time){

//     }
//     callback()
// }

// function greet(){
//     console.log("Hi Sync setTimeout is called");
// }

// setTimeOut(greet , 2000);

// console.log("After callback");


// function greet(){
//     console.log(this.name,this.age,this.gender);
// }

// let user ={
//     name:"Osheen",
//     age:20,
//     gender:"Male"
// }

// greet.call(user)

function main(){

}

main.prototype.sum=function(...b){
    return b.reduce((number,initial)=>number+initial,0)
}

let ans = new main()
let ans1 = ans.sum(1,2,3,4,5,6,7,8,9)
console.log(ans1);


