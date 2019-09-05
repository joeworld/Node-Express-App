const mongoose = require('mongoose');
const uri = process.env.LOCAL_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection;