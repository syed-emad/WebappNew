const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("config");
const path = require("path");
//decaling models variables.Will use them below
const items = require("./routes/api/items");
const teachers = require("./routes/api/teachers");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const app = express();

//Bodyparser Middleware
app.use(express.json());

//DB Config
const db = config.get("mongoURI");

//Connect to Mongo
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/items", items);
app.use("/api/teachers", teachers);
app.use("/api/users", users);
app.use("/api/auth", auth);

//Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on Port ${port}`));
