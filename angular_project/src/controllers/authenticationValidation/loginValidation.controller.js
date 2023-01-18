///<reference path="../../../app.js" />

myapp.controller(
  "controllerValidateLogin",
  function ($scope, serviceValidation, loginService, $location, $rootScope) {
    console.log($rootScope.sampleMessage);
    if (localStorage.getItem("users") == null) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    //protected route checking if the istokenp is true
    if (localStorage.getItem("isLoggedIn") == "true") {
        $location.path("/dashboard");
    }
    $scope.emailError = false;
    $scope.emailErrorMessage = "Invalid Email";
    $scope.email = "";
    $scope.password = "";

    //onchange function for checking the valid email or not
    $scope.checkEmail = () => {
      console.log($scope.email);
      console.log($scope.emailError);
      serviceValidation.checkEmailLogin($scope.email)
        ? ($scope.emailError = false)
        : ($scope.emailError = true);
    };

    //submit form
    $scope.submitForm = ($event) => {
      $event.preventDefault();
      if ($scope.emailError == false) {
        const user = {
          email: $scope.email,
          password: $scope.password,
        };
        console.log(user);
        var response = loginService.login(user);
        if(response.status){
            alert(response.messgae);
            $location.path("/dashboard");
        }else{
            alert(response.messgae);
        }
      } else {
        alert("Please enter valid email");
      }
    };
  }
);
