const mongoose = require("mongoose");

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to database before test
const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb://localhost/pageCommenters", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`Connection to mongodb made: ${conn.connection.host}`.cyan.underline.bold);        
    } catch (err) {
        console.log(`Error ${err}`.red);
        process.exit(1);
    }
}
module.exports = connectDB;