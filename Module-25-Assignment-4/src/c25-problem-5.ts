/* 
Problem 5 — Quiz Score Summary
Function name must be: getQuizSummary

Scenario
A quiz app wants to show a simple summary of a student's scores across all questions: the total and the average.

Task
Create a function named getQuizSummary. The function should receive an array of scores and return an object 
containing total and average.

Starter Code
function getQuizSummary(scores: <type>): <type>  {
    // write your code here
}



Test Cases
Input                           Output
[8, 9, 7, 10]       {total: 34, average: 8.5 }
[5, 5]              { total: 10, average: 5 }
[]                  { total: 0, average: 0 }


*/

type Summary = {
    total: number
    average: number
}

function getQuizSummary(scores: number[]): Summary {
    const totalMarks = scores.reduce((sum, item) => sum + item, 0);

    if (scores.length === 0) {
        return {
            total: 0,
            average: 0
        };
    }
    const averageMarks = totalMarks / scores.length;

    // const averageMarks =scores.length === 0 ? 0 : totalMarks / scores.length;

    return { total: totalMarks, average: averageMarks }
}

console.log(getQuizSummary([8, 9, 7, 10])); //{ total: 34, average: 8.5 }
console.log(getQuizSummary([5, 5])); //{ total: 10, average: 5 }
console.log(getQuizSummary([]));    //{ total: 0, average: 0 }
