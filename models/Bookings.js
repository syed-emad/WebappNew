const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Bookingss Schema

const BookingSchema = new Schema({
  username: String,
  amount: Number,
});

module.exports = Teacher = mongoose.model("bookings", BookingSchema);

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
