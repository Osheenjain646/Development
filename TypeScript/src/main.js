"use strict";
// varaiable declaration 
Object.defineProperty(exports, "__esModule", { value: true });
//string 
let name = "JS";
console.log(name);
// boolean 
let isActive = true;
console.log(isActive);
// Number 
let n = 45;
console.log(n);
// Any 
// not recommanded to use as it will never consider the type of data 
let something = true;
console.log(something);
// function Declaration 
// functional equation 
const sum = (a, b) => {
    return a + b;
};
const ans = sum(45, 55);
console.log(ans);
// functional expression 
function sub(a, b) {
    return a - b;
}
const ans1 = sub(55, 45);
console.log(ans1);
let song = "shhsih"; // will accept the both type data
// regex expression 
let reg = /\d/;
console.log(typeof (reg));
//# sourceMappingURL=main.js.map