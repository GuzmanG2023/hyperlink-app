const routes = require('./controllers/');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', 'hbs.engine');
app.set('view engine', 'handlebars');

// point towards controller and api endpoints
app.use(require('./controllers/'));

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
