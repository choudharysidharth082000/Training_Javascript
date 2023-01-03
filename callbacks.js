

//javascript is by defaut the single threaded synchronous language and to make it asynchronous we use the callbacks
setTimeout(()=> //this is the callback here
{
    console.log("TimeOut Number");
}, 5000);


const x = (y) =>
{
    console.log("x");
    y();
}

x(function(){ //passsing the callbacks here
    console.log("This is the inner function");
})