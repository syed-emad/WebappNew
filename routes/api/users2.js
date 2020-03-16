const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
//User model
const Users = require("../../models/Users");

//@route GET api/users
//@desc Register new user
//@access Public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //Check for exsisting user
  Users.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ msg: "user already exsist" });
    }
    const newUser = new User({
      name,
      email,
      password
    });
    newUser.name = name;
    newUser.password = password;
    newUser.email = email;
    newUser.save().then(item => res.json(item));
  });
});
// validate the user credentials

// validate the user credentials
router.post("/x/signin", function(req, res) {
  const { email, password } = req.body;

  // return 400 status if username/password is not exist
  if (!email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }

  Users.findOne({ email }).then(user => {
    if ((password = user.password)) {
      return res.status(400).json({
        error: true,
        message: "Username or Password required."
      });
    }
  });
});

router.get("/", (req, res) => {
  Users.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

module.exports = router;
