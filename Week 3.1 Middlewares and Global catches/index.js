const express = require("express");
const app = express();
app.use(express.json());

let numberofRequests = 0;

function countRequests(req, res, next) {
  numberofRequests++;
  console.log(numberofRequests);
  next();
}

app.use(countRequests)
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Anna" && password != "annacodes") {
    res.status(400).json({
      msg: "Authentication failed!",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Somethings up with your inputs!",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your kidney is fine!");
});

app.listen(3000, (req, res) => {
  console.log("Server app listening on port 3000...");
});
