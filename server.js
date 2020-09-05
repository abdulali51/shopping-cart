const express = require("express");

const app = express();
const port = process.env.PORT || 4200;

// Define paths for Express config
const publicDirPath = "./dist/shopping-cart";

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get("/*", (req, res) => {
  res.sendFile("index.html", {
    root: publicDirPath
  });
});

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}, open your browser on http://localhost:${port}`);
});