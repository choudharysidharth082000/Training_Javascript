console.log("Hello world");

const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const buttonSubmit = document.getElementById("buttonSubmit");
const formUser = document.getElementById("namesignup");
const errorUsername = document.getElementById("errorUsername");
const confirmPassword = document.getElementById("cpassword");
const phone = document.getElementById("phone");
const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
const passwordRegex = ".{8,}";
const usernameRegex = "^[a-zA-Z0-9+_.-]+$";
const phoneRegex = "^[0-9]{10}$";

var passwordVal, emailVal, usernameVal;

//findinf the user if it exists
formUser.addEventListener("submit", (e) => {
  e.preventDefault();
  emailVal = email.value;
  passwordVal = password.value;
  usernameVal = username.value;

  const finalObj = {
    email: emailVal,
    password: passwordVal,
    username: usernameVal,
    phoneNumber: phone.value
  };
  if (window.localStorage.getItem("users") != null) {
    const users = JSON.parse(window.localStorage.getItem("users"));
    users.push(finalObj);
    window.localStorage.setItem("users", JSON.stringify(users));
  } else {
    window.localStorage.setItem("users", JSON.stringify([finalObj]));
  }
  //going to the home route
  //   window.location.href = "/src/pages/home.html";
  alert("Login Success");
  window.location.href = "/src/pages/home.html";
});

//finding the user
const findUser = (username) => {
  const users = JSON.parse(window.localStorage.getItem("users"));
  const user = users.find((user) => user.username == username);
  if (user) {
    return true;
  } else {
    return false;
  }
};
console.log(findUser("cjnvjrenjjken"));

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
username.addEventListener("input", (e) => {
  // if(findUser(username)){
  //     username.style.border = `2px solid red`
  //   }
  if (validateInput(username.value, usernameRegex)) {
    username.style.border = "none";
    errorUsername.style.display = "none";
  } else {
    username.style.border = "2px solid #E50914";
    errorUsername.style.display = "block";
    errorUsername.innerHTML = "Please enter a valid username";
  }
});

//password event listener
password.addEventListener("input", (e) => {
  if (validateInput(password.value, passwordRegex)) {
    password.style.border = "none";
    errorUsername.style.display = "none";
  } else {
    password.style.border = "2px solid #E50914";
    errorUsername.style.display = "block";
    errorUsername.innerHTML = "Password must be 8 characters long";
  }
});

//phone number validations
phone.addEventListener("input", (e) => {
  if (validateInput(phone.value, phoneRegex)) {
    phone.style.border = "none";
    errorUsername.style.display = "none";
  } else {
    phone.style.border = "2px solid #E50914";
    errorUsername.style.display = "block";
    errorUsername.innerHTML = "Please enter a valid phone number";
  }
});

//checking the password and confirm password
confirmPassword.addEventListener("input", (e) => {
  if (password.value === confirmPassword.value) {
    confirmPassword.style.border = "none";
    errorUsername.style.display = "none";
  } else {
    confirmPassword.style.border = "2px solid #E50914";
    errorUsername.style.display = "block";
    errorUsername.innerHTML = "Password does not match";
  }
});


//going to the main page if there is token
//checking for the token
window.addEventListener("load", (e) => {
  if (window.localStorage.getItem("token")) {
    window.location.href = "/src/pages/home.html";
  }
});