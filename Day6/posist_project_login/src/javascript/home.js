console.log("Hello world");


const logoutButton = document.getElementById("logout");



logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    window.location.href = "/src/pages/login.html";
})

window.addEventListener("load", (event)=>
{
    if(window.location.pathname == "/src/pages/home.html" && window.localStorage.getItem("token") == null){
        window.location.href = "/src/pages/login.html";
    }
})