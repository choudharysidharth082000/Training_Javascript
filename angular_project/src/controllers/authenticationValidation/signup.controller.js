///<reference path="../../../app.js" />



//creating the controller for handling the signup validations
const validationController = myapp.controller(
  "controllerValidate",
  function ($scope, $location, serviceValidation, $rootScope, signupService) {
    //protected route checking if the istoken is true
    if (localStorage.getItem("isToken") == "true") {
      $location.path("/dashboard");
    }
    //color
    $scope.color = "#E50914";
    //models for the input
    $scope.email = "";
    $scope.password = "";
    $scope.username = "";
    $scope.phone = "";
    $scope.cpassword = "";

    //errors for the input
    $scope.errorEmail = "Invalid Email";
    $scope.errorPassword = "Invalid Password";
    $scope.errorUsername = "Invalid Username";
    $scope.errorPhone = "Invalid Phone";
    $scope.errorConfirmPassword = "Password does not match";

    //error flags
    $scope.emailError = false;
    $scope.passwordError = false;
    $scope.usernameError = false;
    $scope.phoneError = false;
    $scope.confirmPasswordError = false;

    // $scope.emailError = true;

    //checking the mail on every input
    $scope.checkEmail = () => {
      serviceValidation.checkEmail($scope.email)
        ? ($scope.emailError = false)
        : ($scope.emailError = true);
    };
    $scope.checkUsername = () => {
      serviceValidation.checkUsername($scope.username)
        ? ($scope.usernameError = false)
        : ($scope.usernameError = true);
    };
    $scope.checkPassword = () => {
      serviceValidation.checkPassword($scope.password)
        ? ($scope.passwordError = false)
        : ($scope.passwordError = true);
    };
    $scope.checkPhone = () => {
      serviceValidation.checkPhone($scope.phone)
        ? ($scope.phoneError = false)
        : ($scope.phoneError = true);
    };
    // $scope.checkConfirmPassword = () => {serviceValidation.checkConfirmPassword($scope.password, $scope.confirmPassword) ? $scope.confirmPasswordError = false : $scope.confirmPasswordError = true;};
    $scope.checkConfirmPassword = () => {
      serviceValidation.confirmPassword($scope.password, $scope.cpassword)
        ? ($scope.confirmPasswordError = false)
        : ($scope.confirmPasswordError = true);
    };
    //function for routing
    $rootScope.route = (path) => {
      $location.path(path);
    };
    //subnmit form function
    const submitForm = ($event) => {
      $event.preventDefault();
      //chceking all the filds
      if (
        $scope.emailError ||
        $scope.passwordError ||
        $scope.usernameError ||
        $scope.phoneError ||
        $scope.confirmPasswordError ||
        $scope.email === "" ||
        $scope.password === "" ||
        $scope.username === "" ||
        $scope.phone === "" ||
        $scope.cpassword === ""
      ) {
        alert("Please fill the form correctly");
        return;
      } else {
        const user = {
          email: $scope.email,
          password: $scope.password,
          username: $scope.username,
          phone: $scope.phone,
        };
        const response = signupService.signup(user);
        console.log(response);
        if (response.status) {
          alert(response.message);
          $location.path("/login");
        } else {
          alert(response.message);
        }
      }

      console.log("Form Submitted");
    };

    $scope.submitForm = submitForm;
  }
);
