const express = require('express');
const { connectToDb } = require('./db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

Promise.all([connectToDb()]).then(() => {
    app.listen(8080, () => {
        console.log("Listening to port 8080")
    })
}).catch((err) => console.error("Error connecting to DB--" + err));