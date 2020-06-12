const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const AdminSchema = new Schema({
  name: {
    type: String,
 
  },
  email: {
    type: String,
 
    unique: true,
  },
  password: {
    type: String,
  
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
 
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
