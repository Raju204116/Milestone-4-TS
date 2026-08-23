/*
Problem 4 — Traffic Light Action
Function name must be: getTrafficAction

Scenario
A driving simulator app tells the player what action to take based on the current traffic light color.

Task
First create a union type Light, then create a function named getTrafficAction that receives a Light and 
returns the correct action.

Rules:
Light       Action
red         "Stop"
yellow    "Slow Down"
green        "Go"



Starter Code
function getTrafficAction(light: <type>): <type> {
    // write your code here
}


Test Cases
Input       Output
"red"       "Stop"
"yellow"    "Slow Down"
"green"     "Go"

 */

type Light ="red" |"yellow"|"green" ;

function getTrafficAction(light:Light):string {
    if(light==="red"){
        return "Stop";
    }else if(light==="yellow"){
        return "Slow Down";
    }else {
        return "Go";
    }
}

console.log(getTrafficAction("red")); //Stop
console.log(getTrafficAction("yellow"));//Slow Down
console.log(getTrafficAction("green"));//Go
