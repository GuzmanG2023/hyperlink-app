const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// point towards controller and api endpoints
app.use(require('./controllers/'));

app.listen(PORT, () => console.log(`Now listening on post ${PORT}`));
