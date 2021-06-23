const express = require("express");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");


const app = express();
const port = 3000;
const pdfName = "5211643393.pdf";

const dirPath = path.join(__dirname, "public/uploads");
const files = fs.readdirSync(dirPath).map(name => {
    if(name === pdfName) {
        return {
            name: path.basename(name, ".pdf"),
            url: `/uploads/${name}`
        };
    }
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { files });
});

app.listen(port, () => console.log(`app listening on port ${port}`));