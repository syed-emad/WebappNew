const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Qualification: {
    type: String,
    required: true,
  },
  Qualification2: {
    type: String,
    required: true,
  },

  About: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: false,
  },
  DayTime: {
    type: String,
    required: false,
  },
  Rating: {
    type: String,
    required: true,
  },
  Day: {
    type: String,
    required: false,
  },
  Time: {
    type: String,
    required: false,
  },
});

module.exports = Teacher = mongoose.model("teacher", TeacherSchema);
