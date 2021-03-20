const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Mukhammed:mukhammed123@cluster0.qhqbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mongoose.connection.once('open', () => {
    console.log("Connection has been made");
})
