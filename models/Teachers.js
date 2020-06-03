const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Bookingss Schema

const BookingSchema = new Schema({
  Username: String,
  Price: Number,
  Day: String,
  Date: String,
  Time: String,
  Subject: String,
  Status: String
});

//education schema

const EducationScehma= new Schema ({
  level: String,
  institute: String,
  startDate: String,
  endDate: String,
  field: String
});
//work experience schema

const WorkSchema = new Schema({
  title: String,
  place: String,
  startDate:String,
  endDate: String,
  details: String
});

//teacher's schedule schema

const ScheduleSchema = new Schema ({
  Day: String,
  Date: String,
  Time: String,
  Subject: String,
  Price:String
});

const AccountSchema= new Schema({
  totalAmount: Number,
  amount: Number
})
// subject schema

// const SubjectSchema = new Schema({
//   subject: String
// });
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
  age:{
    type: Number,
    required:false
  },
  Qualification: {
    type: String,
    required: false,
  },
  Qualification2: {
    type: String,
    required: false,
  },
  profileImage:{
    type:String,
    required:false
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
  subjects:{
    type: String,
    required: false,
  },
  profileImage:{
    type: String,
    required: false,
  },
  bookings: [],
  education: [],
  work: [],
  schedule: [],
  account:[]
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