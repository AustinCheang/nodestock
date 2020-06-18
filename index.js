// Stock Market Portfolio

const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
const path = require('path');

// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "Hello, this is other stuff!";

// Set handlebar routes
app.get('/', function(req, res){
    res.render('home',{
        stuff: otherstuff

    });
});

const PORT = process.env.PORT || 5000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Tell the app to listen the port
app.listen(PORT, () => console.log('Serve Listening on port '+ PORT));
