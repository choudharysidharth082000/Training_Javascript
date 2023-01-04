/* There are several array methoda such as
1. Push and Pop
2. Shift and Unshift
3. Slice
4. Splice
5. Concat
6. Join
7. Reverse
8. Sort
9. Length
*/


var a = [1,2,3,4,5];
//1. Push and Pop
//push adds the element to the last of the array
a.push(6);
console.log(a);
//pop removes the last element from the array
a.pop();
console.log(a);

//2. Shift and Unshift
//shift removes the first element from the array
a.shift();
console.log(a);
//unshift adds the element to the first of the array
a.unshift(1);
console.log(a);

//3. Slice
//slice returns the part of the array
console.log(a.slice(1,3));

//4. Splice
//splice removes the element from the array
a.splice(1,2);
console.log(a);

//5. Concat
//concat joins the two arrays
var b = [6,7,8,9,10];
var c = a.concat(b);
console.log(c);

//6. Join
//join joins the array elements with the given string
console.log(c.join(" "));
console.log(c.join("-"));

//7. Reverse
//reverse reverses the array
console.log(c.reverse());

//8. Sort
//sort sorts the array
console.log(c.sort());

//9. Length
//length returns the length of the array
console.log(c.length);
