
//✅✅Better way of object creation : using function
// Instead of creating/declaring object each time, we can make it reusable by function.
//But still there are problems 

const  createStudent =(name:string,age:number,email:string,marks:number)=>{
    // const obj={name,age,email,marks};

    const obj={name,age,email,marks, forgotPass(){}} ; //✅1.everytime memory will be occupied by the forgot function and this is a problem
    return obj;
}

const rafi=createStudent("Rafi",20,"rafi20@.com",100); 
const sadik=createStudent("sadik",25,"aaaa@gmail", 80);

// rafi.marks=0;  //✅2. anyone can change the data from outside the function and this is a serious problem

console.log(rafi,sadik); //{name: 'Rafi',age: 20,email: 'rafi20@.com',marks: 100,forgotPass: [Function: forgotPass]}


//✅3.We can't validate here , this is a problem