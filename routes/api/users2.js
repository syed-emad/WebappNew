const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const utils = require("../../utils");
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
    if (!user) {
      return res.status(400).json({ msg: "user does not exsist" });
    }

    //validating password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(404).json({ msg: "Invalid Crdentials" });

      res.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    });
  });
});

// validate the user credentials

router.post("/x/signin", (req, res) => {
  const { email, password } = req.body;

  //validation
  if (!email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //Check for exsisting user
  Users.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "user does not exsist" });
    }

    //validating password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(404).json({ msg: "Invalid Crdentials" });

      res.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    });
    // generate token
    const token = utils.generateToken(user);
    // get basic user details
    const userObj = utils.getCleanUser(user);
    // return the token along with user details
    return res.json({ user: userObj, token });
  });
});

router.get("/", (req, res) => {
  Users.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

module.exports = router;