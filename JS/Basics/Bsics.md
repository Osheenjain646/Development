🟢 1️⃣ What is JavaScript?
🔹 Definition
JavaScript ek high-level, interpreted, dynamically typed, multi-paradigm programming language hai jo:

Browser me run hoti hai

Web pages ko interactive banati hai

Server (Node.js) par bhi chal sakti hai

🔹 JavaScript kya karta hai?
Button click pe action

Form validation

API calls

Animations

Dynamic UI update

🟢 2️⃣ JavaScript Engine (V8)
🔹 JS Engine kya hota hai?
JS engine wo software hota hai jo JavaScript code ko machine code me convert karta hai.

Browser	Engine
Chrome	V8
Firefox	SpiderMonkey
Safari	JavaScriptCore
🔹 V8 ka kaam
JS code leta hai

Compile karta hai

Fast execution deta hai

Node.js bhi V8 engine use karta hai

🟢 3️⃣ How JavaScript Runs in Browser
🔁 Execution Flow
JS file load hoti hai

Global Execution Context banta hai

Memory allocation phase

Code execution phase

Call Stack me functions push/pop hote hain

(index1.js)

🟢 4️⃣ var, let, const (🔥 VERY IMPORTANT)
| Feature    | var             | let       | const     |
| ---------- | --------------- | --------- | --------- |
| Scope      | Function        | Block     | Block     |
| Hoisting   | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Re-declare | ✅               | ❌         | ❌         |
| Re-assign  | ✅               | ✅         | ❌         |

(index2,js)

🟢 5️⃣ Data Types
🔹 Primitive (Immutable)
number

string

boolean

null

undefined

symbol(
    In JavaScript, a Symbol is a primitive data type used to create unique identifiers
    Each symbol created is unique, even if they look the same.
    The description is just a label and does not affect uniqueness (const id = symbol("id))
    🧩 Using Symbol as an object key , it is used to avoid key colliosons.
    symbol.for() reuses symbols
    stored in the global symbol registry
    try to use const for it to avoid changing in the identification
)

bigint

🔹 Non-Primitive (Mutable)
object

array

function

(index3.js)

