/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js" />
/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/angular-route/1.8.3/angular-route.min.js" />


//creating the my app module
var myapp = angular.module("myapp", ["ngRoute"]);

myapp.config(function ($routeProvider){
    $routeProvider.when("/", {  
        templateUrl: "/src/templates/Home.html",
        controller: "navbar_controller"
    }).otherwise({
        redirectTo: "src/templates/404.html"
    })    
}).controller("navbar_controller", function ($scope){
    $scope.First = "Name"
})