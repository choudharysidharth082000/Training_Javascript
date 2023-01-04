// var, let , const



const name = "Sidharth Choudhary"; //global scope example which was introduced earlier
                                    //const creeates the block scoped constants 


//let keyword : block scoped

//var keyword: functional scope 

//block scope was introduced with the new version in the es6 which was given by the keyword let

//funcitonal scope is with the var keyword


const callName = () =>
{
    console.log(name);

    let age = 20; //currently functional scope as functional scope = block scope

    console.log(name, age); 

    for(let a = 0; a<5; a++) //block scope
    {
        console.log(a); 
    }

    //here we cannot access a as it is on the block scope


}
callName();


