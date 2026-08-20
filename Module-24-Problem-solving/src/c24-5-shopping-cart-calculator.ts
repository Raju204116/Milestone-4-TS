/* 


✅Problem 4 — Shopping Cart Calculator
Concepts: object types, array types, reduce(), function parameter and return types
Function name must be: calculateCartTotal

Scenario
An online shopping website stores each item in a customer's cart as an object containing its name and price.
The store needs a function that calculates the total price of all products currently in the cart.

Product Structure
{
    name: string;
    price: number;
}


Task
Create a function named calculateCartTotal. The function should receive an array of products and return the total price.

Requirements
    Properly type the product object.
    Properly type the array of products.
    Return the total as a number.
    An empty cart should return 0.


Starter Code
// TODO: define a type for a single product
 
function calculateCartTotal(products: Product[]): <type> {
 
    // write your code here
 
}
Example
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
 
calculateCartTotal(products);
// 2600
 
// another example:
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
 
calculateCartTotal(products2);
// 1750

*/

type Product={
    name:string
    price:number
}

function calculateCartTotal(products:Product[]):number{

    if(products.length===0){
        return 0;
    }
    return products.reduce((accum,item)=> accum + item.price,0);
}


// Type inference   //TypeScript automatically understands that product1 is a Product[] type data
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
console.log(calculateCartTotal(products));// 2600
 

// Explicit type  // You can mention the data type here, but no need of this
const products2: Product[]= [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
console.log(calculateCartTotal(products2));// 1750


//Mentioning data type is Must here , because it's an empty array
const product3:Product[]=[];  
console.log(calculateCartTotal(product3)); //0
