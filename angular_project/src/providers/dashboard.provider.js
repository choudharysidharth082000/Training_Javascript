///<reference path="../../app.js" />

const providerDashboard = myapp.provider("dashboardService", function () {
  var baseURL = "";
  this.config = function (url) {
    baseURL = url;
  };
  this.$get = function ($http, $log, $rootScope) {
    $rootScope.baseURL = baseURL;
    const functionObject = {};
    functionObject.getDashboardData = function (callback) {
      $http({
        method: "GET",
        url: baseURL,
      })
        .then((result) => {
          callback(result);
        })
        .catch((error) => {
          $log.error(error);
        });
    };
    functionObject.getMovieDetails = function (id, callback) {
      $http({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing?api_key=94f9f5533f279def2c111bf737c3e9a9",
      })
        .then((result) => {
          callback(result);
        })
        .catch((error) => {
          $log.error(error);
        });
    };

    return functionObject;
  };
});
