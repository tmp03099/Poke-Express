const express = require("express");

//create app
const app = express();
const PORT = 3000;

// set listen for port
app.listen(PORT, function () {
  console.log(`Server runing on port ${PORT}`);
});
