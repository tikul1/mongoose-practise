const mongoose = require("mongoose");
const User = require("./app2_route");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/hardik");

  const user = await User.create({ name: "hardik", age: 29 });

  const filter = { name: "hardik" };
  const update = { age: 30 };
  const doc = await User.findOneAndUpdate(filter, update, {
    new: true, //same as returnOriginal:false
    upsert: true,
  });
  console.log(user);
  await doc.save();
  console.log(doc);
}
