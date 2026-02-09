"use strict";
// varaiable declaration 
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    // name: "TS",
    phoneNumber: 46661326564n,
    age: 45,
    hobbies: ["dkhjajdk", "nnnkan", "dsdahdiu"]
};
function greet(user1) {
    if (!user1.name) {
        return "Please give the name";
    }
    else {
        return `Hello ${user1.name}`;
    }
}
console.log(greet(user1));
//# sourceMappingURL=main.js.map