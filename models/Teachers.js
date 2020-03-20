const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  }// ,
  // password: {
  //   type: String,
  //   required: true
  // },

  // Qualification: {
  //   type: String,
  //   // required: true
  // },
  // Qualification2: {
  //   type: String,
  //   // required: true
  // },
  
  // About: {
  //   type: String,
  //   // required: true
  // },
  // Rating: {
  //   type: String,
  //   // required: true
  // }
});

module.exports = Teacher = mongoose.model("teacher", TeacherSchema);