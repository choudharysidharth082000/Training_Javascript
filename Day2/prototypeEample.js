const sample = 
{
    "name": "Sidharth"
}
function tracePrototypeChainOf(object) {

    var proto = object.constructor.prototype;
    var result = '';

    while (proto) {
        result += ' -> ' + proto.constructor.name;
        proto = Object.getPrototypeOf(proto)
    }

    return result;
}

var trace = tracePrototypeChainOf(sample)
console.log(trace);