const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Bookingss Schema

const BookingSchema = new Schema({
  Day: String,
  Date: String,
  Time:String,
  Status:String,
  Subject:String,
  Username:String,
  BookingTime:String,
  Price:String,
});

//Teachers Schema
const TeacherSchema = new Schema({
  email: {
    type: String,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: false,
  },
  City:{
    type: String,
    required: false,
  },
  Qualification: {
    type: String,
    required: false,
  },
  Qualification2: {
    type: String,
    required: false,
  },
  ProfileImage:{
    type: String,
    required:false,
  },
  About: {
    type: String,
    required: false,
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
    required: false,
  },
  Day: {
    type: String,
    required: false,
  },
  Time: {
    type: String,
    required: false,
  },
  totalEarnings:{
    type:Number,
    required:false,
  },
  bookings: [ ],
  schedule: [],
  education:[],
  work:[],
  account:[],
  emad: [],
});

module.exports = Teacher = mongoose.model("teacher", TeacherSchema);

// bookingid: [
//   {
//     username: String,
//     subject: String,
//     date: String,
//     status: Boolean,
//     time: String,
//     amount: String,
//   },
// ],
