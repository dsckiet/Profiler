require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");
app.use(cors());
app.use(express.json());
const Data = require("./models/data");
app.post("/api", async (req, res) => {
  console.log("akshat");
});

app.post("/", async (req, res) => {
  const newdata = await Data.create(req.body);
  res.status(201).json({ newdata });
});
const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listenning on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
