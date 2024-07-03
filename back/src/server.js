const express = require('express');
const router = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());


app.use(router);
app.use((err,req,res,next) => {
    res.status(err.statusCode || 500).json({message: err.message})
});
module.exports = app;