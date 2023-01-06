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
        "Age": "23"
    }
    $scope.message = "Hello world"
    $scope.test = sample
    console.log($scope);
})


console.log("Hello world");