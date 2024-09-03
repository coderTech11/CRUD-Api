require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/productRoute");

app.use(express.json());

const PORT = process.env.PORT;
const db = process.env.DBURI;

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/product", router);
