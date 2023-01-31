const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})
const getSpecialities = async(req, res) => {
    const response=await pool.query('SELECT * FROM especialidades');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getSpecialitiesById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM especialidades WHERE id_especialidad = $1',[id]);
    res.json(response.rows);
};
const createSpeciality = async(req, res) => {
    const id=req.params.id;
    const {descripcion_especialidad}=req.body;
   const response= await pool.query('INSERT INTO especialidades (descripcion_especialidad) VALUES($1)',[
    descripcion_especialidad 
   ]);
   console.log(response);
    res.json({
        message:'¡La especialidad se ha creado satisfactoriamente!',
        body:{
            especialidades: {
                id,
               descripcion_especialidad
            }
        }
    })
};
const updateSpeciality = async(req, res) => {
    const id=req.params.id;
    const {descripcion_especialidad}=req.body;
    const response = await pool.query('UPDATE especialidades SET  descripcion_especialidad= $1 WHERE id_especialidad = $2',[
        descripcion_especialidad,
        id
    ]) 
    console.log(response);
    res.json('Especialidad Actualizada con exito');
};
const deleteSpeciality = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM especialidades WHERE id_especialidad = $1',[id]);
    res.json(`Especialidad con id: ${id} eliminado correctamente`);
};

module.exports = {
   getSpecialities,
   getSpecialitiesById,
   createSpeciality,
   updateSpeciality,
   deleteSpeciality
}
