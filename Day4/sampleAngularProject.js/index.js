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




//using the click directive for the controller

myapp.controller("ng-click-directive-test", function($scope){
    var sampleNumber = 1000000000;
    const sampleObject = 
    [
        {
            "technology": "C++",
            likes: 0,
            dislikes: 0
        },
        {
            "technology": "C-Sharp",
            likes: 0,
            dislikes: 0
        },
        {
            "technology": "Javascript",
            likes: 0,
            dislikes: 0
        },
        {
            "technology": "Python",
            likes: 0,
            dislikes: 0
        }
    ]


    $scope.technologies = sampleObject;
    function likes(technology){
        technology.likes++;
    }
    function dislikes(technology){
        technology.dislikes++;
    }
    $scope.AddLikes = likes;
    $scope.AddDislikes = dislikes;
    $scope.sampleNumber = sampleNumber;
    $scope.stepValue =2;
})
//controller for checking the filters

myapp.controller("ng-filter-test", function ($scope){
    //using the app
    var number = "16";
    var randomString = "Sidharth"
    var dateUser = "Sun Jan 08 2023 18:33:53 GMT+0530 (India Standard Time) {}"
    $scope.numberVal = number;
    $scope.dateUser = dateUser;
    $scope.randomString = randomString
})


//controller for testing the search text
myapp.controller("search-control", function ($scope){
    $scope.test = "test";
    $scope.sampleObject = 
    [
        {
            "technology": "C++",
            city: "Delhi",
            likes: 0,
            dislikes: 0
        },
        {
            "technology": "C-Sharp",
            city: "Mumbai",
            likes: 0,
            dislikes: 0
        },
        {
            "technology": "Javascript",
            city: "Mumbai",
            likes: 0,
            dislikes: 0
        },
        {
            "technology": "Python",
            city: "Mumbai",
            likes: 0,
            dislikes: 0
        }
    ]

})



//controller for testing the http method
myapp.controller("httpService", function($scope, $http, $log){
    function successCallback(data){
        $scope.dataNew = data;
    }
    function errorCallBack(error){
        $log.error(error);
        $scope.error = error;
    }
    // $http.get("https://api.sampleapis.com/coffee/hot").then(data =>
    // {
    //     console.log(data.data);
    //     $scope.dataNew = data.data
        
    // }).catch(err => console.log(err)
    // ) 
    $http({
        method: 'get',
        url: "https://api.sampleapis.com/coffee/hot"
    }).then(successCallback, errorCallBack);
})


console.log("Hello world");