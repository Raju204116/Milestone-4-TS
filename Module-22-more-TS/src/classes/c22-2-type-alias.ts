/* 

✅✅✅Type Alias in TypeScript
A type alias allows you to create a custom name for a type using the type keyword.

➡️Basic Syntax
type TypeName = type;

➡️For example:
type UserName = string;
let name: UserName = "Raju";

Here, UserName is simply another name for string.



✅✅1. Object Type Alias
This is where type aliases become especially useful.

Instead of repeatedly writing:
let user1: {
    name: string;
    age: number;
};


➡️We can create a type:
type User = {
    name: string;
    age: number;
};


➡️Then use it:
const user1: User = {
    name: "Raju",
    age: 25
};

const user2: User = {
    name: "Rahim",
    age: 30
};




✅✅2. Type Alias with Array

type Numbers = number[];
let numbers: Numbers = [10, 20, 30];


✅✅3. Type Alias with Union
You can create a type with multiple allowed values:

type Status = "loading" | "success" | "error";
let currentStatus: Status = "loading";
currentStatus = "success"; // ✅
currentStatus = "error";   // ✅
currentStatus = "pending"; // ❌



✅✅4. Type Alias with Optional Properties

type User = {
    name: string;
    age?: number;
};

const user: User = {
    name: "Raju"
};

Here age is optional.




✅✅5. Type Alias for Function
You can also create a type for a function:

type Add = (a: number, b: number) => number;
const add: Add = (a, b) => {
    return a + b;
};



✅✅6.Why use Type Aliases?

➡️Without a type alias:
function printUser(user: {
    name: string;
    age: number;
}) {
    // ...
}



➡️With a type alias:
type User = {
    name: string;
    age: number;
};

function printUser(user: User) {
    // ...
}



➡️This makes your code:
Reusable
Cleaner
Easier to maintain
Easier to understand





*/