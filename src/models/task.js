const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

// taskSchema.pre("save", async function (next) {
//   const task = this;

//   next();
// });

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
