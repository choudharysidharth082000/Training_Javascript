//example for clousre in js
const outer = () => //outter function
{
    let a = 10; //bbecomes the functional scope for the function
    const inner = () => 
    {
        console.log(a); //we can use outside function value inside the function
    }
    return inner;
}


//Example for the closure