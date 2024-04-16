const express = require("express");
const zod = require('zod')

const app = express();
app.use(express.json());
let errCount = 0;

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "anna" || password != "annacodes") {
    errCount++;
    console.log(errCount++)
    res.status(400).json({
      msg: "Authentication failed!",
    });
  } else {
    next();
  }
}

app.post("/health-checkup", userMiddleware, (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("You have " + kidneyLength + " kidneys");
});

app.use(function (err, req, res, next) {
  errCount++;
  console.log(errCount);
  res.json({
    msg: "Sorry somethings up with our inputs!",
  });
});
app.listen(3000, function (req, res) {
  console.log("Server app listening on port 3000...");
});
