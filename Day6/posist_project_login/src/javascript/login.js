///<reference path="../database/database.js" />
console.log("This is the test javascript run ...");
const email = document.getElementById("email");
const password = document.getElementById("password");
const buttonSubmit = document.getElementById("buttonSubmit");
const formUser = document.getElementById("namesignup");
const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
const passwordRegex = ".{8,}";
const usernameRegex = "^[a-zA-Z0-9+_.-]+$";
const phoneRegex = "^[0-9]{10}$";


var emailVal, passwordVal;
const findUser = (username) => {
  const users = JSON.parse(window.localStorage.getItem("users"));
  const user = users.find((user) => user.username == username);
  if (user) {
    return true;
  } else {
    return false;
  }
};

//checking the email
const findEmail = (email) => {
  const users = JSON.parse(window.localStorage.getItem("users"));
  const user = users.find((user) => user.email == username);
  if (user) {
    return true;
  } else {
    return false;
  }
};

//login function
const loginPage = (email, password) => {
  const users = JSON.parse(window.localStorage.getItem("users"));
  const user = users.find(
    (user) =>
      (user.email == email || user.username == email) &&
      user.password == password
  );
  if (user) {
    return true;
  } else {
    return false;
  }
};

formUser.addEventListener("submit", (e) => {
  e.preventDefault();
  emailVal = email.value;
  passwordVal = password.value;
  console.log(emailVal, passwordVal);
  if (loginPage(emailVal, passwordVal)) {
    //setting the token to random string
    const token =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    window.localStorage.setItem("token", token);
    window.location.href = "/src/pages/home.html";
  } else {
    alert("Wrong Credentials");
  }
});

//username validation
const validateInput = (val, regex) => {
  return val.match(regex);
};
//using the event listener for checking the input
email.addEventListener("input", (e) => {
  if (
    validateInput(email.value, emailRegex) ||
    validateInput(email.value, usernameRegex)
  ) {
    email.style.border = "none";
    errorUsername.style.display = "none";
  } else {
    email.style.border = "2px solid #E50914";
    errorUsername.style.display = "block";
    errorUsername.innerHTML = "Please enter a valid email or username";
  }
});
//checking for the token
window.addEventListener("load", (e) => {
  if (window.localStorage.getItem("token")) {
    window.location.href = "/src/pages/home.html";
  }
});