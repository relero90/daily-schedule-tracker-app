// inserts currentDate as text content in jumbotron element
var currentDate = moment();
$("#currentDay").text(currentDate.format("MMMM Do, YYYY"));

function pullExistingSchedule() {
  // grab existing user inputs saves in localStorage
  // render those inputs into textareas
}
pullExistingSchedule();

// when user clicks on saveBtn...
var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  //   capture user input in textarea and save to localStorage
});

var currentTime = moment().format("LT");
var hourLabel = $("label");
console.log(hourLabel); //returns an object: label.hour

// Maybe I want an array of the values?
// var hourNum = [
//   "9 AM",
//   "10 AM",
//   "11 AM",
//   "12 PM",
//   "1 PM",
//   "2 PM",
//   "3 PM",
//   "4 PM",
//   "5 PM",
//   "6 PM",
// ];

// If conditionals something like this...
// if (1 <= currentTime && currentTime < 2) {
//   textarea.attr("class", present);
// }
// parseInt(hourLabel);
// console.log(hourNum);
