const mongoose = require("mongoose");
// MongoDBはインスタンス化してスキーマを定義する必要があるので、
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
