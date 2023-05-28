require('dotenv').config();
const express = require('express');
const { initDatabase} = require('./config/db');
const experienciasRoutes = require ('./routes/experienciasRoute');

const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res ) => {
    res.send('Seja bem vindo a API do Meu Site');
});

app.use('/api/experiencias', experienciasRoutes)

initDatabase();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});