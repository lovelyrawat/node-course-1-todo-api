// Mongoose Configuration
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
