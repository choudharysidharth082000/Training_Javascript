console.log("Hello world");
const sample = {};
console.log(sample.__proto__.__proto__);

//function to get the prototype chain prototyppes
function getPrototypeChain(obj) {
  const protoChain = [];
  while ((obj = Object.getPrototypeOf(obj))) {
    protoChain.push(obj);
  }
  return protoChain;
}
console.log(getPrototypeChain(sample));
