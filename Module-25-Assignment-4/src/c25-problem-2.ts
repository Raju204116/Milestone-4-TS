/* 

Problem 2 — Table Booking Confirmation
Function name must be: formatBookingConfirmation

Scenario
A restaurant booking app confirms a table reservation with a short readable message. A booking contains name,
guests, and time.

Task
First define an appropriate type or interface for the booking. Then create a function named 
formatBookingConfirmation that receives a booking and returns a confirmation sentence.

Requirements
    Accept a properly typed booking object.
    Return a string.
    Use the values from the object rather than hard-coding the result.

Starter Code
function formatBookingConfirmation(booking: <type>): <type> {
    // write your code here
}


Test Cases
Input                                                                          Output
{ name: "Aisha", guests: 4, time: "7:00 PM" }           "Aisha's table for 4 guests is confirmed at 7:00 PM."
{ name: "Rahim", guests: 2, time: "8:30 PM" }           "Rahim's table for 2 guests is confirmed at 8:30 PM."

*/


type Booking ={
    name:string
    guests:number
    time:string
}

function formatBookingConfirmation(booking: Booking):string  {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

console.log(formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" } ));
console.log(formatBookingConfirmation({ name: "Rahim", guests: 2, time: "8:30 PM" }  ));
