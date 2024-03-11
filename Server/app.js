var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

var app = express();
// app.use(cors({ origin: "https://edu-eval-frontend-testing.vercel.app" })); //custom added
app.use(cors()); //custom added

// Parse JSON bodies
app.use(bodyParser.json()); //custom added

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.all("*", (req, res) => {
  res.end("SERVER IS ON");
});

module.exports = app;
