require('dotenv').config();
const {Pool} = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const initDatabase = async () => {
        await pool.query(`CREATE TABLE IF NOT EXISTS experiencias (
            id SERIAL PRIMARY KEY,
            titulo VARCHAR(260) NOT NULL,
            tipo VARCHAR (255) NOT NULL,
            descricao TEXT NOT NULL,
            ano_inicio INT NOT NULL,
            ano_fim INT 
        )`
    );

    await pool.query(`
       CREATE TABLE IF NOT EXISTS portfolio (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        link VARCHAR (255) NOT NULL,
        imagem VARCHAR(255) NOT NULL
       );
    `);

    await pool.query(`
       CREATE TABLE IF NOT EXISTS informacoes (
        id INT PRIMARY KEY,
        foto VARCHAR(255) NOT NULL,
        nome VARCHAR (255) NOT NULL,
        cargo VARCHAR(255) NOT NULL,
        resumo TEXT NOT NULL
       );
    `);

        console.log('Banco de dados inicializado!')
    
}

module.exports = {pool, initDatabase};