"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

✅✅✅1. Literal Types
A literal type allows a variable to have one specific value rather than any value of a general type.

➡️String literal
let direction: "left" | "right" = "left";
direction = "right"; // ❌ Error

Here, direction can only contain exactly "left" or "right".
let direction =variable name
"left" | "right" =allowed values
= "left" =initial value
     

➡️➡️Compare:

let direction: string = "left";

Here, any string is allowed:
direction = "right"; // ✅
direction = "up";    // ✅
direction = "hello"; // ✅

But:
let direction: "left" | "right" = "left";

Only these two values are allowed:
"left"
"right"




➡️Number literal
let dice: 1 | 2 | 3 | 4 | 5 | 6 = 3;
dice = 6;  // ✅
dice = 10; // ❌ Error


➡️Boolean literal
let isAdmin: true = true;
isAdmin = false; // ❌ Error


➡️Why use literal types?
They are useful when a value should only be one of a fixed set of choices.

let status: "success" | "error" | "loading";
status = "success"; // ✅
status = "error";   // ✅
status = "pending"; // ❌




✅✅✅2. Optional Properties
An optional property is a property that may or may not exist in an object.
We use ? after the property name.
⚠️Remember: ? means the property can be omitted; it does not mean the property can contain any type


➡️Example
type User = {
    name: string;
    age?: number;
};


➡️Now both objects are valid:
const user1: User = {
    name: "Raju",
    age: 25
};

const user2: User = {
    name: "Rahim"
};

Because:
age?: number
means:
age → number OR undefined

here, name is required, while age is optional.



➡️Without ?
type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Raju"
};
❌ Error because age is required.




*/ 
//# sourceMappingURL=c21-5-Literals-and-optional-properties.js.map