const array = [1,2,3];

for(element in array){
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