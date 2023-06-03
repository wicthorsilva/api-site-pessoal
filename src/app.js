require('dotenv').config();
const express = require('express');
const { initDatabase} = require('./config/db');
const experienciasRoute = require ('./routes/experienciasRoute');
const portfolioRoute = require('./routes/portfolioRoutes');
const informacoesRoute = require('./routes/informacoesRoute')
const authRoute = require ('./routes/authRoute');

const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res ) => {
    res.send('Seja bem vindo a API do Meu Site');
});

app.use(express.json());

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolio', portfolioRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);

initDatabase();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});