const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// Middlewares
app.use(express.json());
app.use(express.urlencoded())
app.use(cors());
app.use(bodyParser.json());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/Book"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
  
  const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String
  })
  
  const User = new mongoose.model("User", userSchema)
  
  //Routes
  app.post("/login", (req, res)=> {
      const { email, password} = req.body
      User.findOne({ email: email}, (err, user) => {
          if(user){
              if(password === user.password ) {
                  res.send({message: "Login Successfull", user: user})
              } else {
                  res.send({ message: "Password didn't match"})
              }
          } else {
              res.send({message: "User not registered"})
          }
      })
  }) 
  
  app.post("/register", (req, res)=> {
      const { name, email, password} = req.body
      User.findOne({email: email}, (err, user) => {
          if(user){
              res.send({message: "User already registerd"})
          } else {
              const user = new User({
                  name,
                  email,
                  password
              })
              user.save(err => {
                  if(err) {
                      res.send(err)
                  } else {
                      res.send( { message: "Successfully Registered, Please login now." })
                  }
              })
          }
      })
      
  }) 
  