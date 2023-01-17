///<reference path="../../../app.js" />

const controllerDashboard = myapp.controller(
  "dashboardController",
  function ($scope, $location, loginService, dashboardService, $rootScope, $http) {
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
    //calling the fucction for the discoveries
    dashboardService.getMovieDetails("27", function (data) {
      console.log("Thisis the tse new daga", data);
      $scope.second = data.data.results;
    });

    $scope.message = "Hello World";
    $scope.logout = loginService.logout();

    //clicked Containor
    $scope.containorOpen = false;
    $scope.containorKeyVideo = "";
    $scope.videoID = "";
    $scope.videoHeaderName = "";
    $scope.videoOverview = "";

    $scope.clickedChangeBanner = (
      containorHeader,
      containorOverview,
      videoID
    ) => {
      console.log(containorHeader, containorOverview, videoID);
      $scope.videoURL = `https://api.themoviedb.org/3/movie/${videoID}/videos?api_key=94f9f5533f279def2c111bf737c3e9a9&append_to_response=videos`;
      $scope.containorOpen = true;
      $scope.videoHeaderName = containorHeader;
      $scope.videoOverview = containorOverview;
      $http
        .get($scope.videoURL)
        .then((result) => {
          console.log(result);
          $scope.containorKeyVideo = result.data.results[0].key;
          $scope.youtubeIframe = `https://www.youtube.com/embed/${$scope.containorKeyVideo}?start=2&autoplay`;
          const iframe = document.getElementById("iframe");
          iframe.src = $scope.youtubeIframe;
          console.log($scope.youtubeIframe)
        })
        .catch((err) => {
          console.log(err);
        });

      $scope.videoID = videoID;
    };

    //closing the containor
    $scope.closeContainor = () => {
      $scope.containorOpen = false;
    };
    

    //innitialize the users array in the localstorage
  }
);
