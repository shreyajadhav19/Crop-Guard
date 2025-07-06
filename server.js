const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();
const PORT = 3000;

const { detectDisease } = require("./model/detection");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views/index.html")));
app.get("/upload", (req, res) => res.sendFile(path.join(__dirname, "views/upload.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "views/about.html")));
app.get("/result", (req, res) => res.sendFile(path.join(__dirname, "views/result.html")));

const storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (req, file, cb) => {
    cb(null, "crop_" + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

app.post("/detect", upload.single("cropImage"), (req, res) => {
  const result = detectDisease();
  const image = req.file.filename;
  res.redirect(`/result?disease=${result.disease}&treatment=${result.treatment}&image=${image}`);
});

app.listen(PORT, () => {
  console.log(`✅ CropGuard running at http://localhost:${PORT}`);
});
