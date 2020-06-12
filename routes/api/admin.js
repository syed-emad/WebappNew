const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectID;
//User model
const Admin = require("../../models/Admin");

 
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //Check for exsisting user
  Admin.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "user already exsist" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });

    //salt is use to create password hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            {
              id: user.id,
            },
            config.get("jwtSecret"),
            //{ expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});
//Deleting method
router.delete("/userdelete", (req, res) => {
  Admin.findById(req.query.id)
    .then((teacher) => teacher.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});
router.get("/", (req, res) => {
  Admin.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});
router.get("/id", (req, res) => {
  let _id = req.query.id;
  console.log(_id,"IN ID");
  Admin.find({ _id })
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

 
module.exports = router;
