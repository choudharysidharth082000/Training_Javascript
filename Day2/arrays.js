//creating the sample array
var a = [1,2,3,4,"sidharth"]; //any type of data can be stored in array

//printing all the values inside the array
for(let i =0;i<a.length;i++){ //block scope let keyword
    console.log(a[i]);
}



const printArray = (arr) =>
{
    for(let i =0;i<arr.length;i++){
        console.log(arr[i]);
    }
}


//here if the values are changed then the whole array will be changed because it is the reference type
const changeIndexArray = (arr, index, value) =>
{
    arr[index] = value;
    printArray(arr);
}


//changing the value of the index 2
changeIndexArray(a,2,"sidharth");


//remove the last element from the array
a.pop();
//printing the array
printArray(a);


//pushing the element "POSIST to the last element"
a.push("POSIST");
printArray(a);