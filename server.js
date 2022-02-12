const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// point towards controller and api endpoints
app.use(require('./controllers/'));

app.listen(PORT, () => console.log(`Now listening on posrt ${PORT}`));

