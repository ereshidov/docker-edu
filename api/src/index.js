const express = require("express");
const mongoose = require("mongoose");
const axios = require('axios');
const { port, authApiUrl } = require("./configuration");
const { connectDb } = require("./helpers/db");

const app = express();
const postSchema = new mongoose.Schema({
  name: String,
});

const Post = mongoose.model("Post", postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`API service was started, on port: ${port}`);

    const testPost = new Post({ name: "Silence" });
  });
};

app.get("/test", (req, res) => {
  res.send("API server is working correctly");
});

app.get("/testwithcurrentuser", (req, res) => {
  axios.get(authApiUrl + '/currentUser').then((response => {
    res.json({
      testwithcurrentuser: true,
      currentUserFromAuth: response.data,
    })
  }))
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
