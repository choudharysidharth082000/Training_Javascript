//creating the function expression

//we can assign a variable name to the function

let multiply = function(a, b){ //assigned the function to the variable multiply
    return a*b;
}
let a = multiply(1,2);
console.log(a);

//we can assign it the another variable 

let guna = multiply;

let b = guna(2,3);
console.log(b);