/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js" />
/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/angular-route/1.8.3/angular-route.min.js" />
//creating the my app module
var myapp = angular.module("myapp", ["ngRoute"]);

// myapp
//   .config(function ($routeProvider, $locationProvider) {
//     $routeProvider
//       .when("/", {
//         templateUrl: "/src/templates/Auth/First.html ",
//         controller: "navbar_controller",
//       })
//       .when("/login", {
//         templateUrl: "/src/templates/Login.html",
//         controller: "login_controller",
//       })
//       .otherwise({
//         redirectTo: "src/templates/404.html",
//       });
//     $locationProvider.html5Mode(true);
//   })
//   .controller("navbar_controller", function ($scope) {
//     const dataFrontPage = {
//       frontTagline: "Watch anywhere. Cancel anytime ",
//       tagLine:
//         "Ready to watch? Enter your email to create or restart your membership.",
//     };
//     $scope.dataFrontPage = dataFrontPage;
//   })
//   .controller("login_controller", function ($scope) {
//     $scope.NameElement = "Hello world";
//   });
