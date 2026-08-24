"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

✅✅✅1. What is TypeScript?
TypeScript is a strongly typed superset of JavaScript developed by Microsoft.
It adds a static type system and other features on top of JavaScript.

TypeScript = JavaScript + Static Typing + Additional Features
Since TypeScript is a superset of JavaScript, valid JavaScript code can generally be used inside a TypeScript file.

Example
➡️JavaScript:
let age = 25;

➡️TypeScript:
let age: number = 25;

Here, : number tells TypeScript that age should contain a number.

If we later write:
age = "Raju";
TypeScript will report an error because age was declared as a number.





✅✅2. JavaScript vs TypeScript

| JavaScript                       | TypeScript                                |
| -------------------------------- | ----------------------------------------- |
| Dynamically typed                | Statically typed                          |
| `.js` / `.jsx`                   | `.ts` / `.tsx`                            |
| No built-in static type checking | Static type checking                      |
| Runs directly in browsers        | Usually compiled/transpiled to JavaScript |
| More flexible                    | More strict                               |
| Easier for small scripts         | Better suited to large projects           |
| Errors may appear at runtime     | Many errors caught during development     |
| Less type information            | Rich type information                     |
| Limited compile-time checking    | Strong compile-time checking              |


Simple comparison
➡️JavaScript
let username = "Raju";
username = 100;

JavaScript allows the variable to change from a string to a number.


➡️TypeScript
let username: string = "Raju";
username = 100; // ❌ Error

TypeScript protects the variable's expected type.



✅✅3. Why Should We Use TypeScript?

JavaScript is dynamically typed. This gives JavaScript flexibility, but in large applications it can also make
certain errors easier to introduce.

TypeScript helps us catch many of these errors before the program runs.

➡️JavaScript
function add(a, b) {
    return a + b;
}
add(10, "20");

JavaScript allows this and produces:
"1020"
But perhaps we intended to add two numbers.


➡️TypeScript
function add(a: number, b: number): number {
    return a + b;
}
add(10, "20");
TypeScript reports an error because "20" is a string, not a number.


➡️➡️Major benefits
✅a. Catches errors early
Many errors can be detected during development instead of waiting until runtime.

let age: number = 25;
age = "twenty-five"; // ❌ Error


✅b. Better code completion
Because TypeScript knows the types of variables and objects, editors such as VS Code can provide better:
autocomplete
suggestions
parameter information
error highlighting


➡️For example:
const user = {
    name: "Raju",
    age: 25
};

user.
The editor knows that user has:
name
age


✅c. Easier to maintain large projects
Imagine a project with:
100 files
500 files
1000+ files

When everything is JavaScript, understanding what kind of data flows between functions can become difficult.
TypeScript allows us to describe the expected data.

function getUser(id: number): User {
    // ...
}
Now another developer immediately knows:
id → number
return value → User


✅d. Better refactoring
Suppose you rename a property:
user.name
to:
user.fullName

TypeScript can help identify places throughout the project where name is still being used.


✅e. Better documentation
Consider:
function calculatePrice(
    price: number,
    quantity: number
): number {
    return price * quantity;
}

Even without additional documentation, we can understand:
price    → number
quantity → number
return   → number


✅f. Excellent for large applications
TypeScript is particularly useful for:

React applications
Node.js applications
Next.js
Express projects
large frontend applications
full-stack applications
team projects





✅✅4. Does TypeScript replace JavaScript?
No.
TypeScript ultimately becomes JavaScript.

The browser understands:
HTML
CSS
JavaScript

It does not normally execute TypeScript directly.
Therefore:
TypeScript
    ↓
TypeScript Compiler
    ↓
JavaScript
    ↓
Browser / Node.js



✅✅5. TypeScript Workflow
This is one of the most important concepts to understand.

Suppose you create:
app.ts
and write:
let age: number = 25;
console.log(age);


The browser cannot directly understand the TypeScript type annotation.
So the TypeScript compiler processes the file.

             TypeScript
                 │
                 │
                 ▼
             app.ts
                 │
                 │ tsc
                 ▼
          Type checking
                 │
                 ▼
        JavaScript output
                 │
                 ▼
             app.js
                 │
                 ▼
       Browser / Node.js




➡️Total flow :

                 TYPESCRIPT
                     │
          ┌──────────┴──────────┐
          │                     │
     JavaScript             Type System
          │                     │
          └──────────┬──────────┘
                     │
                     ▼
              TypeScript Compiler
                     │
              ┌──────┴──────┐
              │             │
       Type Checking      Compile
              │             │
              ▼             ▼
           Errors       JavaScript
                            │
                            ▼
                    Browser / Node.js




✅✅6. TypeScript Compilation
The TypeScript compiler is called:
tsc

For example:
tsc app.ts

Suppose app.ts contains:
let age: number = 25;
console.log(age);

➡️After compilation, JavaScript might look like:
let age = 25;
console.log(age);

Notice:
: number
has disappeared.

Why?
Because the type information is primarily for TypeScript's development-time checking. JavaScript doesn't need it.




✅✅8. Important: TypeScript doesn't magically make JavaScript safer at runtime
This is a very important point.
TypeScript checks your code before runtime.

For example:
function greet(name: string) {
    console.log(name.toUpperCase());
}

TypeScript expects:
name → string

But if data comes from an external API, TypeScript cannot automatically guarantee that the server actually sent a string.
So TypeScript provides compile-time safety, not complete runtime validation.
For external data, you may still need runtime validation.





*/ 
//# sourceMappingURL=c21-1-Intro-to-TypeScript.js.map