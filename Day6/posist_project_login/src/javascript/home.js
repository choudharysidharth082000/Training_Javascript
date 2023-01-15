console.log("Hello world");

const logoutButton = document.getElementById("logout");
const banner = document.getElementById("containorBackdrop");
const bannerHeader = document.getElementById("headerWelcome");
const bannerDescription = document.getElementById("bannerDiscription");
const containorShows = document.getElementById("containorShows");
const containorShowsAction = document.getElementById("containorShowsAction");
const logout1 = document.getElementById("logout1");
const sidebar = document.getElementById("sidebar");
const close = document.getElementById("iconClose");
const showMore = document.getElementById("showMore");
const containorClicked = document.getElementById("containorClicked");
const containorShowsAction1 = document.getElementById("containorShowsAction1");
const cardMovieContent = document.getElementById("cardMovieContent");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const editProfile = document.getElementById("editProfile");
const editProfileMain = document.getElementById("editProfileMain");
const cardMovieContentHeader = document.getElementById(
  "cardMovieContentHeader"
);
const avatar = document.getElementById("avatar");
console.log(avatar);

const emailAccount = document.getElementById("emailUser");

// console.log("Jnrjknvjernvjknrkjnvjkrenkjvnerjkvnrjenvjknre", emailAccount)
const test = document.getElementById("test");
const enable = document.getElementById("enable");
const closeShowcase = document.getElementById("closeShowCase");
const iframe = document.getElementById("iframe");

logoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.style.display = "block";
  sidebar.style.width = "525px";
  sidebar.classList.add("d-flex");
  sidebar.classList.add("flex-column");
  //   window.localStorage.removeItem("token");
  //   window.location.href = "/src/pages/login.html";
});
logout1.addEventListener("click", (e) => {
  e.preventDefault();
  window.localStorage.removeItem("token");
  window.location.href = "/src/pages/login.html";
});
iconClose.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.style.width = "0px";
  sidebar.classList.remove("d-flex");
  sidebar.classList.remove("flex-column");
  sidebar.style.display = "none";
});

//string truncate method
const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
};

window.addEventListener("load", (event) => {
  // document.getAttribute("*").style.transition = "all 2s ease in";
  if (
    window.location.pathname == "/src/pages/home.html" &&
    window.localStorage.getItem("token") == null
  ) {
    window.location.href = "/src/pages/login.html";
  } else {
    console.log(window.localStorage.getItem("email"));
    emailAccount.innerHTML = window.localStorage.getItem("email");
  }

  //getitng the result from the api
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=94f9f5533f279def2c111bf737c3e9a9";
  const getData = fetch(url);
  getData
    .then((response) => {
      return response.json();
    })
    .then((data) => {
  
      const randomNumber = Math.floor(Math.random() * data.results.length - 1);
      banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data.results[randomNumber].backdrop_path})`;
      //changing the content in the benner Header
      bannerHeader.innerHTML = data.results[randomNumber].title;
      bannerDescription.innerHTML = truncate(
        data.results[randomNumber].overview,
        150
      );

      //creating the cards
      data.results.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("containorPoster");
        card.classList.add("max-height-poster");
        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="...">
            `;
        containorShows.appendChild(card);
        console.log("loader Terned Off");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  //action url
  const actionURL =
    " https://api.themoviedb.org/3/discover/movie?api_key=94f9f5533f279def2c111bf737c3e9a9&with_genres=27";
  const getActionData = fetch(actionURL);
  getActionData
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //creating the cards
      data.results.forEach((movie) => {
        const card = document.createElement("div");
        // adding the id to the card
        card.setAttribute("id", movie.id);
        card.classList.add("containorPoster");
        card.classList.add("max-height-poster");
        card.innerHTML = `
                <img onclick="clickedImage(this)" id="${movie.id}#@@${movie.overview}#@@${movie.original_title}" src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="...">
                `;
        containorShowsAction.appendChild(card);
      });
    });
});
const clickedImage = (item) => {
  // getting the id from the attribute
  const id = item.getAttribute("id");
  //getting the overview from the attribute
  const overview = item.getAttribute("id").split("#@@")[1];
  const title = item.getAttribute("id").split("#@@")[2];
  containorClicked.style.display = "flex";
  containorClicked.style.justifyContent = "center";
  containorClicked.style.alignItems = "center";
  containorClicked.style.flexDirection = "column";

  cardMovieContentHeader.innerHTML = title;
  cardMovieContent.innerHTML = overview;

  //fetching the video for the content
  const videoURL = `https://api.themoviedb.org/3/movie/${
    id.split("#@@")[0]
  }/videos?api_key=94f9f5533f279def2c111bf737c3e9a9&append_to_response=videos`;
  const iFrameURL = "https://www.youtube.com/embed";

  const promise = fetch(videoURL);
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("This is the video", data);
      console.log(data.results[0].key);
      const videoKey = data.results[0].key;
      const videoURL = iFrameURL + "/" + videoKey + "?start=2&autoplay";
      console.log("The Video url is : ", videoURL);
      iframe.src = videoURL;
      console.log(iframe);
    });

  //calling for fetching data
  const actionURL =
    " https://api.themoviedb.org/3/discover/movie?api_key=94f9f5533f279def2c111bf737c3e9a9&with_genres=27";
  const getActionData = fetch(actionURL);
  getActionData
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.forEach((movie) => {
        const card = document.createElement("div");
        // adding the id to the card
        card.setAttribute("id", movie.id);
        card.classList.add("containorPoster");
        card.classList.add("max-height-poster");
        card.innerHTML = `
                <img onclick="clickedImage(this)" id=${movie.id} src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="...">
                `;
        containorShowsAction1.appendChild(card);
      });
    });
};

closeShowcase.addEventListener("click", (e) => {
  containorClicked.style.display = "none";
});

//finding the user
const findUser = (username) => {
  const users = JSON.parse(window.localStorage.getItem("users"));
  if (users == null) {
    return;
  }
  const user = users.find((user) => user.username == username);
  if (user) {
    return true;
  } else {
    return false;
  }
};

const validateInput = (val, regex) => {
  return val.match(regex);
};
const usernameRegex = "^[a-zA-Z0-9+_.-]+$";
const phoneRegex = "^[0-9]{10}$";
//username validations
username.addEventListener("input", (e) => {
  if (findUser(username.value)) {
    console.log("Username already present", errorUsername);
    alert("UserName Already Exists");
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

console.log(editProfile);

editProfile.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Edit Profile");
  window.localStorage.setItem("email", username.value);
  alert("Data Updated");
  window.location.reload();
});

var opened = [false];

const toggleOPened = () => {
  if (opened[0]) {
    opened[0] = false;
  } else {
    opened[0] = true;
  }
};

editProfileMain.addEventListener("click", (e) => {
  toggleOPened();
  console.log(opened[0]);
  if (opened[0]) {
    editProfile.style.transition = "2s ease in";
    editProfile.style.display = "block";
    editProfile.classList.add("d-flex");
    editProfile.classList.add("justify-content-center");
    editProfile.classList.add("flex-column");
  } else {
    editProfile.style.transition = "1s ease in";
    editProfile.classList.remove("d-flex");
    editProfile.classList.remove("justify-content-center");
    editProfile.classList.remove("flex-column");
    editProfile.style.display = "none";
  }
});

// d-flex flex-column justify-content-start

// console.log(enable);

// enable.addEventListener("click", (e) => {
//   console.log("Hello world")
//   test.disabled = false;
// });
