const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "progress.json";

// ----- read and save the marks (a simple JSON file) -----
function readProgress() {
  if (!fs.existsSync(FILE)) {
    return {};
  }
  return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

function saveProgress(progress) {
  fs.writeFileSync(FILE, JSON.stringify(progress, null, 2));
}

// ----- 1. Get all marks -----
app.get("/api/progress", function (req, res) {
  res.json(readProgress());
});

// ----- 2. Save all marks (replaces the old ones) -----
app.put("/api/progress", function (req, res) {
  saveProgress(req.body);
  res.json({ success: true });
});

app.listen(5001, function () {
  console.log("Server running on port 5001");
});