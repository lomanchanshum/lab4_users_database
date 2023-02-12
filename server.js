const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes.js");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://lokmanchan:poiu986532@cluster0.a0gb9is.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});