const array = [1,2,3];

array["fu"] = "Sidharth"



//for in method for this
for(element in array){
    console.log(element);
}

for(element of array){
    console.log(element);
}

//example for of //(This is the new topic in es6)
const sample = {
    a: 1,
    b: 2,
    c: 3
}

console.log(Object.entries(sample));
for(element of Object.keys(sample)){
    console.log(sample[element]);
}


//using for of
for(element in sample){
    console.log(element);
}
const sampleObject = 
{
    a: 1,
    greet(){
        console.log(this.a, "Hello this is the test");
    },
    greetNew: () =>
    {
        console.log(this.a);
    }
}

sampleObject.greet();
sampleObject.greetNew();