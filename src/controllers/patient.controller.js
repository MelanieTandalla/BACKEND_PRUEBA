const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})
const getPatient = async(req, res) => {
    const response=await pool.query('SELECT * FROM pacientes');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getPatientById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT pacientes.id_paciente,pacientes.nombre_paciente,pacientes.apellido_paciente,pacientes.direccion_paciente,pacientes.telefono_paciente,pacientes.email_paciente,pacientes.password_paciente,pacientes.tlf_familiar_paciente,pacientes.fecha_nacimiento_paciente,pacientes.genero_paciente,pacientes.id_alergias,alergias.nombre_alergia as alergia_nombre ,pacientes.id_discapacidades,discapacidades.nombre_discapacidad as discapacidad_nombre from pacientes inner join alergias on alergias.id_alergia = pacientes.id_alergias inner  join discapacidades on discapacidades.id_discapacidades =pacientes.id_discapacidades  WHERE id_paciente = $1',[id]);
    res.json(response.rows);
};
const createPatient = async(req, res) => {
    const {
        nombre_paciente,
        apellido_paciente, 
        direccion_paciente,
        telefono_paciente, 
        email_paciente,
        password_paciente,
        tlf_familiar_paciente,
        fecha_nacimiento_paciente,
        genero_paciente,
        id_alergias,
        id_discapacidades
    }=req.body;
   const response= await pool.query('INSERT INTO pacientes (nombre_paciente,apellido_paciente, direccion_paciente,telefono_paciente, email_paciente,password_paciente,tlf_familiar_paciente,fecha_nacimiento_paciente,genero_paciente,id_alergias,id_discapacidades) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',[
    nombre_paciente,
    apellido_paciente, 
    direccion_paciente,
    telefono_paciente, 
    email_paciente,
    password_paciente,
    tlf_familiar_paciente,
    fecha_nacimiento_paciente,
    genero_paciente,
    id_alergias,
    id_discapacidades]);
   console.log(response);
    res.json({
        message:'¡El paciente se ha creado satisfactoriamente!',
        body:{
            pacientes: {
                nombre_paciente,
                apellido_paciente, 
                direccion_paciente,
                telefono_paciente, 
                email_paciente,
                password_paciente,
                tlf_familiar_paciente,
                fecha_nacimiento_paciente,
                genero_paciente,
                id_alergias,
                id_discapacidades
            }
        }
    })
};
const updatePatient = async(req, res) => {
    const id=req.params.id;
    const { 
        nombre_paciente,
        apellido_paciente, 
        direccion_paciente,
        telefono_paciente, 
        email_paciente,
        password_paciente,
        tlf_familiar_paciente,
        fecha_nacimiento_paciente,
        genero_paciente,
        id_alergias,
        id_discapacidades
    }=req.body;
    console.log(req.body);
    const response = await pool.query('UPDATE pacientes SET  nombre_paciente= $1, apellido_paciente = $2, direccion_paciente=$3, telefono_paciente = $4, email_paciente = $5,password_paciente =$6 ,tlf_familiar_paciente=$7, fecha_nacimiento_paciente=$8, genero_paciente =$9, id_alergias= $10, id_discapacidades= $11  WHERE id_paciente = $12',[
       nombre_paciente,
        apellido_paciente, 
        direccion_paciente,
        telefono_paciente, 
        email_paciente,
        password_paciente,
        tlf_familiar_paciente,
        fecha_nacimiento_paciente,
        genero_paciente,
        id_alergias,
        id_discapacidades,
        id
    ]) 
    console.log(response);
    res.json('Paciente Actualizado');
};
const deletePatient = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM pacientes WHERE id_paciente = $1',[id]);
    res.json(`Paciente con id: ${id} eliminado correctamente`);
};

module.exports = {
    getPatient,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
}
