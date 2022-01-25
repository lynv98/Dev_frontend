//1: basic
function checkInteger(value){
    return (Number.isInteger(value) && value > 0);
}
console.log(checkInteger(1)); // true
console.log(checkInteger(1.2)); // false

//2: arrow func
let checkedInteger = (value) =>{
    return (Number.isInteger(value) && value > 0)
};

console.log(checkedInteger(4))

