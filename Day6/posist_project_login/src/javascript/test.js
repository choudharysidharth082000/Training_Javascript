console.log("Hello wordl");
const test = document.getElementById("test");
const enable = document.getElementById("enable");
const first = document.getElementById("first");
const second = document.getElementById("second");

console.log(first,second);
enable.addEventListener("click", (e) => {
    console.log("Hello world")
    test.disabled = false;
});


first.addEventListener('input', (e)=>
{
    console.log(first.value);
    if(first.value.length < 1){
        test.disabled = true;
    }
    else if(second.value.length > 1) {
        test.disabled = false
    }
})
second.addEventListener('input', (e)=>
{
    if(second.value.length < 1){
        length[0] = false;
    }
    else if(first.value.length > 1) {
        test.disabled = false
    }
})