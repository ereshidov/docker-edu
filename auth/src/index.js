const express = require("express");
const { port } = require("./configuration");
const { connectDb } = require("./helpers/db");

const app = express();

const startServer = () => {
  app.listen(port, () => {
    console.log(`AUTH service was started, on port: ${port}`);
  });
};

app.get("/test", (req, res) => {
  res.send("AUTH server is working correctly");
});

app.get("/api/currentUser", (req, res) => {
  res.json({
    id: "1234",
    email: "foo@gmail.com",
  });
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
