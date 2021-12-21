const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send(`
    <h1>Wow, it works!</h1>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
