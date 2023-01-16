///<reference path="../../../app.js" />


myapp.controller("mainController", function ($scope){
    $scope.message = "Hello World";
    //innitialize the users array in the localstorage
    if(localStorage.getItem("users") == null){
        localStorage.setItem("users", JSON.stringify([]));
    }
})