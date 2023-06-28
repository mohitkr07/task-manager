require("../src/db/mongoose");
const User = require("../src/models/user");

// 649a9f240068d34bd867002a

User.findByIdAndUpdate("649a9f240068d34bd867002a", { name: "Kiran" })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 21 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
