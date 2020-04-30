const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const utils = require("../../utils");
const jwt = require("jsonwebtoken");
const authorize=require("../../helpers/authorize");
//User model
const Users2 = require("../../models/Users2");

//@route GET api/users
//@desc Register new user
//@access Public

router.post("/", (req, res) => {
  
  const { firstname, lastname, email, password } = req.body;

  const newUsers2 = new Users2({
    roleID: req.body.roleID,
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
  //Check for exsisting users2
  Users2.findOne({ email })
  .then(users2 => {
    if (users2) {
      return res.status(400).json({ 
        msg: "users2 already exist" 
      });
    }
  
  //salt is use to create password hash
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUsers2.password, salt, (err, hash) => {
      // if (err) throw err;
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      newUsers2.password = hash;
      newUsers2
      .save()
      .then(users2 => {
        jwt.sign(
          {
            id: users2.id, role:users2.roleID
          },
          config.get("jwtSecret"),
          //{ expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              users2: {
                id: users2.id,
                firstname: users2.firstname,
                lastname: users2.lastname,
                email: users2.email,
                gender:users2.gender,
                city:users2.city,
                zipCode:users2.zipCode,
                phone:users2.phone,
               // profileImage:req.file,
                about:users2.about,
                qualification:users2.qualification,
                subjects:users2.subjects,
                level:users2.level,
                days:users2.days,
                time:users2.time
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
  Users2.findOne({ email })
    .exec()
    .then(users2 => {
      if (!users2) {
        return res.status(400).json({ msg: "users2 does not exist" });
      }

      //validating password
      bcrypt.compare(password, users2.password, (err, result) => {
        if (err) {
          return res.status(404).json({
            message: "auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: users2.email,
              users2Id: users2._id,
              roleID:users2.roleID
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            users2: {
              id: users2.id,
              name: users2.name,
              email: users2.email
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
//get all users2
router.get("/", (req, res) => {
  Users2.find()
    .sort({ date: -1 })
    
    .exec()
    .then(items => res.json(items));
});


//get users2 by id
router.get("/:users2Id", (req, res, next) => {
  const id = req.params.users2Id;
  const currentUser = req.users2;
  if (id !== currentUser.id && currentUser.roleID !== "2") {
    return res.status(401).json({ message: 'Unauthorized' });
}
  Users2.findById(id)
  .select('id firstname email')
  .exec()
  .then(item => {
    console.log("From database", item);
    if (item) {
      res.status(200).json({
        users2: item,
          request: {
              type: 'GET',
              url: 'http://localhost:3000/users2'
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
//@route Delete api/users2 :id
//@desc Delete A item
//@access Public
router.delete("/:id", (req, res) => {
  Users2.findById(req.params.id)
    .then(users2 => users2.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;