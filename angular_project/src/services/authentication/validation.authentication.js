///<reference path="../../../app.js" />

//creating the service for the validation
const serviceValidation = myapp.factory("serviceValidation", function () {
  //regexes
  const emailRegexLogin = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$|^[a-zA-Z0-9+_.-]+$"
  const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const passwordRegex = ".{8,}";
  const usernameRegex = "^[a-zA-Z0-9+_.-]+$";
  const phoneRegex = "^[0-9]{10}$";

  //function for checking the email
  const checkEmail = (email) => {
    return email.match(emailRegex);
  };

  //function for checking the password
  const checkPassword = (password) => {
    return password.match(passwordRegex);
  };

  //function for checking the username
  const checkUsername = (username) => {
    return username.match(usernameRegex);
  };

  //function to verufy both ysername and email
  const checkEmailLogin = (email) => {
    return email.match(emailRegexLogin);
  };
  

  //function for checking the phone
  const checkPhone = (phone) => {
    return phone.match(phoneRegex);
  };
  const confirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  //   const tests = [
  //     {
  //       length: ".{8,}",
  //       id: "length",
  //       error_message: "Length Should be Atleast 10 characters long",
  //     },
  //     {
  //       length: "[A-Z]+",
  //       id: "uppercase",
  //       error_message: "Should contain atleast one uppercase letter",
  //     },
  //     {
  //       length: "[a-z]+",
  //       id: "lowercase",
  //       error_message: "Should contain atleast one lowercase letter",
  //     },
  //     {
  //       length: "[0-9]{2,}",
  //       id: "number",
  //       error_message: "Should contain atleast two numbers",
  //     },
  //   ];

  //   const checkPasswordInternal = (password) => {
  //     let errors = [];
  //     tests.forEach((test) => {
  //       if (!password.match(test.length)) {
  //         errors.push(test.error_message);
  //       }
  //     });
  //     return errors;
  //   };

  //returning the functions
  return {
    checkEmail: checkEmail,
    checkPassword: checkPassword,
    checkUsername: checkUsername,
    checkPhone: checkPhone,
    confirmPassword: confirmPassword,
    checkEmailLogin: checkEmailLogin,
    // checkPassword: checkPasswordInternal,
  };
});
