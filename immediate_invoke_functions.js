//example for immediate function invocation

//used for optimization 

//used the function and frees the memory after the function is executed

//if we decakre the function in a global space then throughout the program our space will be taken by the variable

//if it requires urage in single function only then we can use the immediate function invocation
(function(){
    let a =10;
    console.log(a); 
    console.log("This is the immediate function invocation");
})();
