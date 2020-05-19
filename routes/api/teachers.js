const express = require("express");
const router = express.Router();

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
router.post("/", (req, res) => {
  console.log(req.body);
  const newTeacher = new Teacher({
    name: req.body.name,
    Qualification: req.body.Qualification,
    Qualification2: req.body.Qualification,
    Rating: req.body.Rating,
    About: req.body.About,
    age:req.body.age,
    Price: req.body.Price,
    DayTime: req.body.DayTime,
    Day: req.body.Day,
    Time: req.body.Time,
    email: req.body.email,
    password: req.body.password,
    bookings: [
      {
        username: req.body.bookings[0].username,
        amount: req.body.bookings[0].amount,
        time:  req.body.bookings[0].time,
        day:  req.body.bookings[0].day,
        date :  req.body.bookings[0].date,
        status:  req.body.bookings[0].status,
        subject:  req.body.bookings[0].subject
      },
    ],
    education:[
      {
        level: req.body.education[0].level,
        institute:  req.body.education[0].institute,
        startDate:  req.body.education[0].startDate,
        endDate:  req.body.education[0].endDate,
        field:  req.body.education[0].field
      }
    ],
    work: [
      {
        title: req.body.work[0].title,
        startDate: req.body.work[0].startDate,
        endDate: req.body.work[0].endDate,
        details: req.body.work[0].details
      }
    ],
    schedule:[
      {
        day:req.body.schedule[0].day,
        date: req.body.schedule[0].date,
        time: req.body.schedule[0].time,
        subject: req.body.schedule[0].subject,
        details: req.body.schedule[0].details
      }
    ],
    subjects: [
      {
        subject: req.body.subjects[0].subject
      }
    ]

    // $push: { bookings: { username: { $each: [req.body.username] } } },
  });

  newTeacher.save().then((teacher) => res.json(teacher));
});

router.put("/booking",(req,res)=> {


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
