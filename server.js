const path = require("path");
const express = require("express");

const app = express(); 
const portNumber = process.env.PORT || 3000;

app.listen(portNumber);
console.log(`Web server started and running at http://localhost:${portNumber}`);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/password", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "password.html"));
});

app.post("/password", (req, res) => {
  const password = "12072023";
  const entered = req.body.password;

  if (entered === password) {
    res.sendFile(path.join(__dirname, "public", "letter.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "password.html"));
  }
});