const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})
const getMedicalAssignment = async(req, res) => {
    const response=await pool.query('select asignacioncitamedica.id_asignacion_medica,asignacioncitamedica.id_cita_medica,asignacioncitamedica.id_consultorio,cita_medica.fecha_asignada,horario.descripcion as horario, consultorio.nombre_consultorio as id_consultoriol,pacientes.nombre_paciente as nombre_paciente,pacientes.apellido_paciente as apellido_paciente,doctor.nombre_d as nombre_doctor, doctor.apellidos_d as apellido_doctor from asignacioncitamedica inner join consultorio on consultorio.id_consultorio = asignacioncitamedica.id_consultorio inner join cita_medica on cita_medica.id_cita_medica = asignacioncitamedica.id_cita_medica inner join horario on horario.id_horario = cita_medica.id_horario inner join pacientes on pacientes.id_paciente = cita_medica.id_paciente inner join doctor on doctor.id_doctor = cita_medica.id_doctor');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getMedicalAssignmentById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM asignacionCitaMedica WHERE id_asignacion_cita_medica = $1',[id]);
    res.json(response.rows);
};
const getMedicalAssignmentByMedicalApointmentId = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('select * from asignacioncitamedica where id_cita_medica = $1',[id]);
    res.json(response.rows);
};
const createMedicalAssignment = async(req, res) => {
    const {
        id_cita_medica,
	    id_consultorio
    }=req.body;
   const response= await pool.query('INSERT INTO asignacionCitaMedica(id_cita_medica,id_consultorio ) VALUES($1,$2)',[
        id_cita_medica,
        id_consultorio
    ]);
   console.log(response);
    res.json({
        message:'¡La asignación medica se ha creado satisfactoriamente!',
        body:{
            asignacionCitaMedica: {
                id_cita_medica,
                id_consultorio
            }
        }
    })
};
const updateMedicalAssignment = async(req, res) => {
    const id=req.params.id; 
    const { 
        id_cita_medica,
        id_consultorio
    }=req.body;
    const response = await pool.query('UPDATE asignacionCitaMedica SET id_cita_medica=$1,id_consultorio =$2 WHERE id_asignacion_medica = $3',[
        id_cita_medica,
	    id_consultorio,
        id
    ]) 
    console.log(response);
    res.json('Asignacion Medica Actualizada correctamente');
};
const deleteMedicalAssignment = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM cita_medica WHERE id_asignacion_medica = $1',[id]);
    res.json(`Asignacion medica con id: ${id} eliminada correctamente`);
};

module.exports = {
    getMedicalAssignment,
    getMedicalAssignmentById,
    createMedicalAssignment,
    updateMedicalAssignment,
    deleteMedicalAssignment,
    getMedicalAssignmentByMedicalApointmentId
}