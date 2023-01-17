///<reference path="../../../app.js" />

const controllerDashboard = myapp.controller(
  "dashboardController",
  function ($scope, $location, loginService, dashboardService, $rootScope) {
    //checking if the login is true then only in dashboard
    if (localStorage.getItem("isToken") == false) {
      console.log("Helli world");
      $location.path("/login");
    }
    dashboardService.getDashboardData(function (data) {
      $scope.message = "Hello World";
      $scope.data = data.data.results;
      //random index
      var randomIndex = Math.floor(Math.random() * $scope.data.length);
      //creating the base url path
      $scope.backdrop =
        "https://image.tmdb.org/t/p/original" +
        $scope.data[randomIndex].backdrop_path;
      console.log($scope.backdrop);
    });

    $scope.message = "Hello World";
    $scope.logout = loginService.logout();
    //innitialize the users array in the localstorage
  }
);
