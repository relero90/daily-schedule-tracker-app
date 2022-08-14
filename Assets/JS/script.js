// Variable Delcarations
var listItemEl = $(".row");
var userDescr = $(".description");
var saveBtn = $(".saveBtn");
var currentDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
var currentHour = new Date().getHours();
var savedData = [];

function populateData() {
  // populate #currentDay <p> element in header
  $("#currentDay").text(currentDate);
  // get saved user inputs from localStorage

  // render those inputs into userDescr elements
}
populateData();

// styles text areas based on the id's relationship to current hour
for (var i = 0; i < listItemEl.length; i++) {
  // if the id is equal to the current hour, add the class "present"
  if (listItemEl[i].id == currentHour) {
    userDescr[i].classList.add("present");
    // if the id is less than the current hour, add the class "past"
  } else if (listItemEl[i].id < currentHour) {
    userDescr[i].classList.add("past");
    // otherwise, add the class "future"
  } else {
    userDescr[i].classList.add("future");
  }
}

// when user clicks on any saveBtn...
saveBtn.on("click", function () {
  //   for (var i = 0; i < saveBtn.length; i++) {}
  var savedText = listItemEl.children().eq(1).val();
  savedData.push(savedText);
  console.log(savedData);
});

//   for (var i = 0; i < saveBtn.length; i++) {}
//   capture user input in textarea & save to localStorage

// function captureUserInputs() {
//   for (var i = 0; i < userDescr.length; i++) {
//     var savedEvent = userDescr.val();
//     savedData.push(savedEvent);
//     console.log(savedData[0]);
//     console.log(savedEvent);
//   }
//   //   var storedStringInput = JSON.stringify(savedScores);
//   //   localStorage.setItem("storedDataString", storedStringInput);
// }
// Grabs stored score & initial information and adds it to the current savedScores array
// function renderScoreLog() {
//   scoreBoardEl.textContent = "";
//   // Grabs items from the "storedDataString" that are stored in local storage and changes them back into object items in the array savedScores
//   savedScores = JSON.parse(localStorage.getItem("storedDataString"));
//   // For each item in the savedScores array, create a list item equal to the value of that item; append the li to scoreBoardEl
//   for (var i = 0; i < savedScores.length; i++) {
//     // troubleshoot -
//     // array duplicates old entries when adding new ones (first submit results in 1 <li>, next one 2, then 3...)
//     var pulledScore = savedScores[i];
//     var printedScore = document.createElement("li");
//     printedScore.textContent = pulledScore;
//     printedScore.setAttribute("data-index", i);
//     scoreBoardEl.appendChild(printedScore);
//   }
// }
