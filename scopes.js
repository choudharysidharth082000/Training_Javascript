const name = "Sidharth";


//Global Scope example
const printNamelobalScope = () =>
{
    console.log(name);
}

//Functional Scope Example
const printNameGlobalScope = () =>
{
    var age = "22"; //functional Scope
    console.log(name);
    const newFunction = () =>
    {
        console.log(age);
    }

    for(let a =0;a<5;a++){ // Block Scope Example
        console.log(a);
    }
    // console.log(a); //This will give us an error since it is a block scope and cannot be accessed outside the block
    newFunction();
}


//printing the output
printNameGlobalScope();