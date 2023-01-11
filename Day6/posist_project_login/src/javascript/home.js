console.log("Hello world");

window.addEventListener("load", (event)=>
{
    if(window.location.pathname == "/src/pages/home.html" && window.localStorage.getItem("token") == null){
        window.location.href = "/src/pages/login.html";
    }
})