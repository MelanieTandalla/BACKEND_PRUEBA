const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})

const getHorario = async(req, res) => {
    const response=await pool.query('SELECT * FROM horario');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getHorarioById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM horario WHERE id_horario = $1',[id]);
    res.json(response.rows);
};
const createHorario = async(req, res) => {
    const { descripcion}=req.body;
   const response= await pool.query('INSERT INTO horario (descripcion) VALUES($1)',[ descripcion]);
   console.log(response);
    res.json({
        message:'¡La horario se ha creado satisfactoriamente!',
        body:{
            horario: {descripcion}
        }
    })
};
const updateHorario = async(req, res) => {
    const id=req.params.id;
    const { descripcion}=req.body;
    const response = await pool.query('UPDATE horario SET descripcion = $1 WHERE id_horario = $2',[
        descripcion,
        id
    ]) 
    console.log(response);
    res.json('Horario Actualizado');
};
const deleteHorario = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM horario WHERE id_horario = $1',[id]);
    res.json(`horario ${id} eliminada correctamente`);
};

module.exports = {
    getHorario,
    getHorarioById,
    createHorario,
    updateHorario,
    deleteHorario
}
