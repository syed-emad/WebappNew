const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const db = require("../../server").getDB;
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const Teacher = require("../../models/Teachers");

//Get All Teachers
router.get("/", (req, res) => {
  Teacher.find()
    .sort({ date: -1 })
    .then((teachers) => res.json(teachers));
});
//Search Teacher By Subject
router.get("/search", (req, res) => {
  let Qualification = req.query.name;
  if (!Qualification) {
    Teacher.find({})
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else {
    Teacher.find({ Qualification })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  }
});
//Search Teacher By Various Parameters
router.get("/search2", (req, res) => {
  let Qualification = req.query.name;
  let Price = req.query.price;
  let Time = req.query.time;
  let Day = req.query.day;
  if (!Qualification && !Price && !Day && !Time) {
    Teacher.find({})
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && !Price && !Day && !Time) {
    Teacher.find({ Qualification })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && !Day && !Time) {
    Teacher.find({ Qualification, Price })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && Day && !Time) {
    Teacher.find({ Qualification, Price, Day })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else if (Qualification && Price && !Day && Time) {
    Teacher.find({ Qualification, Price, Time })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  }
});
//Search Teacher By ID
router.get("/searchbyid", (req, res) => {
  let _id = req.query.id;
  if (_id) {
    Teacher.find({ _id })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else {
    console.log("error");
  }
});
//Search For Dashboard
router.get("/dash", (req, res) => {
  _id = req.query.id;
  console.log(_id);
  let Price = req.query.price;
  console.log(Price);
  if (!_id) {
    Teacher.find({})
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else {
    Teacher.find({ _id })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  }
});
//Simple Post API
router.post("/", (req, res) => {
  console.log(req.body);
  var data = {
    username: "emad",
    amount: 0,
  };
  const newTeacher = new Teacher({
    name: req.body.name,
    Qualification: req.body.Qualification,
    Qualification2: req.body.Qualification,
    Rating: req.body.Rating,
    About: req.body.About,
    Price: req.body.Price,
    DayTime: req.body.DayTime,
    Day: req.body.Day,
    Time: req.body.Time,
    email: req.body.email,
    password: req.body.password,
    bookings: data,
  });

  newTeacher.save().then((teacher) => res.json(teacher));
});
//For pushing random data , for ease
router.put("/ids", function (req, res) {
  var id = req.query.id;
  var data = {
    _id: new ObjectId(),
    Subject: "Chemistry",
    Day: "Friday",
    Date: "12/2/2020",
    Time: "3:00-4:00PM",
    Status: "Book",
  };
  console.log(id);
  Teacher.findOne({ _id: id }, function (err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        console.log(err);
      } else {
        if (req.query.email) {
          Teacher.updateOne(
            { _id: new ObjectId(id) },
            { $push: { schedule: data } },
            function (err, updatedObj) {
              if (err) {
                console.log(err);
              } else {
                console.log("Success");
              }
            }
          );
        }
      }
    }
  });
});
//Change from Book to Booked
router.put("/newx", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;
  Teacher.updateOne(
    { _id: new ObjectId(id), "schedule._id": new ObjectId(buttonid) },
    { $set: { "schedule.$.Status": "Booked" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
});
//Add Schedule
router.put("/add", function (req, res) {
  var id = req.query.id;
  var data = {
    _id: new ObjectId(),
    Subject: req.query.subjectname,
    Day: req.query.day,
    Date: req.query.date,
    Time: req.query.time,
    Price: req.query.price,
    Status: "Book",
  };
  Teacher.findOne({ _id: id }, function (err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        console.log(err);
      } else {
        if (req.query.id) {
          Teacher.updateOne(
            { _id: new ObjectId(id) },
            { $push: { schedule: data } },
            function (err, updatedObj) {
              if (err) {
                console.log(err);
              } else {
                console.log("Success");
              }
            }
          );
        }
      }
    }
  });
});
//Class Booked
router.put("/booked", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;
  Teacher.findOne({ "schedule._id": new ObjectId(buttonid) }, function (
    err,
    foundObject
  ) {
    if (err) {
      console.log(err);
    } else {
      if ((foundObject.schedule._id = buttonid)) {
        var data = {
          _id: foundObject.schedule._id,
          Subject: req.query.Subject,
          Day: req.query.Day,
          Date: req.query.Date,
          Time: req.query.Time,
          Status: "Booked",
          Price: req.query.Price,
          Username: req.query.username,
          Classid: req.query.classid,
          Studentid: ObjectId(req.query.userid),
        };
        Teacher.updateOne(
          { _id: new ObjectId(id) },
          { $push: { bookings: data } },
          function (err, updatedObj) {
            if (err) {
              console.log(err);
            } else {
              console.log("Succefully add booking to teacher");
            }
          }
        );
      }
    }
  });
});
//Delete By ID
router.delete("/id", (req, res) => {
  Teacher.findById(req.params.id)
    .then((teacher) => teacher.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});
//Delete Schedule
router.delete("/delete", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid; //schedule to be deleted obj id
  Teacher.updateOne(
    { _id: new ObjectId(id) },
    { $pull: { schedule: { _id: new ObjectId(buttonid) } } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        console.log("StatusUpdated");
      }
    }
  );
});
//Cance Class User Side
router.put("/cancel", function (req, res) {
  var classid = req.query.classid;
  Teacher.updateOne(
    { "bookings.Classid": classid },
    { $set: { "bookings.$.Status": "Cancelled" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        console.log("Cancel Teacher");
      }
    }
  );
});
//Cancel Class Teacher Side
router.put("/cancel2", function (req, res) {
  var classid = req.query.classid;
  Teacher.updateOne(
    { "bookings.Classid": classid },
    { $set: { "bookings.$.Status": "Cancelled" } },

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        console.log("user cancelled");
      }
    }
  );
});
//Change form BOOKED to BOOK US
router.put("/book", function (req, res) {
  var buttonid = req.query.buttonid;
  Teacher.updateOne(
    { "schedule._id": new ObjectId(buttonid) },
    { $set: { "schedule.$.Status": "Book" } },
    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
});
//Change from BOOKED to BOOK TS
router.put("/book2", function (req, res) {
  var scheduleid = req.query.scheduleid;
  Teacher.updateOne(
    { "schedule._id": new ObjectId(scheduleid) },
    { $set: { "schedule.$.Status": "Book" } },
    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        console.log("Changed");
      }
    }
  );
});
//For Ending Class,incomplete
router.put("/end", function (req, res) {
  var buttonid = req.query.buttonid;
  Teacher.updateOne(
    { "bookings._id": buttonid },
    { $set: { "bookings.$.Status": "Completed" } },
    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
});
//For TeacherSignup
router.post("/asb", (req, res) => {
  const { name, email, password } = req.body;

  const newTeacher = new Teacher({
    name: req.body.name,
    About: req.body.About,
    Price: req.body.Price,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
    subjects: req.body.subjects,
    City: req.query.City,
    bookings: req.body.bookings,
    schedule: req.body.schedule,
    education: req.body.education,
    work: req.body.work,
  });
  if (!name || !email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  Teacher.findOne({ email })
    .then((teacher) => {
      if (teacher) {
        return res.status(400).json({
          msg: "teacher already exist",
        });
      }
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newTeacher.password, salt, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          }
          newTeacher.password = hash;
          newTeacher.save().then((teacher) => {
            console.log("hello im new");
            jwt.sign(
              {
                id: teacher.id,
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
                    email: teacher.email,
                  },
                });
              }
            );
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;
