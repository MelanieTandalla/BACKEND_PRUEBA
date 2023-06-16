const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'admin',
    password: '123',
    database: 'Citas-Medicas',
    port: 5432,
})
const getCategory = async (req, res) => {
    const response = await pool.query('SELECT category.id_category,category.name,category.description');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getCategoryById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM category WHERE id_category = $1', [id]);
    res.json(response.rows);
};
const createCategory = async (req, res) => {
    const {
        name,
        description
    } = req.body;
    const response = await pool.query('INSERT INTO category (name, description ) VALUES($1,$2)', [name, description]);
    console.log(response);
    res.json({
        message: '¡El categoria se ha creado satisfactoriamente!',
        body: {
            category: { name, description }
        }
    })
};
const updateCategory = async (req, res) => {
    const id = req.params.id;
    const {
        name,
        description
    } = req.body;
    const response = await pool.query('UPDATE category SET name = $1, description = $2 WHERE id_category = $3', [
        name,
        description
    ])
    console.log(response);
    res.json('categoria Actualizado');
};
const deleteCategory = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM category WHERE id_category = $1', [id]);
    res.json(`category ${id} eliminado correctamente`);
};

module.exports = {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}