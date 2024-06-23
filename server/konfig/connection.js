const mongoose = require('mongoose');

mongoose.connect( 'mongodb+srv://dcarioto114:Tipsy23@goinghome.qvjrant.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=GoingHome')
// mongoose.connect( 'mongodb://127.0.0.1:27017/test')

module.exports = mongoose.connection;