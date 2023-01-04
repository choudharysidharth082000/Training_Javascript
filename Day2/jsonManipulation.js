//json manipulation
var sampleJson = {
    "name": "John",
    "age": 30,
    "cars": [
        { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
        { "name": "BMW", "models": ["320", "X3", "X5"] },
        { "name": "Fiat", "models": ["500", "Panda"] }
    ]
}

//manipulating the data inside the json
sampleJson.cars[0].models[0] = "Fiesta1";
sampleJson.name = "Sidharth"
console.log(sampleJson);


//getting the keys of the json
var keys = Object.keys(sampleJson);
console.log("These are the keys",keys);

//mapping anf printing keys
keys.map((key) =>
{
    console.log(key);
}
)


//filter cars whose name is BMW
var filteredCars = sampleJson.cars.filter((car) =>
{
    return car.name == "BMW";
}
)
console.log(filteredCars);


//parsing the json to string
var jsonString = JSON.stringify(sampleJson);
console.log(jsonString);


//parsing the data again
var jsonAgain = JSON.parse(jsonString);
console.log(jsonAgain);


//getting the values of the json
var values = Object.values(sampleJson);
console.log("These are the values",values);


//getting the entries
var entries = Object.entries(sampleJson);
console.log("These are the entries",entries);
