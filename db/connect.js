const mongoose = require('mongoose');

// uri = "mongodb+srv://dudegangwar:GHoop389!!@collegeapi.qbsuqye.mongodb.net/collegeAPI?retryWrites=true&w=majority";

const connectDB = (uri) => {
    console.log("Connected to the database");
    return mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    });
};

module.exports = connectDB;