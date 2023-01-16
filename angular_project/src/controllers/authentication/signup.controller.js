///<reference path="../../../app.js" />
//creating the controller for handling the signup validations
const validationController = myapp.controller(
  "controllerValidate",
  function ($scope, serviceValidation) {
    $scope.sampleText = "Hello world";

    //models foe the email username, password , confirm password and phone
    $scope.email = "";
    $scope.username = "";
    $scope.password = "";
    $scope.confirmPassword = "";
    $scope.phone = "";
    $scope.count = -1;



    //validating the each input function
    $scope.emailValid = false;
    $scope.errorInput = "";
    $scope.usernameValid = false;
    $scope.passwordValid = false;
    $scope.passwordMatch = false;
    $scope.phoneValid = false;
    
    
    //consoling every input while it is typing
    $scope.$watch("email", function (newValue, oldValue) {
      //validating the email
      if (serviceValidation.checkEmail(newValue)) {
        $scope.emailValid = true;
        $scope.errorInput = "";
      } else {
        $scope.emailValid = false;
        $scope.errorInput = "Invalid Email";
      }
    });
    //username
    $scope.$watch("username", function (newValue, oldValue) {
      console.log(newValue);
      //validating the username
      if (serviceValidation.checkUsername(newValue)) {
        $scope.usernameValid = true;
        $scope.errorInput = "";
      } else {
        $scope.usernameValid = false;
        $scope.errorInput = "Invalid Username";

      }
    });
    //password
    $scope.$watch("password", function (newValue, oldValue) {
      //validating the password
      if (serviceValidation.checkPassword(newValue)) {
        $scope.passwordValid = true;
        $scope.errorInput = "";
      } else {
        $scope.passwordValid = false;
        $scope.errorInput = "Invalid Password";
      }
    });

    //watching the password and the confirm password fields
    $scope.$watchGroup(
      ["password", "cpassword"],
      function (newValues, oldValues) {
        if (newValues[0] === newValues[1]) {
          $scope.passwordMatch = true;
          $scope.errorInput = "";
        } else {
          $scope.passwordMatch = false;
          $scope.errorInput = "Password does not match";
        }
      }
    );

    $scope.errorInput = "Error";

    //regexes
    //subnmit form function
    const submitForm = ($event) => {
      $event.preventDefault();
      //checking the email valid
      if (!$scope.emailValid) {
        alert("Email is not valid");
        return;
      }
      //checking the password valid
      if (!$scope.passwordValid) {
        alert("Password is not valid");
        return;
      }
      console.log($scope.email);
      console.log("Form submitted");
    };
    $scope.submitForm = submitForm;
  }
);
