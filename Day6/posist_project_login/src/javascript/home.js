console.log("Hello world");

const logoutButton = document.getElementById("logout");
const banner = document.getElementById("containorBackdrop");
const bannerHeader = document.getElementById("headerWelcome");
const bannerDescription = document.getElementById("bannerDiscription");
const containorShows = document.getElementById("containorShows");
const containorShowsAction = document.getElementById("containorShowsAction");
const logout1= document.getElementById("logout1");
const sidebar = document.getElementById("sidebar");
const close = document.getElementById("iconClose");
console.log(bannerHeader);

logoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.style.width = "575px"
//   window.localStorage.removeItem("token");
//   window.location.href = "/src/pages/login.html";
});
logout1.addEventListener("click", (e) => {
  e.preventDefault();
  window.localStorage.removeItem("token");
  window.location.href = "/src/pages/login.html";
});
iconClose.addEventListener('click', (e)=>
{
    e.preventDefault();
    console.log("Hello world");
    sidebar.style.width = "0px"
})

//string truncate method
const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
};

window.addEventListener("load", (event) => {
    console.log("Loader Started");
  if (
    window.location.pathname == "/src/pages/home.html" &&
    window.localStorage.getItem("token") == null
  ) {
    window.location.href = "/src/pages/login.html";
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
      console.log(data.results);
      //adding the background image to the the containor div
      const randomNumber = Math.floor(Math.random() * data.results.length - 1);
      banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data.results[randomNumber].backdrop_path})`;
      //changing the content in the benner Header
      bannerHeader.innerHTML = data.results[randomNumber].title;
      bannerDescription.innerHTML = truncate(data.results[randomNumber].overview , 150);

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
      console.log(data.results);
      //creating the cards
      data.results.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("containorPoster");
        card.classList.add("max-height-poster");
        card.innerHTML = `
                <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="...">
                `;
        containorShowsAction.appendChild(card);
      });
    });
});
