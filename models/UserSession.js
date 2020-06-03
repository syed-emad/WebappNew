const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const UserSessionSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  
  time_stamp: {
    type: Date,
    default: Date.now,
  }, 
  isSession:{
      type:Boolean

  },
});

module.exports = UserSession = mongoose.model("usersession", UserSessionSchema);
