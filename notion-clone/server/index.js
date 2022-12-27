const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
require("dotenv").config();

// jsonオブジェクトとして扱う必要があったため以下を記述
app.use(express.json());
// routesディレクトリ内にAPIの記載をしていくので、APIを叩くときはapi/v1をつけるように宣言
app.use("/api/v1", require("./src/v1/routes/auth"));

// MongoDBとの接続
try {
  mongoose.connect(process.env.MONGOOSE_URL);
  console.log("DBと接続中。。。");
} catch (error) {
  console.log("Could not connect to MongoDB");
}

app.listen(PORT, () => {
  console.log("Local Server 3000 is running");
});
