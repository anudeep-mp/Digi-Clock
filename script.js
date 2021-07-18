"use strict";

function currentTime() {
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var month = date.getMonth();
  var curr_date = date.getDate();
  var year = date.getFullYear();
  var month_name = [
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
  var showDay = document.querySelectorAll(".day_wrapper span");
  var midday = "AM";
  midday = hour >= 12 ? "PM" : "AM";

  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  curr_date = updateTime(curr_date);
  document.querySelector("#time").innerHTML = `${hour}:${min}`;
  document.querySelector("#sec").innerHTML = `${sec}`;
  document.querySelector("#med").innerHTML = `${midday}`;
  document.querySelector(
    "#full_date"
  ).innerHTML = `${month_name[month]}${curr_date} ${year}`;
  showDay[day].style.opacity = "1";

  var half = hour === "AM" ? "FH" : "SH";
  var wishing = "MORNING";

  if (half === "FH") {
    if (hour < 4) wishing = "NIGHT";
    else wishing = "MORNING";
  }

  if (half === "SH") {
    if (hour < 4) wishing = "AFTERNOON";
    else wishing = "EVENING";
  }

  document.querySelector("#wish").innerHTML = `GOOD ${wishing} ANUDEEP`;
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

setInterval(currentTime, 1000);
