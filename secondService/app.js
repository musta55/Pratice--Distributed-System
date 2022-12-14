"use strict";

const express = require("express");

// Constants
const PORT = 8081;
const HOST = "0.0.0.0";
const rtsIndex = require("./routes/index.router");

// App
const app = express();
app.use(express.json());
// app.get("/", (req, res) => {
// 	res.send("Hello World");
// });

app.use("/api", rtsIndex);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
