const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
//item model
const Teacher = require("../../models/Teachers");

//@route POST api/items
//@desc Create A post
//@access Public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //Check for exsisting teacher
  Teacher.findOne({ email })
  .then(teacher => {
    if (teacher) {
      return res.status(400).json({ 
        msg: "teacher already exist" 
      });
    }
  const newTeacher = new Teacher({
    name,
    email,
    password,
    // Qualification: req.body.Qualification,
    // Qualification2: req.body.Qualification
    // Rating: req.body.Rating,
    // About: req.body.About
  });

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
      newTeacher
      .save()
      .then(teacher => {
        jwt.sign(
          {
            id: teacher.id
          },
          config.get("jwtSecret"),
          //{ expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              teacher: {
                id: teacher.id,
                name: teacher.name,
                email: teacher.email
              }
            });
          }
        );
      });
    });
  });
  
});
});


//get all teachers
router.get("/", (req, res) => {
  Teacher.find()
    .sort({ date: -1 })
    .select('id name email')
    .exec()
    .then(items => res.json(items));
});


//get teacher by id
router.get("/:teacherId", (req, res, next) => {
  const id = req.params.teacherId;
  Teacher.findById(id)
  .select('id name email')
  .exec()
  .then(item => {
    console.log("From database", item);
    if (item) {
      res.status(200).json({
          teacher: item,
          request: {
              type: 'GET',
              url: 'http://localhost:3000/teachers'
          }
      });
    } else {
      res
        .status(404)
        .json({ message: "No valid entry found for provided ID" });
    }
  } )
  .catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });



});
//@route Delete api/teachers :id
//@desc Delete A item
//@access Public
router.delete("/:id", (req, res) => {
  Teacher.findById(req.params.id)
    .then(teacher => teacher.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
