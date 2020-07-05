const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema and model

const commentSchema = new Schema({
    message: String,
    author: String,
    commentDate: String
});

const pageUserSchema = new Schema({
    username: String,
    password: String,
    comments: [commentSchema]
});

const pageUser = mongoose.model("pageUser", pageUserSchema);

module.exports = pageUser;