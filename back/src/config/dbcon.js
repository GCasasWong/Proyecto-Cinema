const mongoose = require("mongoose");

const dbCon = async () => {
    await mongoose.connect("mongodb+srv://wonggjai:qFKyZOIP90ALNgnE@movies.pdnbniu.mongodb.net/movies");
};

module.exports = dbCon;