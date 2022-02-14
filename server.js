const routes = require('./controllers/');
const express = require('express-session');
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});

// app.engine('handlebars', 'hbs.engine');
// app.set('view engine', 'handlebars');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

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

// app.engine('handlebars', 'hbs.engine');
// app.set('view engine', 'handlebars');

// point towards controller and api endpoints
// app.use(require('./controllers/'));

app.listen(PORT, () => console.log(`Now listening on post ${PORT}`));
