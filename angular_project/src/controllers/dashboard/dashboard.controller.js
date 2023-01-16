///<reference path="../../../app.js" />

const controllerDashboard = myapp.controller("dashboardController", function ($scope, $location){
    //checking if the login is true then only in dashboard
    if(localStorage.getItem("isToken") == "false"){
        $location.path("/login");
    }
    $scope.message = "Hello World";
    $scope.logout = () => {
        localStorage.setItem("isToken", false);
        $location.path("/login");
    }
    //innitialize the users array in the localstorage
})
