const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/hardik");
  console.log("are we connected?");
  const kittySchema = new mongoose.Schema({
    name: String,
  });
  const Kitten = mongoose.model("Kitten", kittySchema);
  const silence = new Kitten({ name: "Silence" });
  console.log(silence.name);

  const fluffy = new Kitten({ name: "fluffy" });
  //   await fluffy.save();
  //   await silence.save();

  const kittens = await Kitten.find();
  console.log(kittens);
  await Kitten.find({ name: /^fluff/ });
}
