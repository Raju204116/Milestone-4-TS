"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

✅✅✅Special Types in TypeScript
The important special types are:
    null
    undefined
    any
    unknown
    never



✅✅1. null
null represents an intentional absence of a value.
let data: null = null;

Example:
let selectedUser: string | null = null;
selectedUser = "Raju"; // ✅
selectedUser = null;  // ✅

📌Here, selectedUser can contain either a string or null.



✅✅2. undefined
undefined means a value is not assigned / not available.
let result: undefined = undefined;

Example:
let name: string | undefined;
name = "Raju";   // ✅
name = undefined; // ✅


➡️null vs undefined
null       → intentionally empty
undefined  → value is not assigned / missing


✅✅3. any
any essentially turns off type checking for that value.

let value: any = 10;
value = "Raju";  // ✅
value = true;    // ✅
value = [1, 2, 3]; // ✅



➡️You can also perform operations without TypeScript checking whether they are valid:
let value: any = "Hello";
value.toUpperCase();
value.someRandomMethod(); // No TypeScript error


⚠️ Why avoid any?
It removes one of TypeScript's biggest advantages: type safety.
Use it only when necessary.




✅✅4. unknown
unknown means:
"I don't know what type this value is yet.", but before execution You first need to check its type.
It is safer than any.


let value: unknown = "Raju";
value = 25;
value = true;


➡️You cannot directly use an unknown value as a specific type.
let value: unknown = "Raju";
value.toUpperCase(); // ❌ Error


➡️You first need to check its type:
if (typeof value === "string") {
    console.log(value.toUpperCase());
}

➡️After the check, TypeScript knows:
value → string


➡️any vs unknown
📌any
 ↓
"Trust me, I know what I'm doing."
 ↓
TypeScript doesn't check much


📌unknown
 ↓
"I don't know the type yet."
 ↓
You must check before using it





✅✅5. never
never represents a value that never occurs.
It's commonly used for functions that never successfully return.


➡️Example: Infinite loop
function infiniteLoop(): never {
    while (true) {
        console.log("Running...");
    }
}
The function never reaches the end.


➡️Example: Function that always throws an error
function throwError(message: string): never {
    throw new Error(message);
}
It never returns a value because execution stops with an error.
throwError("Something went wrong");



✅✅6. never vs void
This is important.

➡️void
The function finishes but doesn't return a value.

function greet(): void {
    console.log("Hello");
}
The function ends normally.



➡️never
The function never completes normally.

function crash(): never {
    throw new Error("Error");
}



📌void
 ↓
Function finishes
 ↓
No return value


📌never
 ↓
Function never completes normally



*/ 
//# sourceMappingURL=c21-9-special-types-in-ts.js.map