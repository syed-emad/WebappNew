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
  });
  newTeacher.save().then((teacher) => res.json(teacher));
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