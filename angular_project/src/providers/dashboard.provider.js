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
    return functionObject;
  };
});
