//using the map method
const sampleArray = [{a: "anushka", id: "sidharth"}];

const sample2 = [1,2,3,4,5,-1];
//using the array keyword
const ans = sample2.map(element =>
    {
        return element*2;
    })

console.log(ans);

//usng the filter method
sample2.forEach((element, index)=>
{
    sample2[index] = element * 2;
    console.log(`The element is : ${element}, and the index is ${index}`);
});

console.log("Chanhed Element is ");
console.log(sample2);

//using the reduce method

const arrayNew = sample2.reduce((result, item)=>
{
    console.log("Result is : ", result);
    console.log()
    return result + item;
}, 0)
console.log(arrayNew);


var newArray = [2,3,4,5,6,6,7,1,1,1,1,1,11,];

var ansNew = newArray.findIndex((element) =>
    {
        console.log("Element is : ", element);
        return element == 1;
    })
console.log(ansNew);