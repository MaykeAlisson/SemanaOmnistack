// Importando Module
const express = require('express');
const consign = require('consign');
const mongoose = require('mongoose');

// Atribuindo o express a const app
const app = express();

mongoose.connect('mongodb+srv://omnistack:xxxxxxxxxx@cluster0-8odbp.mongodb.net/omnistack?retryWrites=true',{
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

consign()
    .include('./src/routes.js')
    .into(app);

// Exportando const app
module.exports = app;