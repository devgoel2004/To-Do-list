const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const items = [];
app.get("/", function (req, res) {
  //res.send("Hello World!");
  const today = new Date();
  const date = today.getDate();
  const day = today.getDay();
  const month = today.getMonth();
  res.render("home", {
    currentWeek: days[day],
    currentDay: date,
    currentMonth: Months[month],
    items: items,
  });
});
app.post("/", (req, res) => {
  x = req.body.Work;
  items.push(x);
  console.log(x);
  res.redirect("/");
});
app.listen(3400, () => {
  console.log("Server is running on the port 3400");
});
