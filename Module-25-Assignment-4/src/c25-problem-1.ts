/* 
TypeScript Problem-Solving Assignment

✅General Rules
Do not change the function names. Use the exact name given in each problem.
Every problem must be solved using a function.
Every function must return a value. Do not use console.log() as the final answer.
Use appropriate TypeScript types for function parameters, function return values, objects, and arrays.
Avoid using any.
You may use JavaScript/ES6 features such as map(), filter(), reduce(), and template literals.
Check your function against every row in the test case table, not just the first one.
Think about edge cases — like an empty array — before considering a problem complete.


✅Problem 1 — Battery Level Status
Function name must be: getBatteryStatus

Scenario
A phone's settings screen shows a friendly battery status label instead of just the raw percentage.

Task
Create a function named getBatteryStatus. The function receives the battery percentage (0–100) and returns a status string.

Status Rules
Percentage           Status
0–20                "Low"
21–50               "Medium"
51–90               "High"
91–100              "Full"


Function Requirement
    Accept the percentage as a number.
    Return the status as a string.

Starter Code
function getBatteryStatus(percentage: <type>): <type> {
    // write your code here
}


Test Cases
Input       Output
10          "Low"
35         "Medium"
75          "High"
100         "Full"


*/

function getBatteryStatus(percentage: number):string {
    
    if(percentage <0 || percentage >100){
        return "Invalid Percentage";
    }

    if(percentage >=0 && percentage<=20){
        return "Low";
    }else if( percentage<=50){
        return "Medium";
    }else if( percentage<=90){
        return "High";
    }else {
        return "Full";
    }
}
console.log(getBatteryStatus(10)); //Low
console.log(getBatteryStatus(35)); //Medium
console.log(getBatteryStatus(75)); //High
console.log(getBatteryStatus(100)); //Full


