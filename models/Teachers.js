const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const TeacherSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  } ,
  password: {
    type: String,
    required: true
  },
  gender:{
    type: String,
    enum: ["male", "female"]
  },
  city:{
    type: String,
    required: true
  },
  zipCode:{
    type: String
  },
  phone:{
    type:Number
  },
  profileImage:{
    type:String,
    required:true
  },
  about: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
     required: true
  }
  
  // Rating: {
  //   type: String,
  //   // required: true
  // }
});

module.exports = Teacher = mongoose.model("teacher", TeacherSchema);