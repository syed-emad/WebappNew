const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const fileUpload = require('../../middleware/file-upload');
// const multipart =require("connect-multiparty");

//item model
const Teacher2 = require("../../models/Teachers2");

//@route POST api/items
//@desc Create A post
//@access Public
router.post("/",fileUpload.single('profileImage'), (req, res) => {
  
  const { firstname, lastname, email, password } = req.body;

  const newTeacher = new Teacher2({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password,
    gender:req.body.gender,
    city:req.body.city,
    zipCode:req.body.zipCode,
    phone:req.body.phone,
    profileImage:req.file.path,
    about:req.body.about,
    qualification:req.body.qualification,
    subjects:req.body.subjects,
    level:req.body.level,
    days:req.body.days,
    time:req.body.time
  });

  //validation
  if (!firstname || !lastname || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //if (!req.file) return res.send('Please upload a file')
  //Check for exsisting teacher
  Teacher2.findOne({ email })
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
               // profileImage:req.file,
                about:teacher.about,
                qualification:teacher.qualification,
                subjects:teacher.subjects,
                level:teacher.level,
                days:teacher.days,
                time:teacher.time
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

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  //validation
  if (!email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //Check for exsisting user
  Teacher.findOne({ email })
    .exec()
    .then(teacher => {
      if (!teacher) {
        return res.status(400).json({ msg: "teacher does not exist" });
      }

      //validating password
      bcrypt.compare(password, teacher.password, (err, result) => {
        if (err) {
          return res.status(404).json({
            message: "auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: teacher.email,
              teacherId: teacher._id
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            teacher: {
              id: teacher.id,
              name: teacher.name,
              email: teacher.email
            },

            token: token
          });
        }

        res.status(401).json({
          message: "Auth failed,incorrect password"
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
