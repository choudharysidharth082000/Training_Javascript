///<reference path="../../../app.js" />

const serviceDashboard = myapp.factory(
  "dashboardServiceExtraFunctions",
  function ($http) {
    //getting the dashboard data
    const functionObject = {};

    //filter function
    functionObject.updateProfile = (user, usernameUser, phoneUser) => {
      console.log(user, usernameUser);

      const { username, phone } = user;
      const users = JSON.parse(localStorage.getItem("users"));
      console.log(users);
      const updatedUsers = users.map((data) => {
        if (data.username === user.username) {
          data.username = usernameUser;
          data.phone = phoneUser;
        }
        return data;
      });
      console.log(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      //changing the localstorage
      const userLocal = JSON.parse(localStorage.getItem("user"));
      userLocal.username = usernameUser;
      userLocal.phone = phoneUser;
      localStorage.setItem("user", JSON.stringify(userLocal));

      return {
        status: true,
        message: "Update Profile Success",
      };
    };
    functionObject.addToWishlist = (userID, productID) =>
    {
        const users = JSON.parse(localStorage.getItem("users"));
        const updatedUsers = users.map((data) => {
            if (data.username === userID && data.wishlist.includes(productID) === false) {
                data.wishlist.push(productID);                
            }
            return data;
        });
        //adding the wishlst to the localstorage
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) ? JSON.parse(localStorage.getItem("wishlist")) : [];
        //checking if the wishlist incliuces the product or not
        if (wishlist.includes(productID) === false) {
            wishlist.push(productID);
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return {
            status: true,
            message: "Added to wishlist",
        };
    }
    //function to remove item from the wiishlist
    functionObject.removeFromWishlist = (userID, productID) => {
        const users = JSON.parse(localStorage.getItem("users"));
        //remooving the item from the main database
        const updatedUsers = users.map((data) => {
            if (data.username === userID && data.wishlist.includes(productID) === true) {
                data.wishlist = data.wishlist.filter((item) => item !== productID);
            }
            return data;
        });
        //adding the wishlst to the localstorage
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) ? JSON.parse(localStorage.getItem("wishlist")) : [];
        //checking if the wishlist incliuces the product or not
        var wishlistNew;
        if (wishlist.includes(productID) === true) {
            console.log("Entered the if block");
            wishlistNew = wishlist.filter((item) => item !== productID);                        
        }
        console.log(wishlistNew);
        localStorage.setItem("wishlist", JSON.stringify(wishlistNew));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return {
            status: true,
            message: "Removed from wishlist",
        };
    }
    return functionObject;
  }
);
