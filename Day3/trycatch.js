const newFunc = () =>
{
    try {
        try{
            throw new Error("Hello This is an error");

        }catch(err){
            throw new Error(err);
        }
        
    } catch (error) {
        console.log("This is the outer error")
        console.log(error.message);
    }
}
newFunc();