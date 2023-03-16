//import express
const express = require('express');

//import express-handlebars
const exphbs = require('express-handlebars');

//boilerplpate
const path = require('path');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

//setting handlebars as default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
//app.use(require('./controllers/dish-routes'));

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
  