///<reference path="../../app.js" />

myapp.config([
  "dashboardServiceProvider",
  function (dashboardServiceProvider) {
    dashboardServiceProvider.config("https://api.themoviedb.org/3/discover/movie?api_key=94f9f5533f279def2c111bf737c3e9a9&with_genres=27");
  },
]);
