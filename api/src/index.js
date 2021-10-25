const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("API server is working correctly");
});

app.listen(process.env.PORT, () => {
  console.log("API service was started");
});
