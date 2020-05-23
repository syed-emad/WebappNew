const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const db = require("../../server").getDB;

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

//Post method teac
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

//Add teacher schedule details to database
router.put("/ids", function (req, res) {
  var id = req.query.id;
  var email = "OKEMAIL";
  console.log("in ids");
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
        //  console.log(foundObject,"ans");
        // console.log("statusupdates");
      }
    }
  );
});

router.put("/nottoube", function (req, res) {
  var id = req.query.id;
  var buttonid = req.query.buttonid;

  console.log(req.query.index, "index");
  console.log("buttonid:", buttonid);

  Teacher.findOne(
    { _id: new ObjectId(id), "schedule._id": new ObjectId(buttonid) },
    {"schedule.$.Status": { $in: "Booked" } } ,

    function (err, foundObject) {
      if (err) {
        console.log(err);
      } else {
        console.log(foundObject, "ans");
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
 
   
  
  Teacher.findOne({ "schedule._id": new ObjectId(buttonid)}, function (err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      console.log(foundObject.schedule._id, "SUBJ");
      if(foundObject.schedule._id=buttonid){
        console.log(foundObject.schedule._id,"---------");
         
          var data = {
            _id: foundObject.schedule._id,
            Subject: req.query.Subject,
            Day: req.query.Day,
            Date: req.query.Date,
            Time:req.query.Time,
            Status: "Booked",
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
   
 
   
});
//Deleting method
router.delete("/:id", (req, res) => {
  Teacher.findById(req.params.id)
    .then((teacher) => teacher.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
