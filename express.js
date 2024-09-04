const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(3100, () => {
  console.log("Express server is running on port 3000");
});
