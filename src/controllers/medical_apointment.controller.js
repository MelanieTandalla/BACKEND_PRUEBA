const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})
const getMedicalApointment = async(req, res) => {
    const response=await pool.query('SELECT * FROM cita_medica');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getMedicalApointmentById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM cita_medica WHERE id_cita_medica = $1',[id]);
    res.json(response.rows);
};
const createMedicalApointment = async(req, res) => {
    const {
        fecha_asignada,
        hora_inicio,
        hora_fin,
        id_paciente,
        id_doctor
    }=req.body;
   const response= await pool.query('INSERT INTO cita_medica (fecha_asignada,hora_inicio,hora_fin,id_paciente,id_doctor ) VALUES($1,$2,$3,$4,$5)',[
        fecha_asignada,
        hora_inicio,
        hora_fin,
        id_paciente,
        id_doctor
    ]);
   console.log(response);
    res.json({
        message:'¡La cita medica se ha creado satisfactoriamente!',
        body:{
            doctor: {
                fecha_asignada,
                hora_inicio,
                hora_fin,
                id_paciente,
                id_doctor
            }
        }
    })
};
const updateMedicalApointment = async(req, res) => {
    const id=req.params.id;
    const { 
        fecha_asignada,
        hora_inicio,
        hora_fin,
        id_paciente,
        id_doctor
    }=req.body;
    const response = await pool.query('UPDATE cita_medica SET fecha_asignada = $1, hora_inicio = $2, hora_fin=$3,id_paciente = $4, id_doctor = $5 WHERE id_cita_medica = $6',[
        fecha_asignada, 
        hora_inicio,
        hora_fin,
        id_paciente,
        id_doctor,
        id
    ]) 
    console.log(response);
    res.json('Cita Medica Actualizada correctamente');
};
const deleteMedicalApointment = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM cita_medica WHERE id_cita_medica = $1',[id]);
    res.json(`Cita medica con id: ${id} eliminada correctamente`);
};

module.exports = {
    getMedicalApointment,
    getMedicalApointmentById,
    createMedicalApointment,
    updateMedicalApointment,
    deleteMedicalApointment
}