const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./connection');

dotenv.config({path: './config/config.env'});

connectDB();

const comments = require('./routes/comments');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/comments', comments);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));