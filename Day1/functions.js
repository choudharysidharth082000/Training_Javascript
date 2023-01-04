//there are two types of functions

//1. Call By Value Functions
//2. Call By Reference Functions

//examples
//1. Call By Value Functions
//1.1 Paramterarized Functions
//1.2 Non Paramterarized Functions


const sampleFunction = () => // this is a non paramterarized function
{
    return "Hello word";
}


//sample function call
console.log("Non Parameteraized function is called here ----> : ", sampleFunction());




//this function is also call by value function as another copy of the paramter is created and the function is called

//call by value functions is used for the variables
var b =12;
console.log("Before the function call", b);
const sampleFunction2 = (a) =>
{
    a= a+a;
    console.log(a);
}
sampleFunction2(b);
console.log("After the function is called", b);












//call by reference functions   only possible in arrays and objects in javascript
var sampleObject = 
{
    a : 1
}
console.log("Before the function call", sampleObject);
const sampleFuncton3 = (samplea) => // this is a call by reference function
{
    samplea.a = samplea.a + samplea.a;
}
sampleFuncton3(sampleObject);
console.log("After the function is called");
console.log(sampleObject);
