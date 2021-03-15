const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/medicalAI');

mongoose.connection.once('open', function() {
    console.log("Connection has been made");
}).on('error', function(error) {
    console.log('Connection error: ', error);
});
