// Importando Module
const express = require('express');
const consign = require('consign');

// Atribuindo o express a const app
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

consign()
    .include('./src/routes.js')
    .into(app);

// Exportando const app
module.exports = app;