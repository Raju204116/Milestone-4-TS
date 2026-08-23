/* 

✅Problem 5 — Student Result Analyzer
Concepts: nested arrays, object types, reduce(), return object types, conditional logic
Function name must be: getStudentResult

Scenario
A school stores the marks of each student in an array. Teachers want a quick summary containing the student's name,
average mark, and whether the student passed or failed. A student is considered passed if their average mark is
at least 40.

Student Structure
{
    name: string;
    marks: number[];
}

Task
Create a function named getStudentResult. The function should receive a student object, calculate the average of 
all marks, determine whether the student passed, and return a new object containing name, average, and result.

Edge Case
Think about what your function should do if the marks array is empty.


Starter Code
// TODO: define a type for a student
 
function getStudentResult(student: Student): <type> {
 
    // write your code here
 
}
Example
getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
});
 
// Expected output:
// { name: "Rafi", average: 82.5, result: "Passed" }
 
// another example:
getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
});
 
// Expected output:
// { name: "Nabil", average: 32.5, result: "Failed" }
*/

type Student ={
    name:string
    marks:number[]
}

interface Result{
    name:string
    average:number
    result:string
}

function getStudentResult(student:Student):Result{

    const marks:number[]=student.marks;//since reduce is an array method that's why it will not work directly for student Object.
    const totalMarks= marks.reduce((sum,mark)=>sum+mark,0);

    let avg=0;
    if(marks.length !==0){
         avg=totalMarks/marks.length;
    }
   
    const result= avg>=40 ?"Passed" : "Failed";

    return {
        name:student.name,
        average:avg,
        result:result
    }
}

console.log(getStudentResult({ name: "Rafi", marks: [80, 75, 90, 85]}));
// { name: "Rafi", average: 82.5, result: "Passed" }

console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
}));
// { name: "Nabil", average: 32.5, result: "Failed" }