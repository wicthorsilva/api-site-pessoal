const {pool} = require('../config/db');

exports.getInformacoes = async () => {
    const result = await pool.query('SELECT * FROM informacoes');
    return result.rows[0];
}

exports.createInformacoes = async (informacoes) => {
    const result = await pool.query(`
      INSERT INTO informacoes (id, foto, nome, cargo, resumo)
      VALUES (1, $1, $2, $3, $4)
      RETURNING *
    `, [informacoes.foto, informacoes.nome, informacoes.cargo, informacoes.resumo]);
    return result.rows[0];
}

exports.deleteInformacoes = async () => {
    await pool.query('DELETE FROM informacoes WHERE id = 1');
}