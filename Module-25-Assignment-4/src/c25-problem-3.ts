/* 
Problem 3 — Weekly Expense Tracker
Function name must be: calculateWeeklyTotal

Scenario
A budgeting app lets a user log each expense for the week as a plain number, and needs to add them all up.

Task
Create a function named calculateWeeklyTotal. The function should receive an array of expense amounts and 
return the total.

Requirements
    Properly type the array of numbers.
    Return the total as a number.
    An empty array should return 0.


Starter Code
function calculateWeeklyTotal(expenses: <type>): <type> {
    // write your code here
}


Test Cases
Input               Output
[200, 450, 100]     750
[1000, 250]         1250
[]                  0


*/


function calculateWeeklyTotal(expenses: number[]):number {
    return expenses.reduce((sum:number,item:number):number=> sum+item,0);
}

console.log(calculateWeeklyTotal([200, 450, 100])); //750
console.log(calculateWeeklyTotal([1000, 250] )); //1250
console.log(calculateWeeklyTotal([])); //0
