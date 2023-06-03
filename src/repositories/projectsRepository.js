const {pool } = require('../config/db');

exports.getprojects= async () => {
    const result = await pool.query('SELECT * FROM projects');
    return result.rows;
}

exports.getProjectById = async (id) => {
    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createProject = async (project) => {
    const result = await pool.query(`
    INSERT INTO projects (title, link, image)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [project.title, project.link, project.image]);
    return result.rows[0];
}

exports.updateProject = async (id, project) => {
    const result = await pool.query(`
    UPDATE projects SET title = $1, link = $2, image = $3 WHERE id = $4 RETURNING *
    `, [project.title, project.link, project.image, id]);
    return result.rows[0];
}

exports.deleteProject = async (id) => {
    await pool.query('DELETE FROM projects WHERE id =$1', [id]);
}