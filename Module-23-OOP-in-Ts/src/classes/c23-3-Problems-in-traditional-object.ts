const  createStudent =(name:string,age:number,email:string,marks:number)=>{
    // const obj={name,age,email,marks};

    const obj={name,age,email,marks, forgotPass(){}} ; //everytime memory will be occupied by the forgot function and this is a problem
    return obj;
}

const rafi=createStudent("Rafi",20,"rafi20@.com",100);
const sadik=createStudent("sadik",25,"aaaa@gmail", 80);

// rafi.marks=0;  //anyone can change the data from outside the function and this is a serious problem
console.log(rafi,sadik);

//We can't validate here , this is a problem