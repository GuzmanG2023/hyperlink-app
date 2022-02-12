
const exphbs = require('express-handelbars');
const hbs = exphbs.create({});

app.engine('handlebars', 'hbs.engine');
app.set('view engine', 'handlebars');
