const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const path= require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads');
  },
  filename: function(req, file, cb){
     cb(null,"IMAGE-" + Date.now() + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000}
});


//item model
const Teacher = require("../../models/Teachers");

//@route POST api/items
//@desc Create A post
//@access Public
router.post("/", (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const newTeacher = new Teacher({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password,
    gender:req.body.gender,
    city:req.body.city,
    zipCode:req.body.zipCode,
    phone:req.body.phone,
    //profileImage:req.file.path,
    about:req.body.about,
    qualification:req.body.qualification
  });

  //validation
  if (!firstname || !lastname || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  // if (!req.file) return res.send('Please upload a file')
  //Check for exsisting teacher
  Teacher.findOne({ email })
  .then(teacher => {
    if (teacher) {
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
                firstname: teacher.firstname,
                lastname: teacher.lastname,
                email: teacher.email,
                gender:teacher.gender,
                city:teacher.city,
                zipCode:teacher.zipCode,
                phone:teacher.phone,
                //profileImage:req.file,
                about:teacher.about,
                qualification:teacher.qualification
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


//get all teachers
router.get("/", (req, res) => {
  Teacher.find()
    .sort({ date: -1 })
    .select('id firstname email')
    .exec()
    .then(items => res.json(items));
});


//get teacher by id
router.get("/:teacherId", (req, res, next) => {
  const id = req.params.teacherId;
  Teacher.findById(id)
  .select('id firstname email')
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
