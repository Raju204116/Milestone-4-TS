/* 
✅✅Non-Primitive Types
Non-primitive types represent objects/collections of values.

Common examples:
object
array
tuple
function


📌Note: array, tuple, and function are technically specialized forms of objects in JavaScript/TypeScript.


➡️object
let user: object = {
    name: "Raju",
    age: 25
};

➡️array
let numbers: number[] = [10, 20, 30, 40];
let names: string[] = ["Raju", "Rahim", "Karim"];


➡️tuple
A tuple has a fixed number of elements with specific types.

let user: [string, number] = ["Raju", 25];

Here:
user[0] → string
user[1] → number


➡️function
let greet: () => void = () => {
    console.log("Hello Raju");
};


Or with parameters and return type:
let add: (a: number, b: number) => number = (a, b) => {
    return a + b;
};






*/