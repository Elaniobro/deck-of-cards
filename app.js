const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: [
    //  path to your partials
    __dirname + '/views/partials',
  ]
}));
app.use('/lib', express.static(__dirname + '/lib'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index', { layout: __dirname + '/views/index' });
});

app.listen(3000);
