//this is the promise example
const sampleAPI = "https://api.sampleapis.com/coffee/hot";

const getData = fetch(sampleAPI);

getData.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
});