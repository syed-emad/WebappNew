const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
// const multipart =require("connect-multiparty");
// const multipartMiddleware= multipart();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
});

//item model
const Teacher2 = require("../../models/Teachers2");

//@route POST api/items
//@desc Create A post
//@access Public
router.post("/", (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const newTeacher = new Teacher2({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    city: req.body.city,
    zipCode: req.body.zipCode,
    phone: req.body.phone,
    //profileImage:req.file.path,
    about: req.body.about,
    qualification: req.body.qualification,
    subjects: req.body.subjects,
    level: req.body.level,
    days: req.body.days,
    time: req.body.time
  });

  //validation
  if (!firstname || !lastname || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //if (!req.file) return res.send('Please upload a file')
  //Check for exsisting teacher
  Teacher2.findOne({ email })
    .then(teachers2 => {
      if (teachers2) {
        return res.status(400).json({
          msg: "teacher already exist"
        });
      }

      //salt is use to create password hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newTeacher.password, salt, (err, hash) => {
          // if (err) throw err;
          if (err) {
            return res.status(500).json({
              error: err
            });
          }
          newTeacher.password = hash;
          newTeacher.save().then(teacher2 => {
            jwt.sign(
              {
                id: teacher2.id
              },
              config.get("jwtSecret"),
              //{ expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  teacher2: {
                    id: teacher2.id,
                    firstname: teacher2.firstname,
                    lastname: teacher2.lastname,
                    email: teacher2.email,
                    gender: teacher2.gender,
                    city: teacher2.city,
                    zipCode: teacher2.zipCode,
                    phone: teacher2.phone,
                    // profileImage:req.file,
                    about: teacher2.about,
                    qualification: teacher2.qualification,
                    subjects: teacher2.subjects,
                    level: teacher2.level,
                    days: teacher2.days,
                    time: teacher2.time
                  }
                });
              }
            );
          });
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
