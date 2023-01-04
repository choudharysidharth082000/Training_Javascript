//example for try catch and finally
function tryCatchFinallyExample()
{
    try
    {
        console.log("Inside try block");
        throw new Error("Error thrown");
    }
    catch(error)
    {
        console.log("Inside catch block");
        console.log(error.message);
    }
    finally
    {
        console.log("Inside finally block");
    }
}
tryCatchFinallyExample();
//output

