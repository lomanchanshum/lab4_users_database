const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter valid username with length >4"],
    trim: true,
    lowercase: true,
    minLength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,
    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    },
  },
  city: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: function (value) {
      var alphaRegex = /^[A-Z]+$/i;
      return alphaRegex.test(value);
    },
  },
  webUrl: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: function (value) {
      var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
      return urlRegex.test(value);
    },
  },
  zipcode: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: function (value) {
      var urlRegex = /^\d{5}-\d{4}$/gm;
      return urlRegex.test(value);
    },
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    validate: function (value) {
      var urlRegex = /^\d{1}-\d{3}-\d{3}-\d{4}$/gm;
      return urlRegex.test(value);
    },
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;