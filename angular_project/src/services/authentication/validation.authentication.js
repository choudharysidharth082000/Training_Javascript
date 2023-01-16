///<reference path="../../../app.js" />

//creating the service for the validation
const serviceValidation = myapp.factory("serviceValidation", function () {
    //regexes
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
    
    //function for checking the phone
    const checkPhone = (phone) => {
        return phone.match(phoneRegex);
    };
    
    //returning the functions
    return {
        checkEmail: checkEmail,
        checkPassword: checkPassword,
        checkUsername: checkUsername,
        checkPhone: checkPhone,
    };
});