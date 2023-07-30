const express = require('express');
const homeRoute = require('./routes/index');
const db = require('./config/mongoose');
//create instance of express
const app = express();
//for decoding body
app.use(express.urlencoded());
//set the static folder
app.use(express.static('public'));
//import config
const config = require('./config/index');
//set up view engine
app.set('view engine', 'ejs');
//set up folder for views
app.set('views', './views');

//now route up home dir
app.use('/', homeRoute);

app.listen(config.PORT, function (err) {

    if (err) {
        console.log(err);
        return;
    } else {
        console.log(`Server is running sucessfully on port ${config.PORT}`);
    }
});
