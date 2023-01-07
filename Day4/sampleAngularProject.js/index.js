/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js" />

var myapp = angular.module("myapp", []);
console.log(myapp)

//creating the controller for the app

//fetching the data from the api
myapp.controller("mycontroller", function ($scope)
{
    const promise = fetch("https://api.sampleapis.com/beers/ale");
    promise.then((response)=>response.json()).then(data => {
        $scope.dataAPI = data;
        console.log(data);
    }).catch(err =>
        {
            console.log(err);
        });
    const sample = 
    {
        "name": "Sidharth",
        "Age": "22",
        "image": "/assets/1.png"
    }
    //need to change variable
    var sampleName = "Anushka"
    $scope.message = "Hello world"
    $scope.test = sample
    $scope.sampleName = sampleName
    console.log($scope);
})


myapp.controller("ng-repeat-test", function ($scope){
    //sample object for getting the data    const sampleN
    var postman = "postman Data"

    const sampleObject = [
        {
            "name": "Sidharth",
            "age": "22",
            "cities": ["delhi", "Mumbai"]
        },
        {
            "name": "Sidharth",
            "age": "22",
            "cities": ["delhi", "Mumbai"]
        },
        {
            "name": "Sidharth",
            "age": "22",
            "cities": ["delhi", "Mumbai"]
        },
        {
            "name": "Sidharth",
            "age": "22",
            "cities": ["delhi", "Mumbai"]
        },
        {
            "name": "Anushka",
            "age": "21",
            "cities": ["delhi", "Mumbai"]
        }
    ]
    $scope.postman = postman;
    $scope.sampleObject = sampleObject
})


//controller for checking the filters


console.log("Hello world");