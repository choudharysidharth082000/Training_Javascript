//flexible arguements in javascript
const sampleFunction = (a, b) =>
{
    console.log(`The value  of the first number is ${a} and the second one is ${b}`);
}

//now at time of calling

sampleFunction(1); //it gives the output for the first one but gives undefined for the second arguement

sampleFunction(1,2); //normal calling functions

sampleFunction(1,2,3); //callingt the function with extra arguements. The third aguement is ignored