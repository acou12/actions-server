const express = require("express");
const ngrok = require("ngrok");
const app = express();

ngrok.connect({ proto: "tcp", addr: 25565 }).then(console.log);

// app.get("/", (_req, res) => {
//   res.send(`
//     <h1>Wow, it works!</h1>
//   `);
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
