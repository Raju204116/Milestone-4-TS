
//✅✅✅ Class, instance and constructor
/* 
✅A class is a blueprint that declares what fields its objects will have. 
✅An instance is one object created from that class with the (new) keyword.
✅A constructor is the block that a class runs exactly once per instance, to give that instance its starting values.

➡️In plain words
The class is the blank card, the instance is one filled-in ID, and the constructor is the clerk who fills it in. 

✅✅The blank ID card
On your first day at college, the office has a stack of blank ID cards. Every card has the same printed boxes: name, roll, blood group. 
A blank card is nobody's card — you cannot show it at the gate.
When your turn comes, a clerk takes one blank card and writes your details into the boxes. Out comes a real ID. 
The next student gets another blank card with their details.
One card design. Hundreds of IDs.

The blank card is the class.
Each filled card is an object (also called an instance).
The clerk who writes in the boxes is the constructor.

That is the entire module. The rest is spelling.
*/


//✅✅static class
class Student {  
    name:string ="rafi" 
    age:number = 20
    email:string="rafi20@gmail.com"
    marks:number=80
}

const rafi=new Student();//📌📌This is called Instantiate to create an Instance
// console.log(rafi); //Student { name: 'rafi', age: 20, email: 'rafi20@gmail.com', marks: 80 }


//📌📌Inside a class we will call every function as a method ex: Constructor method


//✅✅ Dynamic Class using Constructor
class Student2 {  
    name:string  //Declaration , this is the object key name
    age:number 
    email:string
    marks:number

    constructor (name:string,age:number,email:string,marks:number){ //this parameters will receive real value from the instance
        this.name=name  //this.name means the declared name,  and  (=name ) means the receiving name value from the instance
        this.age=age
        this.email=email
        this.marks=marks
    }
}

const rafi2=new Student2("Rafi",20,"rafi@gmail.com",80);
console.log(rafi2); //Student2 { name: 'Rafi', age: 20, email: 'rafi@gmail.com', marks: 80 }

const sadik=new Student2("Sadik",22,"sadik@gmail.com",90);
console.log(sadik);


// 📌📌 This is showing same as function-object (class-23-3), 
// but there is a huge difference in structure and security