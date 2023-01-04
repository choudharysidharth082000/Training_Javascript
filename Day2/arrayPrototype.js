//array prototype methods
//fill,filter,map,foreach,indexOf,keys,reduce

//fill
var a = [1,2,3,1,5];
a.fill(0,1,3);
console.log(a);


//filter method
//retuurns an array of elements which satisfies the condition
var sample = a.filter((element) =>
{
    return element == 1;
})

//second example --> returning index of element if the element is 1
var indexes = [];
var sample1 = a.filter((element, index)=>
{
    if(element == 1){
        indexes.push(index);
        return true;
    }
}) 
console.log(sample);
console.log("Sample 1 is : ", indexes);


//map method

var ans = [2,2];
//returns an array of elements after performing the operation on each element
var sample2 = a.map((element, index) =>
{
    return element * ans[index];
}
)
console.log(sample2);



//3. Reduce example
console.log("Reduce Prototype");
//returns a single value after performing the operation on each element
var sample3 = a.reduce((accumulator, element) =>
{
    return accumulator + element;
}
)
console.log(sample3);


//4. ForEach example
console.log("ForEach Prototype");
//just loops through every element
var sample4 = a.forEach((element) =>
{
    console.log(element);
}
)
console.log(sample4);



//5. IndexOf example
console.log("IndexOf Prototype");
//returns the index of the element
var sample5 = a.indexOf(5);
console.log(sample5);

//6. Keys example
console.log("Keys Prototype");
//returns the keys of the array
var sample6 = a.keys();
console.log(sample6);

//7. Find example
console.log("Find Prototype");
//returns the first element which satisfies the condition
var sample7 = a.find((element) =>
{
    return element == 1;
}
)
console.log(sample7);

