///<reference path="../../../app.js" />

const serviceLogin = myapp.factory("loginService", function ($rootScope) {
  //login function
  const login = (user) => {
    //get the users from the localstorage
    let users = JSON.parse(localStorage.getItem("users"));
    // check the user is present or not
    let checkUser = users.filter((data) => {
      if (
        (data.email == user.email || user.email == data.username) &&
        data.password == user.password
      ) {
        return data;
      }
    });

    //if user is present then redirect to the home page
    if (checkUser.length > 0) {
      console.log(checkUser);
      $rootScope.user = checkUser[0];
      localStorage.setItem("isToken", true);
      localStorage.setItem("user", JSON.stringify(checkUser[0]));
      return {
        status: true,
        messgae: "Login Success",
        data: checkUser[0],
      };
    } else {
      alert("Please enter valid email and password");
    }
  };
  //logout service
  const logout = () => {
    localStorage.setItem("isToken", false);
    $rootScope.user = null;
  };
  return { login, logout };
});
