///<reference path="../../index.js" />

myapp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "src/templates/Auth/First.html",
      controller: "controllerLogin",
    })
    .when('/welcome', {
      templateUrl: 'src/templates/Home.html',
      controller: "controllerSample",
    })
    .otherwise({
      redirectTo: "/",
    });
  $locationProvider.html5Mode(true);
});
