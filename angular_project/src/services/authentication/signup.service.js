///<reference path = "../../../app.js" />

const serviceSignup = myapp.factory("signupService", function ($rootScope) {
  //signup function
  const signup = (user) => {
    //get the users from the localstorage
    let users = JSON.parse(localStorage.getItem("users"));
    //check the user is present or not
    let checkUser = users.filter((data) => {
      if (data.email == user.email || data.username === user.username) {
        return data;
      }
    });
    //if user is present then redirect to the home page
    if (checkUser.length > 0) {
      return {
        status: false,
        message: "User already exist",
      };
    } else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      return {
        status: true,
        message: "Signup Success",
        data: user.email,
      };
    }
  };
  return { signup };
});
