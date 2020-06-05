const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectID;
const Users = require("../../models/Users");
//Add User
router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  Users.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "user already exsist" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });   
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
//Get All
router.get("/", (req, res) => {
  Users.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});
//Get by ID
router.get("/id", (req, res) => {
  let _id = req.query.id;
  Users.find({ _id })
    .sort({ date: -1 })
    .then((items) => res.json(items));
});
//Book Class
router.put("/classbooked", function (req, res) {
  var id = req.query.userid;
  var data = {
    _id: new ObjectId(),
    classid: ObjectId(req.query.buttonid),
    TeacherName: req.query.teachername,
    Subject: req.query.Subject,
    Day: req.query.Day,
    Date: req.query.Date,
    Time: req.query.Time,
    Price: req.query.Price,
    Status: "Booked",
    Classid:req.query.classid,
  };
  console.log(data);
  Users.findOne({ _id: id }, function (err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        console.log(err);
      } else {
        if (req.query.id) { 
          Users.updateOne(
            { _id: new ObjectId(id) },
            { $push: { mybookings: data } },
            function (err, updatedObj) {
              if (err) {
                console.log(err);
              } else {
                console.log("Succefully add booking to student");
              }
            }
          );
        }
      }
    }
  });
});
//Cancel From User Side
router.put("/cancel",function(req,res){
  var id = req.query.id;
  var classid = req.query.classid;
  console.log("hiii2");
  console.log(classid);
  Users.updateOne(
    {   "mybookings.Classid": classid} ,
    { $set: { "mybookings.$.Status": "Cancelled" }}, 
    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        console.log("cancel user");
      }
    }
  );

})
//Cancel From Teacher Side
router.put("/cancel2",function(req,res){
  var teacherid = req.query.id;
  var classid = req.query.classid;
  // console.log("hiii2");
   console.log(classid);
  Users.updateOne(
    {   "mybookings.Classid": classid} ,
    { $set: { "mybookings.$.Status": "Cancelled" }}, 
    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
       console.log("teacher cancelled ")
      }
    }
  );

})
module.exports = router;
