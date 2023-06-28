const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    trim: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Age cannot be negative");
      }
    },
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password cannot contain password");
      }
    },
  },
});

userSchema.pre("save", async (next) => {
  const user = this;

  console.log("befre saving");

  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
