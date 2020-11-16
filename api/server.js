// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// PORT
const PORT = 3030;

// ROUTER CONFIG
app.get("/", (req, res) => {
    res.send("index route working");
});

// LISTENER
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});