const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const data = require("./data.json");

app.get("/", (req, res) => {
  return res.json(data);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log("Server started");
  });
} else {
  app.listen(3100, () => {
    console.log("Server started");
  });
}
