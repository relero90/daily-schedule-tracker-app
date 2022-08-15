// Variable Delcarations
var listItemEl = $(".row");
var timeLabelEl = $(".time");
var userDescr = $(".description");
var saveBtns = $(".saveBtn");
var clickedBtn;
var currentDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
var currentHour = new Date().getHours();

function populateData() {
  // populate #currentDay <p> element in header
  $("#currentDay").text(currentDate);
  // get saved user inputs from localStorage
  var savedData = localStorage.getItem();
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

// when user clicks on any saveBtn, capture user input in textarea & save to localStorage with a key of the btn id
saveBtns.on("click", function (event) {
  event.preventDefault();
  // selects the target of the click event (the button)
  var clickedBtn = event.target;
  var userEventInput = clickedBtn.previousElementSibling;
  localStorage.setItem(clickedBtn.id, userEventInput.value);
});
