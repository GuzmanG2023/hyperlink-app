<<<<<<< HEAD
const routes = require('./controllers/');
const exphbs = require('express-handelbars');
const hbs = exphbs.create({});

app.engine('handlebars', 'hbs.engine');
app.set('view engine', 'handlebars');
=======
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// point towards controller and api endpoints
app.use(require('./controllers/'));

app.listen(PORT, () => console.log(`Now listening on posrt ${PORT}`));
>>>>>>> 6cc666e38b6a50cfb542a910bfbf80113e349661
