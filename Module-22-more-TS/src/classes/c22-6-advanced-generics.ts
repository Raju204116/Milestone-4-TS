
function useState<T>(initialValue:T):[T,(newValue:T)=>T]{ 
    let value=initialValue;

    function setValue(newValue:T){
        value=newValue;
        return value;
    }

    // return value;
    return [value,setValue] //returning an array with two values
}
// console.log(useState(0)); //[ 0, [Function: setValue] ]
// console.log(useState<string>('a')); //[ 'a', [Function: setValue] ]
// console.log(useState<number>(10)); //[ 10, [Function: setValue] ]
// console.log(useState<boolean>(false)); //[ false, [Function: setValue] ]



// showing both function useState and setValue()

const [counter,setCounter]=useState(0);
console.log(counter); //0
// console.log(setCounter); //[Function: setValue]
console.log(setCounter(10));//10




//more advanced
interface User{
    email:string,
    isLoggedIn:boolean
}
// console.log(useState<User>({email:"", isLoggedIn:true})); //[ { email: '', isLoggedIn: true }, [Function: setValue] ]
