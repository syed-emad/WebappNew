const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
//User model
const Users = require("../../models/Users");

//@route POST api/auth
//@desc Auth User
//@access Public
router.post("/", (req, res) => {
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
      jwt.sign(
        {
          id: user.id
        },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
});

//@route GET api/auth
//@desc Get user data
//@access Public

router.get("/user", auth, (req, res) => {
  Users.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});
module.exports = router;