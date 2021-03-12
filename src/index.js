const express = require('express');
const bodyParser = require ('body-parser');

//Criação de rota
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);


//Rota 5000.
app.listen(5000);