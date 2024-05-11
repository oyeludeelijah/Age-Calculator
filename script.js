const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");

const submit = document.getElementById("submit");

const dayResult = document.getElementById("days-result");
const monthResult = document.getElementById("month-result");
const yearResult = document.getElementById("year-result");

const errorMsgs = document.querySelectorAll(".error-msg");
const errorMsg1 = document.getElementById("error-msg1");
const errorMsg2 = document.getElementById("error-msg2");
const errorMsg3 = document.getElementById("error-msg3");

const labels = document.querySelectorAll(".label");
const inputs = document.querySelectorAll(".inputs");

let day = 0;
let month = 0;
let year = 0;

function updatedStyles() {
  labels.forEach((labels) => {
    labels.style.color = "#ff00008f";
  });
  inputs.forEach((inputs) => {
    inputs.style.border = "1px solid #ff00008f";
  });
}

// Event listener for day input
dayInput.addEventListener("input", () => {
  day = parseInt(dayInput.value);
});

// Event listener for month input
monthInput.addEventListener("input", () => {
  month = parseInt(monthInput.value);
});

// Event listener for month input
yearInput.addEventListener("input", () => {
  year = parseInt(yearInput.value);
});

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// Update the year input field with the current year as placeholder
// yearInput.placeholder = currentYear;

// Event listener for month input
submit.addEventListener("click", () => {
  if (day === 0 && month === 0 && year === 0) {
    errorMsgs.forEach((errorMsg) => {
      errorMsg.textContent = "This field is required";
    });
  } else {
    errorMsgs.forEach((errorMsg) => {
      errorMsg.textContent = "";
    });

    if (day > 31) {
      errorMsg1.textContent = "Must be a valid day";
      updatedStyles();
    }
    if (month > 12) {
      errorMsg2.textContent = "Must be a valid month";
      updatedStyles();
    }
    if (year > currentYear) {
      errorMsg3.textContent = "Must be in the past";
      updatedStyles();
    } else {
      calculateAge();
    }
  }
});

// Function to calculate tip
function calculateAge() {
  if (day > 0 && month > 0 && year > 0) {
    let birthDate = new Date(year, month - 1, day);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
    }

    if (days < 0) {
      months--;
      let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      months += 12;
    }

    yearResult.textContent = years;
    monthResult.textContent = months;
    dayResult.textContent = days;
  }
}
