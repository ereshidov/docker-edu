const express = require("express");
const mongoose = require("mongoose");
const { port } = require("./configuration");
const { connectDb } = require("./helpers/db");

const app = express();

const Post = mongoose.model('Post', postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`AUTH service was started, on port: ${port}`);
  });
};

app.get("/test", (req, res) => {
  res.send("AUTH server is working correctly");
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
