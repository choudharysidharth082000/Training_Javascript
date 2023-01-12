console.log("Hello world");
alert("Width Supported for now is 1800px");

const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const buttonSubmit = document.getElementById("buttonSubmit");
const formUser = document.getElementById("namesignup");
const errorUsername = document.getElementById("errorUsername");
const confirmPassword = document.getElementById("cpassword");
const phone = document.getElementById("phone");
const errorPassword = document.getElementById("passwordValidate");
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
    phoneNumber: phone.value,
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
  if(users == null){
    return;
  }
  const user = users.find((user) => user.username == username);
  if (user) {
    return true;
  } else {
    return false;
  }
};
// console.log(findUser("cjnvjrenjjken"));

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
//username validations
username.addEventListener("input", (e) => {
  if (findUser(username.value)) {
    console.log("Username already present", errorUsername);
    alert("UserName Already Exists")
    // username.style.border = "2px solid #E50914";
    errorUsername.style.display = "block";
    errorUsername.innerHTML = "Username already exists";
  }
  // else {
  //   username.style.border = "none";
  //   errorUsername.style.display = "none";
  // }
  if (validateInput(username.value, usernameRegex)) {
    username.style.border = "none";
    errorUsername.style.display = "none";
  } else {
    username.style.border = "2px solid #E50914";
    errorUsername.style.display = "block";
    errorUsername.innerHTML = "Please enter a valid username";
  }
});

console.log(password);
//password event listener
password.addEventListener("input", (e) => {
  console.log("Hello world");
  if (password.value.length === 0) {
    errorPassword.style.display = "none";
  } else {
    errorPassword.style.display = "block";
  }
  const tests = [
    {
      length: ".{8,}",
      id: "length",
      error_message: "Length Should be Atleast 10 characters long",
    },
    {
      length: "[A-Z]+",
      id: "uppercase",
      error_message: "Should contain atleast one uppercase letter",
    },
    {
      length: "[a-z]+",
      id: "lowercase",
      error_message: "Should contain atleast one lowercase letter",
    },
    {
      length: "[0-9]{2,}",
      id: "number",
      error_message: "Should contain atleast two numbers",
    },
  ];
  //for every input checking every regex
  tests.forEach((test) => {
    const element = document.getElementById(test.id);
    if (password.value.match(test.length)) {
      element.style.color = "green";
    } else {
      element.style.color = "#E50914";
    }
  });
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
