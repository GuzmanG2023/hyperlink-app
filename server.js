const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const session = require('express-session');
const exphbs = require('express-handlebars');

app.engine('handlebars', 'hbs.engine');
app.set('view engine', 'handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// session connectivity
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// point towards controller and api endpoints
app.use(require('./controllers/'));

app.listen(PORT, () => console.log(`Now listening on post ${PORT}`));
