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
        console.log('Banco de dados inicializado!')
    
}

module.exports = {pool, initDatabase};