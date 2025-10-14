const mongoose = require('mongoose')

const connectDB = (url) =>{
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }
)
//returns a promise
}

module.exports = connectDB;
