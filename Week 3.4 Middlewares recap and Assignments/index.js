const express = require("express");

const app = express();

// function that returns a boolean if the age of person is more than 14

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "Sorry you are not of age yet!",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  return res.json({
    msg: "Congratulations, you have successfully got the ride 1!",
  });
});

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  return res.json({
    msg: "Congratulations, you have successfully got the ride 2!",
  });
});

app.listen(3000, (req, res) => {
  console.log("Server app listening on port 3000...");
});
