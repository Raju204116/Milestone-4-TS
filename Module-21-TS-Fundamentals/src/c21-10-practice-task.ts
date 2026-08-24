/* 

Module 21 — Problem Set

Problem -1:
একটি function বানাও যা একটি user-এর নাম আর বয়স নিয়ে sentence print করবে।
Input:
printUser("Amina", 22)
Output:
Amina is 22 years old.

 */

function printUser(name:string,age:number):string{
  return `${name} is ${age} years old.`
}
// console.log(printUser("Amina", 22));





/* 
Problem -2:
একটি product-এর নাম, price, এবং availability store করো primitive types use করে।
Input:
name = "Laptop"
price = 45000
isAvailable = true
Output:
Laptop cost 45000 and is available: true

 */

function productAvailability(productName:string,price:number,isAvailable:boolean):string{
  return `${productName} cost ${price} and is available: ${isAvailable}`
}
// console.log(productAvailability("Laptop",45000,true));




/*
Problem -3:
একটি array বানাও যেখানে student-এর নাম থাকবে এবং কতজন আছে সেটা কনসোল করবে।
Input:
["Amina", "Rahim", "Karim", "Salma", "Rafi"]
Output:
Total student: 5
 */

function arrayLength(stdArray:string[]):string{
    return `Total Student: ${stdArray.length}`
   
}
// console.log(arrayLength(["Amina", "Rahim", "Karim", "Salma", "Rafi"]));





/*

Problem -5:
একটি tuple বানাও যেখানে একজন মানুষের নাম আর বয়স থাকবে।
Input:
["Amina", 22]
Output:
Amina is 22 years old.

 */

function touple(toupleData:[string,number]){
  return `${toupleData[0]} is ${toupleData[1]} years old.`
}
// console.log(touple(["Amina", 22]));





/*
Problem -6:
একটি user object বানাও যেখানে name required, কিন্তু email optional।
Input:
{ name: "Amina" }
Output:
Name: Amina, Email: Not provided
*/



function optional(user:{name:string,email?:string}):string{
  return `Name: ${user.name}, Email: ${user.email ?? "Not provided"} `; // ?? called nullish coalescing operator
}

// console.log(optional({ name: "Amina" })); //Name: Amina, Email: Not provided 
// console.log(optional({ name: "Amina",email:"abc@gmail.com" })); //Name: Amina, Email: abc@gmail.com 




/*  
Problem -7:
একটি function লেখো যা একটি number নিয়ে check করবে সেটা even কি না।
Input:
isEven(8)
Output:
true

 */

function checkEven(num:number):boolean{
  if(num%2===0){
    return true;
  }
  return false;
  
}
// console.log(checkEven(8));




/*
Problem -8:
একটি function বানাও যা যেকোনো সংখ্যক number নিয়ে তাদের sum করবে।
Input:
sumAll(1, 2, 3, 4)
Output:
10

 */

function sumAll(...nums:number[]):number{
    // console.log(nums);  //[ 1, 2, 3, 4 ]
    let sum=0;
    for(let item of nums){
      sum+=item;
    }
    return sum;
}

// console.log(sumAll(1, 2, 3, 4));




/*
Problem -9:
দুইটি array merge করো spread operator ব্যবহার করে।
Input:
[1, 2, 3]
[4, 5, 6]
Output:
[1, 2, 3, 4, 5, 6]

 */

function mergeArray(num1:number[], num2:number[]):number[]{
    // console.log(...num1); //1 2 3
    // console.log([...num1]); //[ 1, 2, 3 ]
    
    return [...num1,...num2]
}
// console.log(mergeArray([1, 2, 3],[4, 5, 6])); //[ 1, 2, 3, 4, 5, 6 ]





/*
Problem -10:
একটি number positive না negative তা ternary operator দিয়ে বের করো।
Input:
num = 5
Output:
Positive

 */


function checkPositive(num:number):string{
    return num>0 ? "Positive" : "Negative" ;
}
// console.log(checkPositive(5));



/*
Problem -11:
একটি variable undefined হলে default value print করো।
Input:
username = undefined
Output:
Guest

 */


function nulllishCoalescing(username:string|undefined):string{
    return username  ?? "Guest" ;
}
// console.log(nulllishCoalescing(undefined)); //Guest
// console.log(nulllishCoalescing("Raju")); //Raju





/*
Problem -12:
একটি unknown type variable declare করো এবং পরে type check করে string হলে print করো।
Input:
"Hello"
Output:
Hello
*/

function unknownType(value:unknown){
    if(typeof value==="string"){
      return value;
    }
}
// const name:unknown ="Hello";
// console.log(unknownType(name));
// console.log(unknownType("Hello")); //Hello
// console.log(unknownType(10)); //undefined





/*
Problem -13:
একটি TypeScript program বানাও যেখানে একজন user-এর নাম, বয়স, email, skills, আর active status থাকবে।
এরপর সব তথ্য print করবে।
Input:
{
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true
} 
Output:
Name: Amina
Age: 22
Email: amina@email.com
Skills: HTML, CSS, TypeScript
Active: true
*/

type UserInfo ={
  name: string,
  age: number,
  email: string,
  skills: string[],
  active: boolean
}

function printUserInfo(user:UserInfo):UserInfo{
  return user;
}

// console.log(printUserInfo({name:"Amina", age:22,email:"amina@email.com",skills:["HTML", "CSS", "TypeScript"],active:true}));




/*
Problem -14:Extra Challenge Ideas

1.একটি shopping cart object বানাও।
2.একটি function দিয়ে user login check করো।
3.array থেকে even numbers filter করো।
4.nested object থেকে country বের করো।
5.type-safe function দিয়ে total price calculate করো।

*/

//1.একটি shopping cart object বানাও।
const shoppingCart ={
  productName:"Mouse",
  price:500,
  noOfItems:3,
  shopNo:2,
  brand:"A4Tech",
  warrantyYear:2
}

// 2.একটি function দিয়ে user login check করো।
type Role = "user"|"admin"|"guest";

function checkUserRole(role:Role):string{
  if(role==="user"){
    return `Registered User`;
  }else if(role==="admin"){
    return `Authorized Admin`;
  }
  return `Guest`;
}
// console.log(checkUserRole("admin")); //Authorized Admin




// 3.array থেকে even numbers filter করো।
function filterEvenNums(nums:number[]):number[]{
  return nums.filter((item)=>item%2===0);
}
// console.log(filterEvenNums([5,10,60,2,3,82,4,61]));



// 4.nested object থেকে country বের করো।
const sports ={
  category:"cricket",
  tournament:"WorldCup",
  player :{
    name: "Mushfiqur Rahim",
    age:35,
    height:5.5,
    country: "Bangladesh",
  }
}
// console.log(sports.player.country);


// 5.type-safe function দিয়ে total price calculate করো।

function calculatePrice(price:number[]):number{
  return price.reduce((sum,item)=>sum+item,0)

}
// console.log(calculatePrice([50,100,300,800,400,900])); //2250
