require('dotenv').config();
const mongoose = require("mongoose");
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_BASEDATOS = process.env.DB_BASEDATOS;
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@movies.pdnbniu.mongodb.net/${DB_BASEDATOS}`;

const dbCon = async () => {
    await mongoose.connect(URL);
};

module.exports = dbCon;