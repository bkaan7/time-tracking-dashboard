let hours = document.querySelectorAll(".hours");
let weekhours = document.querySelectorAll(".weekhours");

window.onload = first();

function first() {
  fetch("https://raw.githubusercontent.com/bkaan7/time-tracking-dashboard/main/data.json")
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current + "hrs";

        weekhours[i].innerHTML =
          "Last Daily - " + data[i].timeframes.daily.previous + "hrs";
      });
    });
}

$(".btnD").click(function () {
  fetch("https://raw.githubusercontent.com/bkaan7/time-tracking-dashboard/main/data.json")
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current + "hrs";

        weekhours[i].innerHTML =
          "Last Daily - " + data[i].timeframes.daily.previous + "hrs";
      });
    });
});
$(".btnW").click(function () {
  fetch("https://raw.githubusercontent.com/bkaan7/time-tracking-dashboard/main/data.json")
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.weekly.current + "hrs";

        weekhours[i].innerHTML =
          "Last Daily - " + data[i].timeframes.weekly.previous + "hrs";
      });
    });
});

$(".btnM").click(function () {
  fetch("https://raw.githubusercontent.com/bkaan7/time-tracking-dashboard/main/data.json")
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.monthly.current + "hrs";

        weekhours[i].innerHTML =
          "Last Daily - " + data[i].timeframes.monthly.previous + "hrs";
      });
    });
});
