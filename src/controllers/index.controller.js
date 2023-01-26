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
    const {id_discapacidades, nombre_d,descripcion_d}=req.body;
   const response= await pool.query('INSERT INTO discapacidades (id_discapacidades, nombre_d,descripcion_d) VALUES($1,$2,$3)',[id_discapacidades, nombre_d, descripcion_d]);
   console.log(response);
    res.json({
        message:'¡La discapacidad se ha creado satisfactoriamente!',
        body:{
            discapacidades: {id_discapacidades,nombre_d, discapacidad_d}
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
    createDisability,
    getDisabilityById,
    deleteDisability,
    updateDisability
}
