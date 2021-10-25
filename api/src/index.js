const express = require("express");
const app = express();

const { port } = require('./configuration')
const { connectDb } = require("./helpers/db");

const startServer = () => {
  app.listen(port, () => {
    console.log(`API service was started, on port: ${port}`);
  });
};

app.get("/test", (req, res) => {
  res.send("API server is working correctly");
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
