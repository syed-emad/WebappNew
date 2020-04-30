const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const Teacher2Schema = new Schema({
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  } ,
  password: {
    type: String,
    required: false
  },
  gender:{
    type: String,
    
  },
  city:{
    type: String,
    required: false
  },
  zipCode:{
    type: String
  },
  phone:{
    type:Number
  },
  profileImage:{
    type:String,
    
  },
  about: {
    type: String,
    required: false
  },
  qualification: {
    type: [String],
    required: false
  },
  subjects:{
    type: String,
    required: false
  },
  level:{
    type: String,
    required: false
  },
  days:{
    type: String,
    required: false
  },
  time:{
    type: String,
    required: false
  }

  
  // Rating: {
  //   type: String,
  //   // required: true
  // }
});

module.exports = Teacher2 = mongoose.model("teacher2", Teacher2Schema);