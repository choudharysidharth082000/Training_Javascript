const sample = [1,2,3,4,5,1];

const ararySample = [
    {
        "name": "Sidharth",
        "age": "22",
        "p;aced": true
    },
    {
        "name": "Anshul",
        "age": "22",
        "p;aced": true
    }
]


//using the reduce method

const val = sample.reduce((result, element) =>
{
    if(element == 1){
        return result + element
    }
    else {
        return result;
    }
}, 0);
console.log(val);


//getting the names from the object for adding values to the array
const sampleArray = ararySample.reduce((result, element)=> [...result,element.name],[]);
console.log("Samole Array is", sampleArray);


//getting the minimum element from the array

const sampleArrayNew = sample.reduce((result, element)=>
{
    if(element > result ){ //can get the largest and the smallest element by changng the operator
        return element = result;
    }
    else {
        return element;
    }
}, 0)
console.log(sampleArrayNew)


