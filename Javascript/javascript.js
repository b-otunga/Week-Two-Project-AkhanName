const DAYS_OF_THE_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MALE_NAMES = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const FEMALE_NAMES = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];
var akanName;
var gender;
var dateEntered;
var day;

// calculate today's date
var currentDate = new Date();

// FETCH DATE entered by user on input
function getDate() {
  dateEntered = document.getElementById("Date").value;
  dateEntered = dateEntered.toString();

  // slice dateEntered to get century(CC), year(YY), month(MM), and date(DD) to be used in formular.
  var CC = dateEntered.slice(0, 2);
  // console.log(CC);
  CC = parseInt(CC);
  var YY = dateEntered.slice(2, 4);
  YY = parseInt(YY);
  var MM = dateEntered.slice(5, 7);
  MM = parseInt(MM);
  var DD = dateEntered.slice(8, 10);
  DD = parseInt(DD);

  // CALCULATE DAY OF BIRTH
  day =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + (DD - 0.5)) %
    7;

  day = Math.floor(day);
}

// function limiting date selection to today

function noFutureDate() {
  parsedcurrentDate = Date.parse(currentDate);
  parseddateEntered = Date.parse(dateEntered);
  if (parseddateEntered > currentDate) {
    alert("You've selected a date that is later than today");
    location.reload();
    throw Error();
  }
}

// FETCH GENDER from input

function getGenderValue() {
  gender = document.querySelector("#floatingSelect").value;
  console.log(gender);

  return gender;
}

// CREATE AKAN NAME

function getAkanName() {
  getDate();

  // throw error for invalid date
  noFutureDate();

  // throw error for null date
  if (!dateEntered) {
    alert("Please pick your birthday!");
    return false;
  }

  // after all checks, now get Akan name
  if (gender === "Male") {
    akanName = MALE_NAMES[day];
    document.getElementById("result-button").innerHTML =
      "You were born on a " +
      DAYS_OF_THE_WEEK[day] +
      ". Your Akan name is " +
      akanName +
      ".";
  } else if (gender === "Female") {
    akanName = FEMALE_NAMES[y];
    document.getElementById("result-button").innerHTML =
      "You were born on a " +
      DAYS_OF_THE_WEEK[day] +
      ". Your Akan name is " +
      akanName +
      ".";
  }

  // throw error if no gender or something different was selected for gender
  else {
    alert("Please Pick Your Gender!");
  }
}
