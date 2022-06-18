const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let clockTime = document.querySelector(".clock");
let clockYear = document.querySelector(".year");

const clockTimer = setInterval(() => {
  let date = new Date();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let monthDate = date.getDate();
  let session = "PM";

  if (hours < 12) {
    session = "AM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let clock = `${hours}:${minutes}:${seconds}  ${session}`;
  let clyear = `${day}, ${month} ${monthDate} ${year}`;

  clockTime.innerHTML = clock;
  clockYear.innerHTML = clyear;
}, 1000);

// console.log(clockTimer());
