const express = require('express');
const homeRoute = require('./routes/index');
const db = require('./config/mongoose');


//create instance of express
const app = express();
const expressLayouts = require('express-ejs-layouts');

//import cookie parser
const cookieParser = require('cookie-parser');

//middleware for cookie
app.use(cookieParser());

app.use(expressLayouts);
//for decoding body
app.use(express.urlencoded());
//set the static folder
app.use(express.static('public'));

//setting up layout so that styles and scripts will be extracted from body and put into their respective places
// app.set('layout extractStyles', true); 
// app.set('layout extractScripts', true);

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
