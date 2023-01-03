//function calling itself is termed as recursion



//function to print the foibonacci series using recussion
function fibinacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
     return fibinacci(n-1) + fibinacci(n-2);
}


//calling the function
for(let i = 0;i<10;i++){
    console.log(fibinacci(i));
}

//getting the number at the position
console.log(fibinacci(3));
