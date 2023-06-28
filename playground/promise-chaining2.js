require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("649aa5c948e3569b479a32c0")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ status: "false" });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const findAndDelete = async (_id, status) => {
  const RemoveTask = await Task.findByIdAndDelete(_id);
  const count = Task.countDocuments({ status });

  return count;
};

findAndDelete("649aa686e054a63211fa5d5a", "false")
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
