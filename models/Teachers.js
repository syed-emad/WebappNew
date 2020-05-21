const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Bookingss Schema

const BookingSchema = new Schema({
  username: String,
  amount: Number,
  time: String,
  day: String,
  date : String,
  status: String,
  subject: String
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
  startDate:String,
  endDate: String,
  details: String
});

//teacher's schedule schema

const ScheduleSchema = new Schema ({
  day: String,
  date: String,
  time: String,
  subject: String,
  details: String

});
// subject schema

const SubjectSchema = new Schema({
  subject: String
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
  bookings: [BookingSchema],
  education: [EducationScehma],
  work: [WorkSchema],
  schedule: [ScheduleSchema],
  subjects: [SubjectSchema]
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