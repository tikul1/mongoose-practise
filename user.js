const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/hardik");
  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
      //when you field to be required or want it to be lowercase
      type: String,
      required: true,
      lowercase: true,
    },
  });
  const User = mongoose.model("User", userSchema);
  const user = new User({ name: "hardik", age: 28 });
  const user2 = await User.create({ name: "tikul", age: 29 }); //another way of adding user with saving
  user.name = "HARDIK"; //for updating
  user2.name = "Tikul";
  await user2.save(); //we have to save this time because of update.
  await user.save();
  console.log(user);
  console.log(user2);
}
