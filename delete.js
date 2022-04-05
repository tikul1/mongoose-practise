const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/hardik", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const dataSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });
  const Data = mongoose.model("Data", dataSchema);
  const newUser = await Data.create({ name: "hardik", age: 29 });
  const newUser2 = await Data.create({ name: "tikul", age: 13 });

  Data.deleteMany({ age: { $gte: 13 } })
    .then(function () {
      console.log("Data deleted");
    })
    .catch(function (error) {
      console.log(error);
    });
}
