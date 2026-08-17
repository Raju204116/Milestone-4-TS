/* 

✅✅✅1. Spread Operator ...
The spread operator expands/unpacks the elements of an array or properties of an object.

➡️Array
const numbers: number[] = [10, 20, 30];
const newNumbers: number[] = [...numbers, 40, 50];
console.log(newNumbers);
//output: [10, 20, 30, 40, 50]



➡️Object
const user = {
    name: "Raju",
    age: 25
};
const updatedUser = {
    ...user,
    city: "Dhaka"
};

// Result:
{
    name: "Raju",
    age: 25,
    city: "Dhaka"
}


📌Important
Spread = unpack / expand
...array
...object





✅✅✅2. Rest Parameter ...
The rest parameter collects multiple arguments into an array.


function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(10, 20, 30));  // 60

Here:
...numbers =[10, 20, 30]
     

➡️Another example

function printNames(first: string, ...others: string[]): void {
    console.log(first);
    console.log(others);
}
printNames("Raju", "Rahim", "Karim");
// Output:
Raju
["Rahim", "Karim"]



📌Important
Rest = collect / gather
...parameters






✅✅✅3. Destructuring
Destructuring means extracting values from arrays or objects into variables.


➡️Array Destructuring
const numbers: number[] = [10, 20, 30];
const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30

Think:
[10, 20, 30]
 ↓   ↓   ↓
first second third



➡️With TypeScript
TypeScript automatically infers:
first  → number
second → number
third  → number


➡️Object Destructuring
const user = {
    name: "Raju",
    age: 25
};
const { name, age } = user;
console.log(name); // Raju
console.log(age);  // 25


Here:
user
 ├── name → name variable
 └── age  → age variable


✅4. Destructuring with Renaming
You can give the extracted variable a different name.

const user = {
    name: "Raju",
    age: 25
};
const { name: username, age: userAge } = user;
console.log(username); // Raju
console.log(userAge);  // 25


✅5. Rest + Destructuring
They can be used together.

const numbers = [10, 20, 30, 40, 50];
const [first, second, ...others] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(others); // [30, 40, 50]



Here:
first  → 10
second → 20
others → [30, 40, 50]




*/