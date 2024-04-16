const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://anilcodes01:anilcodes01@cluster0.kbsq56y.mongodb.net/Dummy_User_App"
);

const User = mongoose.model("Users", {
  username: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send("User already exists!");
  }

  const user = new User({
    username: username,
    email: email,
    password: password
  });

  user.save();
  res.json({
    msg: "User created successfully!",
  });
});

app.listen(3000, (req, res) => {
  console.log("Server app listening on port 3000...");
});
