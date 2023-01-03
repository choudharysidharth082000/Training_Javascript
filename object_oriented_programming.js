//creating the sample class with two variables
class Sample {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    //creating the function to change the values
    changeValues(a, b) { //constructor for  the class
        this.a = a;
        this.b = b;
    }
    //mutliplying the values
    createMultiple(a, b){
        this.#privateFunction(); // this function needs to be implemented with a # and can only be accessed within the class
        return a*b
    }
    get getA(){ //using get method for getting the data for the values
        return this.a;
    }
    get getB(){ 
        return this.b;
    }
    set setB(b){ //using the set keyword for changing the values
        this.b= b;
    }

    //private functions
    #privateFunction(){ //this is the private function
        console.log("This is the private function"); //this will be printed whenver a private function is called
        return "This is a private function"
    }
}

//creating the object for the funcitons

var sample = new Sample(1, 2);

//printing the multiples and using the private methods

console.log(sample.createMultiple(2, 3));


//using the set and get methods

console.log(sample.getA);

//changing the value of b

sample.setB = 5;


console.log(sample.getB); //getting the output 5

