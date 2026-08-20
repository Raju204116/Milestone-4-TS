/* 

✅✅✅TypeScript Basic Problem-Solving 

✅General Rules
Do not change the function names. Use the exact name given in each problem.
Every problem must be solved using a function.
Every function must return a value. Do not use console.log() as the final answer.
Use appropriate TypeScript types for function parameters, function return values, objects, arrays, and union types where appropriate.
Avoid using any unless a problem explicitly requires it.
You may use JavaScript/ES6 features such as map(), filter(), reduce(), find(), includes(), destructuring, and template literals.
Test your functions with the provided examples and create a few additional test cases yourself.
Think about edge cases before considering a problem completely.



✅Problem 1 — Cinema Ticket Counter
Concepts: function parameter types, return types, number, conditional logic
Function name must be: getTicketPrice

Scenario
A cinema is building a ticketing system. The ticket price depends on the customer's age because children and 
senior citizens receive special pricing. You are responsible for creating the function that determines 
how much a customer should pay for a single ticket.

Task
Create a function named getTicketPrice. The function should receive the customer's age and 
return the appropriate ticket price.

Pricing Rules:

Age                     Ticket Price
Below 5                      0
5–12                        100
13–59                       200
60 or above                 120

A child younger than 5 years old can enter for free.


Function Requirement
    Accept the age as a number.
    Return the ticket price as a number.
    Correctly handle all age ranges.


Starter Code
function getTicketPrice(age:<type>): <type> {
 
    // write your code here
 
}
Example
getTicketPrice(3);// 0
getTicketPrice(10);// 100
getTicketPrice(25);// 200
getTicketPrice(65);// 120
*/



function getTicketPrice(age:number):number  {
 
    let price:number=0;
    if(age<5){
        price=0;
    }else if(age<13){
        price=100;
    }else if (age<60){
        price =200;
    }else{
        price=120;
    }
        
    
    return price;
 
}
console.log(getTicketPrice(3));// 0
console.log(getTicketPrice(10));// 100
console.log(getTicketPrice(25));// 200
console.log(getTicketPrice(65));// 120






















