const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("API server is working correctly");
});

app.listen(3000, () => {
  console.log("API service was started");
});
