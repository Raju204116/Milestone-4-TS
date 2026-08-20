/* 

✅Problem 8 — Hospital Patient Status
Concepts: union types, optional properties, type narrowing, discriminated unions, object types
Function name must be: getPatientStatus

Scenario
A hospital has two types of patients: general patients and emergency patients. General patients only have
basic information. Emergency patients have an additional emergencyLevel.

General Patient
{
    name: "Rahim",
    age: 35,
    type: "general"
}
Emergency Patient
{
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 1
}
Emergency levels are: 1 → Critical, 2 → Serious, 3 → Moderate.

Task
Create a function named getPatientStatus. The function should receive either a general patient or an emergency patient
and return an appropriate status message.


TypeScript Requirement
Use TypeScript's type system to represent the fact that emergencyLevel exists for emergency patients 
but not necessarily for general patients.


Starter Code
// TODO: define types for GeneralPatient and EmergencyPatient
 
function getPatientStatus(patient: GeneralPatient | EmergencyPatient): <type> {
 
    // write your code here
 
}
Example
getPatientStatus({ name: "Rahim", age: 35, type: "general" });
// "General patient"
 
getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 });
// "Critical emergency"
 
getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 });
// "Moderate emergency"
*/

type General = {
    name: string
    age: number
    type: "general" //ekhane eita fixed kore na dile patient.emergencyLevel ase na

}

type Emergency = {
    name: string
    age: number
    type: "emergency" //ekhane eita fixed kore na dile patient.emergencyLevel ase na
    emergencyLevel: 1 | 2 | 3
}

function getPatientStatus(patient: General | Emergency): string {
    if (patient.type === "emergency") {
        if (patient.emergencyLevel === 1) {
            return "Critical emergency";
        } else if (patient.emergencyLevel === 2) {
            return "Serious emergency"
        } else
            return "Moderate emergency"
    }
    return "General patient"


}
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));// "General patient"
console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 }));// "Critical emergency"
console.log(getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 }));// "Moderate emergency"

