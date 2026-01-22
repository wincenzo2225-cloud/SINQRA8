const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server isleyir");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server acildi:", PORT);
});
