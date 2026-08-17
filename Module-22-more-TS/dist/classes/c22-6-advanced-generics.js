"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
        return value;
    }
    // return value;
    return [value, setValue]; //returning an array with two values
}
// console.log(useState(0)); //[ 0, [Function: setValue] ]
// console.log(useState<string>('a')); //[ 'a', [Function: setValue] ]
// console.log(useState<number>(10)); //[ 10, [Function: setValue] ]
// console.log(useState<boolean>(false)); //[ false, [Function: setValue] ]
// showing both function useState and setValue()
const [counter, setCounter] = useState(0);
console.log(counter); //0
// console.log(setCounter); //[Function: setValue]
console.log(setCounter(10)); //10
// console.log(useState<User>({email:"", isLoggedIn:true})); //[ { email: '', isLoggedIn: true }, [Function: setValue] ]
//# sourceMappingURL=c22-6-advanced-generics.js.map