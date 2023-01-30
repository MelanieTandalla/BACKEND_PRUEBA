const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})

const getDisability = async(req, res) => {
    const response=await pool.query('SELECT * FROM discapacidades');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getDisabilityById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM discapacidades WHERE id_discapacidades = $1',[id]);
    res.json(response.rows);
};
const createDisability = async(req, res) => {
    const { nombre_discapacidad,descripcion_discapacidad}=req.body;
   const response= await pool.query('INSERT INTO discapacidades (nombre_discapacidad,descripcion_discapacidad) VALUES($1,$2)',[ nombre_discapacidad, descripcion_discapacidad]);
   console.log(response);
    res.json({
        message:'¡La discapacidad se ha creado satisfactoriamente!',
        body:{
            discapacidades: {nombre_discapacidad, descripcion_discapacidad}
        }
    })
};
const updateDisability = async(req, res) => {
    const id=req.params.id;
    const { nombre_d, descripcion_d}=req.body;
    const response = await pool.query('UPDATE discapacidades SET nombre_d = $1, descripcion_d = $2 WHERE id_discapacidades = $3',[
        nombre_d,
        descripcion_d,
        id
    ]) 
    console.log(response);
    res.json('Discapacidad Actualizada');
};
const deleteDisability = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM discapacidades WHERE id_discapacidades = $1',[id]);
    res.json(`Discapacidad ${id} eliminada correctamente`);
};

module.exports = {
    getDisability,
    getDisabilityById,
    createDisability,
    updateDisability,
    deleteDisability
}
