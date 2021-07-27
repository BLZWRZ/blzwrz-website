const express = require("express");

app = express();
const port = process.argv[2] || 8080;

app.use(express.static("./public"));

app.listen(port, () => {
    console.log(`website listening on port ${port}`);
});
