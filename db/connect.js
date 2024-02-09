const mongoose = require('mongoose');


const connectDB = (uri) => {
    console.log("Connected to the database");
    return mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    });
};

module.exports = connectDB;
