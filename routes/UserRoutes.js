const express = require("express");
const userModel = require("../models/User");
const app = express();

//Read ALL
app.get("/users", async (req, res) => {
  //Select Specific Column
  const users = await userModel
    .find({})
    .select("username email city zipcode webUrl phone")
    .sort({ username: "desc" });

  try {
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST
//http://localhost:3000/users
app.post("/users", async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save((err) => {
      if (err) {
        // Custom error handling
        // console.log(err.errors["username"].message);
        // console.log(err.errors["email"].message);
        // console.log(err.errors["city"].message);
        // console.log(err.errors["zipcode"].message);
        res.send(err);
      } else {
        res.send(user);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;