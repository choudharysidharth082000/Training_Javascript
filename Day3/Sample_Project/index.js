console.log("Backend Code Started From Here");

// const inputBox = document.getElementById("inputBox");
// const buttonBox = document.getElementById("buttonBox");
// console.log(inputBox.__proto__);
// var name;
// inputBox.addEventListener("input", function (e) {
//   name = e.target.value;
// });

// buttonBox.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(name);
// });
const ans = document.getElementById("ans");
const containorData = document.getElementById("containorData");
const api = "https://api.ampleapis.com/codingresources/codingResources";
var allData;
const getAPIData = () => {
  var promise = fetch(api);
  promise
    .then((response) => {
      return response.json();
    })
    // .catch((err) => {
    //   console.log("This is the first error");
    //   alert(err);
    //   console.log(err);
    // })
    .then((data) => {
      var sampleArray = [];
      data.forEach((element) => {
        sampleArray.push(element.description);
      });
      console.log(sampleArray);
      containorData.innerHTML = sampleArray;
    })
    .catch((err) => {
      console.log("This is the error");
      console.log(err);
    });
};
ans.addEventListener("click", () => {
  getAPIData();
});
