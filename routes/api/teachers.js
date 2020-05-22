const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const db = require("../../server").getDB;
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const fileUpload = require('../../middleware/file-upload');
//item model
const Teacher = require("../../models/Teachers");

router.get("/", (req, res) => {
  Teacher.find()
    .sort({ date: -1 })
    .then((teachers) => res.json(teachers));
});
router.get("/search", (req, res) => {
  let Qualification = req.query.name;
  let Price = req.query.price;
  console.log(Price);
  //let name = "Ali Aman";
  //req.query.name;
  console.log("yahya");

  //console.log(req.query.name);
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

router.get("/searchbyid", (req, res) => {
  let _id = req.query.id;

  //let name = "Ali Aman";
  //req.query.name;
  console.log(_id);
  //console.log(req.query.name);
  if (_id) {
    Teacher.find({ _id })
      .sort({ date: -1 })
      .then((teachers) => res.json(teachers));
  } else {
    console.log("erroxr");
  }
});

router.get("/dash", (req, res) => {
  _id = req.query.id;

  console.log(_id);
  let Price = req.query.price;
  console.log(Price);
  //let name = "Ali Aman";
  //req.query.name;
  console.log("yahya");

  //console.log(req.query.name);
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

router.get("/search2", (req, res) => {
  let Qualification = req.query.name;
  let Price = req.query.price;
  let Time = req.query.time;
  let Day = req.query.day;
  let sep = "_";
  let DayTime = Day + sep + Time;
  //let name = "Ali Aman";
  //req.query.name;
  console.log("emad");
  console.log(DayTime);
  console.log(Qualification);
  console.log(Time);
  console.log(Day);
  console.log("---");
  //console.log(req.query.name);
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

//@route POST api/items
//@desc Create A post
//@access Public
router.post("/",fileUpload.single('profileImage'), (req, res) => {
  // const { name, email, password } = req.body;

  console.log(req.body);

  const newTeacher = new Teacher({
    name: req.body.name,
    Qualification: req.body.Qualification,
    Qualification2: req.body.Qualification,
    Rating: req.body.Rating,
    About: req.body.About,
    age:req.body.age,
    profileImage:req.file.path,
    Price: req.body.Price,
    DayTime: req.body.DayTime,
    Day: req.body.Day,
    subjects: req.body.subjects,
    Time: req.body.Time,
    email: req.body.email,
    password: req.body.password,
    bookings: [
      // {
      //   username: req.body.bookings[0].username,
      //   amount: req.body.bookings[0].amount,
      //   time:  req.body.bookings[0].time,
      //   day:  req.body.bookings[0].day,
      //   date :  req.body.bookings[0].date,
      //   status:  req.body.bookings[0].status,
      //   subject:  req.body.bookings[0].subject
      // },
    ],
    education:[
      // {
      //   level: req.body.education[0].level,
      //   institute:  req.body.education[0].institute,
      //   startDate:  req.body.education[0].startDate,
      //   endDate:  req.body.education[0].endDate,
      //   field:  req.body.education[0].field
      // }
    ],
    work: [
      // {
      //   title: req.body.work[0].title,
      //   place:req.body.work[0].place,
      //   startDate: req.body.work[0].startDate,
      //   endDate: req.body.work[0].endDate,
      //   details: req.body.work[0].details
      // }
    ],
    schedule:[
      // {
      //   day:req.body.schedule[0].day,
      //   date: req.body.schedule[0].date,
      //   time: req.body.schedule[0].time,
      //   subject: req.body.schedule[0].subject,
      //   details: req.body.schedule[0].details
      // }
    ]

    // $push: { bookings: { username: { $each: [req.body.username] } } },
  });
    // //validation
    // if (!name || !email || !password) {
    //   return res.status(404).json({ msg: "please enter everthing" });
    // }
  //   Teacher.findOne({ email })
  // .then(teacher => {
  //     if (teacher) {
  //       return res.status(400).json({ 
  //         msg: "teacher already exist" 
  //       });
  //     }
    
  //   //salt is use to create password hash
  //   bcrypt.genSalt(10, (err, salt) => {
  //     bcrypt.hash(newTeacher.password, salt, (err, hash) => {
  //       // if (err) throw err;
  //       if (err) {
  //         return res.status(500).json({
  //           error: err
  //         });
  //       }
  //       newTeacher.password = hash;
  //       newTeacher
  //       .save()
  //       .then(teacher => {
  //         jwt.sign(
  //           {
  //             id: teacher.id
  //           },
  //           config.get("jwtSecret"),
  //           //{ expiresIn: 3600 },
  //           (err) => {
  //             if (err) throw err;
  //             res.json(teacher);
  //           }
  //         );
  //       });
  //     });
  //   });
    
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.status(500).json({
  //     error: err
  //   });
  // });
 
  newTeacher.save().then((teacher) => res.json(teacher));
 
});

//Add teacher schedule details to database
router.put("/ids", function (req, res) {
  var id = req.query.id;
  var email = "OKEMAIL";
  console.log("in ids");
  var data = {
    _id: new ObjectId(),
    Subject: "Maths",
    Day: "Monday",
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
//Update the status of booking
router.put("/newx", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;

   
  console.log(req.query.index, "index");
  console.log("buttonid:", buttonid);

  
 
  Teacher.updateOne(
    { _id: new ObjectId(id), "schedule._id": new ObjectId(buttonid) },
    { $set: { "schedule.$.Status": "Booked" } },  
    
    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
       console.log(foundObject);
       // console.log("statusupdates");
      }
    }
  );
});

//Confirm button
router.put("/booked", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;
  console.log("bookid",buttonid);
  console.log(req.query.index, "index");
  console.log("buttonid:", buttonid);
 
  //  Teacher.findOne(
  //     { _id: new ObjectId(id), "schedule._id": new ObjectId(buttonid) },
  //   { $se t: { "schedule.$.Status": "Booked" } },
  //    function (err, foundObject) {
  //      if (err) {
  //        console.log(err);
  //      } else {
  //        console.log(foundObject);
  //      }
  //    }
  //  );
   
  Teacher.findOne({ "schedule._id": new ObjectId(buttonid)}, function (err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      console.log(foundObject);
      if(foundObject.schedule._id=buttonid){
        console.log(foundObject.schedule._id,"---------");
        var data = {
          _id: buttonid,
          Subject: "Maths",
          Day: "Monday",
          Date: "12/2/2020",
          Time: "3:00-4:00PM",
          Status: "Book",
          Username:"Emad",
          Price:"100",
          BookingTime:"10",
        };
       Teacher.updateOne(
         { _id: new ObjectId(id) },
         { $push: { bookings:data } },
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
  });
 
  // Teacher.findOne(
  //   { _id: new ObjectId(id), "schedule._id": new ObjectId(buttonid) },
   

  //   function (err, foundObject) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(foundObject);
  //     }
  //   }
  // );
});

//@route Delete api/teachers :id
//@desc Delete A item
//@access Public
router.delete("/:id", (req, res) => {
  Teacher.findById(req.params.id)
    .then((teacher) => teacher.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
