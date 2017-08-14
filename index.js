const chalk = require("chalk");
const moment = require("moment");

var now = moment();
var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var whichDay = moment().format("DDDo");
var seconds = ((now.hours() * 60) * 60) + (now.minutes() * 60) + now.seconds();
var daylightsavings = moment().isDST();
var leapyear = moment().isLeapYear();

if (daylightsavings === true) {
    daylightsavings = (chalk.green(" is "));
} else {
    daylightsavings = (chalk.red(" is not"));
}

if (leapyear === true) {
    leapyear = (chalk.green(" is "));
} else {
    leapyear = (chalk.red(" is not "));
}

console.log("it is " + today);
console.log("it is the " + whichDay + " day of the year.");
console.log("it is " + seconds + " seconds into the day.");
console.log("it " + daylightsavings + " Daylight Savings Time")
console.log("it " + leapyear + " a leap year");


