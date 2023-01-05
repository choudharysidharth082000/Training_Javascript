console.log("Code Started...");
var score = 0;
var bird = document.getElementById("bird");
var pointBlock = document.getElementById("pointBlock");
var mainBlock = document.getElementById("mainBlock")

mainBlock.addEventListener('animationiteration', ()=>
{
    //generate random number between 0 to 520
    var random = ((Math.random())*420);
    console.log(random);
    pointBlock.style.top = random + "px";
})


//set time out that will decrease the position of the element
setInterval(()=>{
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    console.log(birdTop)
    bird.style.top = birdTop + 3 + "px";
    // if(birdTop > 700)
    // {
    //     alert("Game Over");
    //     bird.style.top = "0px";
    // }
},10)

document.addEventListener('keyup', ()=>{
    jump();
});

//function to decrease the position of the bird
const jump = () =>{
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = birdTop - 100 + "px";
    if(birdTop < 0)
    {
        alert("Game Over");
        bird.style.top = "0px";
    }
}


// //check if the bird is touching the block
// setInterval(()=>{
//     var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
//     var blockLeft = parseInt(window.getComputedStyle(pointBlock).getPropertyValue("left"));
//     var blockTop = parseInt(window.getComputedStyle(pointBlock).getPropertyValue("top"));
//     if(blockLeft < 20 && blockLeft > -20 && birdTop > blockTop - 50)
//     {
//         alert("Game Over");
//         bird.style.top = "0px";
//     }
// }
// ,10)