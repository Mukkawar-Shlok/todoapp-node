const mongoose = require('mongoose');//require module
//connect to db
mongoose.connect('mongodb://localhost/task_list_db');

// Aquire the connection (gives access this db)
const db = mongoose.connection;

//check if connection was sucessful 
db.on('error', console.error.bind(console, 'error connecting to db'));

//up and running 
db.once('open', function () {
    console.log('Sucessfully connected to db');
});
