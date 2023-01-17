///<reference path="../../../app.js" />

const controllerDashboard = myapp.controller(
  "dashboardController",
  function ($scope, $location, loginService, dashboardService, $rootScope) {
    //checking if the login is true then only in dashboard
    if (localStorage.getItem("isToken") == false) {
      console.log("Hello world from the dashboard");
      $location.path("/login");
    }
    //string truncate method
    const truncate = (string, n) => {
      return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
    };

    $scope.posterPath = "https://image.tmdb.org/t/p/original";

    //function to trim the text
    dashboardService.getDashboardData(function (data) {
      $scope.message = "Hello World";
      $scope.data = data.data.results;
      //random index
      var randomIndex = Math.floor(Math.random() * $scope.data.length);
      //creating the base url path
      $scope.randomIndex = randomIndex;
      $scope.bannerOverview = truncate($scope.data[randomIndex].overview, 200);
      console.log($scope.data[randomIndex]);
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
