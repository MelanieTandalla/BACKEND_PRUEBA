const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})

const getAllergies = async(req, res) => {
    const response=await pool.query('SELECT * FROM alergias');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getAllergiesById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM alergias WHERE id_alergia = $1',[id]);
    res.json(response.rows);
};
const createAllergies= async(req, res) => {
    const { nombre_alergia,descripcion_alergia}=req.body;
   const response= await pool.query('INSERT INTO alergias (nombre_alergia,descripcion_alergia) VALUES($1,$2)',[ nombre_alergia, descripcion_alergia]);
   console.log(response);
    res.json({
        message:'¡La alergia se ha creado satisfactoriamente!',
        body:{
            alergias: {nombre_alergia, descripcion_alergia}
        }
    })
};
const updateAllergies = async(req, res) => {
    const id=req.params.id;
    const { nombre_alergia, descripcion_alergia}=req.body;
    const response = await pool.query('UPDATE alergias SET nombre_alergia = $1, descripcion_alergia = $2 WHERE id_alergia = $3',[
        nombre_alergia,
        descripcion_alergia,
        id
    ]) 
    console.log(response);
    res.json('Alergia Actualizada');
};
const deleteAllergies = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM alergias WHERE id_alergia = $1',[id]);
    res.json(`La alergia con id: ${id} eliminada correctamente`);
};
module.exports ={
    getAllergies,
    getAllergiesById,
    createAllergies,
    updateAllergies,
    deleteAllergies
}