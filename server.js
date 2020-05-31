const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("config");

const multer = require("multer");
const cors = require("cors");
const utils = require("./utils");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
//decaling models variables.Will use them below
const items = require("./routes/api/items");
const teachers = require("./routes/api/teachers");
const users = require("./routes/api/users");
const users2 = require("./routes/api/users2");
const auth = require("./routes/api/auth");
const app = express();
const fs = require('fs');
const path = require('path');
require("dotenv").config();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
//Bodyparser Middleware

app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use(express.json());

const Users = require("./models/Users");
const Teachers = require("./models/Teachers");
//DB Config
const db = config.get("mongoURI");
// static user details

const userData = {
  Id: "789789",
  password: "123456",
  name: "Clue Mediator",
  email: "cluemediator",
  isAdmin: true
};

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
app.use("/api/users2", users2);
app.use("/api/auth", auth);
app.use("/admin", require("./admin")); //for the admin panel
// app.use('/uploads',express.static('uploads'));

//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers["authorization"];
  if (!token) return next(); //if no token, continue

  token = token.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});
// request handlers
app.get("/", (req, res) => {
  if (!req.user)
    return res
      .status(401)
      .json({ success: false, message: "Invalid user to access it." });
  res.send("Welcome to the Node.js Tutorial! - " + req.user.name);
});
// validate the user credentials
app.post("/users/signin", function(req, res) {
  const user = req.body.email;
  const pwd = req.body.password;

  // return 400 status if username/password is not exist
  if (!user || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Username or Password required."
    });
  }

  // return 401 status if the credential is not match.
  if (user !== userData.email || pwd !== userData.password) {
    return res.status(401).json({
      error: true,
      message: "Username or Password is Wrong."
    });
  }

  // generate token
  const token = utils.generateToken(userData);
  // get basic user details
  const userObj = utils.getCleanUser(userData);
  // return the token along with user details
  return res.json({ user: userObj, token });
});

app.post("/x/signin/teachers", (req, res) => {
  const { email, password } = req.body;

  //validation
  if (!email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //Check for exsisting user
  Teachers.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(400).json({ msg: "user does not exist" });
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(404).json({
            message: "auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
    
            token: token,
          });
        }
        res.status(401).json({
          message: "Auth failed,incorrect password"
        });
      })
      
    })
    // // generate token
    // const token = utils.generateToken(user);
    // // get basic user details
    // const userObj = utils.getCleanUser(user);
    // // return the token along with user details
    // return res.json({ user: userObj, token });
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

app.post("/x/signin", (req, res) => {
  const { email, password } = req.body;

 
  //validation
  if (!email || !password) {
    return res.status(404).json({ msg: "please enter everthing" });
  }
  //Check for exsisting user
  Users.findOne({ email })
    .exec()
    .then(user => {
      if (!user) {
        return res.status(400).json({ msg: "user does not exist" });
      }

      //validating password
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(404).json({
            message: "auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            },

            token: token
          });
        }

        res.status(401).json({
          message: "Auth failed,incorrect password"
        });
      });
    })
    // // generate token
    // const token = utils.generateToken(user);
    // // get basic user details
    // const userObj = utils.getCleanUser(user);
    // // return the token along with user details
    // return res.json({ user: userObj, token });
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
// verify the token and return it if it's valid
app.get("/verifyToken", function(req, res) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token;
  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required."
    });
  }
  // check token that was passed by decoding token using secret
  jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
    if (err)
      return res.status(401).json({
        error: true,
        message: "Invalid token."
      });

    // return 401 status if the userId does not match.
    if (user.Id !== user.Id) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    }
    // get basic user details
    var userObj = utils.getCleanUser(user);
    return res.json({ user: userObj, token });
  });
});


//Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on Port ${port}`));