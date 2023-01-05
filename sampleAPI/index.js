console.log("Hello world");
const api = "https://api.sampleapis.com/coffee/hot";

const getData = fetch(api)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .catch((error) => {
    console.log(error);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
// Compare this snippet from Day3/fetchAPIAsync.js:
// //this is the async await example
// const sampleAPI = "https://api.sampleapis.com/coffee/hot";
