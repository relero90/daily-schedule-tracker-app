// Variable Delcarations
var listItemEl = $(".row");
var timeLabelEl = $(".time");
var userDescs = $(".description");
var saveBtns = $(".saveBtn");
var currentDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
var currentHour = new Date().getHours();

// styles text areas based on the id's relationship to current hour
for (var i = 0; i < listItemEl.length; i++) {
  // if the id is equal to the current hour, add the class "present"
  if (listItemEl[i].id == currentHour) {
    userDescs[i].classList.add("present");
    // if the id is less than the current hour, add the class "past"
  } else if (listItemEl[i].id < currentHour) {
    userDescs[i].classList.add("past");
    // otherwise, add the class "future"
  } else {
    userDescs[i].classList.add("future");
  }
}

function populateData() {
  // populate #currentDay <p> element in header
  $("#currentDay").text(currentDate);
  // get saved user inputs from localStorage
  var savedData = [
    localStorage.getItem("btn-9"),
    localStorage.getItem("btn-10"),
    localStorage.getItem("btn-11"),
    localStorage.getItem("btn-12"),
    localStorage.getItem("btn-13"),
    localStorage.getItem("btn-14"),
    localStorage.getItem("btn-15"),
    localStorage.getItem("btn-16"),
    localStorage.getItem("btn-17"),
    localStorage.getItem("btn-18"),
  ];
  console.log(savedData);
  // if savedData[i] is present, render into <textarea> element
  for (var i = 0; i < savedData.length; i++) {
    if (savedData[i] !== null) {
      userDescs[i].value = savedData[i];
    }
  }
}
populateData();

// when user clicks on any saveBtn, capture user input in textarea & save to localStorage with a key of the btn id
saveBtns.on("click", function (event) {
  event.preventDefault();
  // selects the target of the click event (the button)
  var clickedBtn = event.target;
  var userEventInput = clickedBtn.previousElementSibling;
  localStorage.setItem(clickedBtn.id, userEventInput.value);
});
