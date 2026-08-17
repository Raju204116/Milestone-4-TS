/* 

✅✅✅Functions in TypeScript
TypeScript functions are similar to JavaScript functions, but we can specify types for parameters and return values.


✅✅1. Basic Function
function greet(): void {
    console.log("Hello Raju");
}
greet()
  ↓
no parameter
  ↓
no return value → void


✅✅2. Function with Parameters
function add(a: number, b: number) {
    return a + b;
}

➡️Here TypeScript knows:
a → number
b → number

So:
add(10, 20);    // ✅
add(10, "20");  // ❌



✅✅3. Return Type
We can explicitly specify the return type after ():

Syntax:
function functionName(parameter: type): returnType {
    // code
}

example:
function add(a: number, b: number): number {
    return a + b;
}





✅✅4. Function Returning string

function getName(): string {
    return "Raju";
}


✅✅5. Function Returning boolean

function isAdult(age: number): boolean {
    return age >= 18;
}


✅✅6. void
void is generally used when a function doesn't return a value.

function printMessage(message: string): void {
    console.log(message);
}
printMessage("Hello");


✅✅7. Optional Parameters
Use ? to make a parameter optional.

function greet(name: string, age?: number): void {
    console.log(name, age);
}
Both are valid:
greet("Raju");
greet("Raju", 25);

➡️But:
greet(); // ❌ name is required


Optional parameters must come after required parameters.
function test(age?: number, name: string) {}// ❌ Wrong
function test(name: string, age?: number) {}// ✅ Correct




✅✅8. Default Parameters
Same concept as JavaScript.

function greet(name: string = "Guest"): void {
    console.log(`Hello ${name}`);
}
greet();        // Hello Guest
greet("Raju");  // Hello Raju


The type is still:
name → string


✅✅9. Arrow Functions
TypeScript also supports typed arrow functions.

const add = (a: number, b: number): number => {
    return a + b;
};

Short version:
const add = (a: number, b: number): number => a + b;




✅✅10. Function Type
We can describe the type of a function.

let add: (a: number, b: number) => number;

➡️This means:
add
 │
 ├── parameter 1 → number
 ├── parameter 2 → number
 └── return → number

Then:
add = (a, b) => a + b;




✅✅11. Function as a Parameter
A function can receive another function as a parameter.

function calculate(
    a: number,
    b: number,
    operation: (x: number, y: number) => number
): number {
    return operation(a, b);
}

➡️Use:
const result = calculate(10, 20, (x, y) => x + y);
console.log(result); // 30

This is very similar to the callback functions you already learned in JavaScript.




✅✅12. Rest Parameters
TypeScript can also type rest parameters.

function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
sum(10, 20, 30); // 60




*/