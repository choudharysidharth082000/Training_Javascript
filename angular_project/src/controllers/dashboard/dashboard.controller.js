///<reference path="../../../app.js" />

const controllerDashboard = myapp.controller(
  "dashboardController",
  function (
    $scope,
    $location,
    loginService,
    dashboardService,
    dashboardServiceExtraFunctions,
    $rootScope,
    $http
  ) {
    //checking if the login is true then only in dashboard
    console.log(localStorage.getItem("isLoggedIn"));

    if (localStorage.getItem("isLoggedIn") == "false") {
      console.log("Hello world from the dashboard");
      $location.path("/login");
    }

    $scope.oldValUsername = JSON.parse(localStorage.getItem("user")).username;
    $scope.oldValPhone = JSON.parse(localStorage.getItem("user")).phone;
    console.log("username is ", $scope.oldValUsername);
    $scope.posterPath = "https://image.tmdb.org/t/p/original";
    $scope.message = "Hello World";
    $scope.logout = () => {
      console.log("Logout function is called");
      localStorage.setItem("isLoggedIn", false);
      $location.path("/login");
    };
    //clicked Containor
    $scope.containorOpen = false;
    $scope.classCustom =
      "w-50 m-2 rounded-sm py-2 text-white bg-success outline-none";
    $scope.containorKeyVideo = "";
    $scope.videoID = "";
    $scope.videoHeaderName = "";
    $scope.videoOverview = "";
    $scope.openEditProfie = false;
    $scope.wishliastButtonContent = "Add to Wishlist";

    //user if exists
    $scope.user = JSON.parse(localStorage.getItem("user"));

    //string truncate method
    const truncate = (string, n) => {
      return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
    };

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

    $scope.clickedChangeBanner = (
      containorHeader,
      containorOverview,
      videoID
    ) => {
      //checking if it already exists on the wishlist
      let wishlist = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlist.includes(videoID)) {
        $scope.classCustom =
          "w-50 m-2 rounded-sm py-3 text-white mainColorbg outline-none";
        $scope.wishliastButtonContent = "Remove from Wishlist";
      } else {
        $scope.classCustom =
          "w-50 m-2 rounded-sm py-3 text-white bg-success outline-none";
        $scope.wishliastButtonContent = "Add to Wishlist";
      }
      console.log(containorHeader, containorOverview, videoID);
      $scope.videoURL = `https://api.themoviedb.org/3/movie/${videoID}/videos?api_key=94f9f5533f279def2c111bf737c3e9a9&append_to_response=videos`;
      $scope.containorOpen = true;
      $scope.videoHeaderName = containorHeader;
      $scope.videoOverview = containorOverview;
      $scope.videoID = $scope.videoID;
      $http
        .get($scope.videoURL)
        .then((result) => {
          console.log(result);
          $scope.containorKeyVideo = result.data.results[0].key;
          $scope.youtubeIframe = `https://www.youtube.com/embed/${$scope.containorKeyVideo}?start=2&autoplay`;
          const iframe = document.getElementById("iframe");
          iframe.src = $scope.youtubeIframe;
          console.log($scope.youtubeIframe);
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

    $scope.openSidebar = false;
    //open the sidebar
    $scope.openSideBarFunction = () => {
      console.log("Function Clicked");
      //findifn the items from teh wishlist
      $scope.wishlist = JSON.parse(localStorage.getItem("wishlist"));
      $scope.wishlistData = [];
      $scope.wishlist.forEach((element) => {
        $scope.data.forEach((item) => {
          if (item.id == element) {
            $scope.wishlistData.push(item);
          }
        });
      });
      console.log($scope.wishlistData);
      $scope.openSidebar = true;
    };
    //close the sidebar
    $scope.closeSideBarFunction = () => {
      console.log("Function Clicked");
      $scope.openSidebar = false;
    };

    $scope.updateProfile = ($event) => {
      $event.preventDefault();
      console.log("Update Profile");
      const ans = {
        username: $scope.user.username,
        phone: $scope.user.phone,
      };
      const response = dashboardServiceExtraFunctions.updateProfile(
        ans,
        $scope.oldValUsername,
        $scope.oldValPhone
      );
      //mounting the component
      if (response.status == false) {
        alert("Wrong Username Provided");
      } else {
        alert(response.message);
        window.location.reload();
      }
    };

    //open profile
    $scope.openProfile = () => {
      console.log("Hello world");
      console.log($scope.openEditProfie);
      if ($scope.openEditProfie == false) {
        $scope.openEditProfie = true;
      } else {
        $scope.openEditProfie = false;
      }
    };

    //add item to the wishlist
    $scope.addToWishlist = (id) => {
      console.log("Add to wishlist", id);
      let wishlist = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlist.includes(id)) {
        const response = dashboardServiceExtraFunctions.removeFromWishlist(
          $scope.user.username,
          id
        );
        if (response.status == false) {
          alert("Something went wrong");
        } else {
          console.log(response.message);
          $scope.classCustom =
            "w-50 m-2 rounded-sm py-3 text-white bg-success outline-none";
          $scope.wishliastButtonContent = "Add to Wishlist";
        }
      } else {
        const response = dashboardServiceExtraFunctions.addToWishlist(
          $scope.user.username,
          id
        );

        if (response.status == false) {
          alert("Something went wrong");
        } else {
          console.log(response.message);
          $scope.classCustom =
            "w-50 m-2 rounded-sm py-3 text-white mainColorbg outline-none";
          $scope.wishliastButtonContent = "Remove from Wishlist";
        }
      }
    };


    $scope.openWishlist = false;
    //open the wishlist
    $scope.openWishlistFunction = () => {
      console.log("Function Clicked");
      //findifn the items from teh wishlist
      if($scope.openWishlist == false){
        $scope.openWishlist = true;
      }else{
        $scope.openWishlist = false;
      }
    };


    //innitialize the users array in the localstorage
  }
);
