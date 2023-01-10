///<reference path="../../index.js" />

myapp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "src/templates/Auth/First.html",
      controller: "controller_login_auth",
    })
    .otherwise({
      redirectTo: "src/templates/404.html",
    });
  $locationProvider.html5Mode(true);
});
