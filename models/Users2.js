const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const Users2Schema = new Schema({

  roleID: {
    type: String,
    required: false
    },
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

module.exports = Users2 = mongoose.model("users2", Users2Schema);