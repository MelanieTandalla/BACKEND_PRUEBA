/*const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})
const getSchedules = async(req, res) => {
    const response=await pool.query('SELECT * FROM horario');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getScheduleById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM horario WHERE id_horario = $1',[id]);
    res.json(response.rows);
};

const createSchedule = async(req, res) => {
    const {
        id_horario,
	    descripcion
    }=req.body;
   const response= await pool.query('INSERT INTO horario VALUES($1,$2)',[
        id_horario,
        descripcion
    ]);
   console.log(response);
    res.json({
        message:'¡El horario se ha creado satisfactoriamente!',
        body:{
            horario: {
                id_horario,
	            descripcion
            }
        }
    })
};
const updateSchedule = async(req, res) => {
    const id=req.params.id; 
    const { 
        id_horario,
        descripcion
    }=req.body;
    const response = await pool.query('UPDATE horario SET id_horario=$1,descripcion =$2 WHERE id_horario = $3',[
        id_horario,
        descripcion,
        id
    ]) 
    console.log(response);
    res.json('Horario Actualizado correctamente');
};
const deleteSchedule = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM horario WHERE id_horario = $1',[id]);
    res.json(`Horario con id: ${id} eliminado correctamente`);
};

module.exports = {
   getSchedules,
   getScheduleById,
   createSchedule,
   updateSchedule,
   deleteSchedule
}*/