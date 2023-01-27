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

const getDoctors = async(req, res) => {
    const response=await pool.query('SELECT * FROM doctor');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getDoctorsById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM doctor WHERE id_doctor = $1',[id]);
    res.json(response.rows);
};
const createDoctor = async(req, res) => {
    const {nombre_d,
        apellidos_d, 
        email,
        dirreccion_d, 
        contraseña_d,
        id_especialidades
    }=req.body;
   const response= await pool.query('INSERT INTO doctor (nombre_d,apellidos_d, email,dirreccion_d, contraseña_d,id_especialidades ) VALUES($1,$2,$3,$4,$5,$6)',[nombre_d,apellidos_d, email,dirreccion_d, contraseña_d,id_especialidades]);
   console.log(response);
    res.json({
        message:'¡El doctor se ha creado satisfactoriamente!',
        body:{
            doctor: {nombre_d,apellidos_d, email,dirreccion_d, contraseña_d,id_especialidades}
        }
    })
};
const updateDoctor = async(req, res) => {
    const id=req.params.id;
    const { 
        nombre_d,
        apellidos_d, 
        email,
        dirreccion_d, 
        contraseña_d,
        id_especialidades
    }=req.body;
    const response = await pool.query('UPDATE doctor SET nombre_d = $1, apellidos_d = $2, email=$3,dirreccion_d = $4, contraseña_d = $5,id_especialidades=$6 WHERE id_doctor = $7',[
        nombre_d,
        apellidos_d, 
        email,
        dirreccion_d, 
        contraseña_d,
        id_especialidades,
        id
    ]) 
    console.log(response);
    res.json('Doctor Actualizado');
};
const deleteDoctor = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM doctor WHERE id_doctor = $1',[id]);
    res.json(`Doctor ${id} eliminado correctamente`);
};
//Pacientes metodos

const getPatient = async(req, res) => {
    const response=await pool.query('SELECT * FROM pacientes');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getPatientById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM pacientes WHERE id_paciente = $1',[id]);
    res.json(response.rows);
};
const createPatient = async(req, res) => {
    const {
        nombre_paciente,
        apellido_paciente, 
        direccion_paciente,
        telefono_paciente, 
        email_paciente,
        tlf_familiar_paciente,
        fecha_nacimiento_paciente,
        genero_paciente,
        id_alergias,
        id_discapacidades
    }=req.body;
   const response= await pool.query('INSERT INTO pacientes (nombre_paciente,apellido_paciente, direccion_paciente,telefono_paciente, email_paciente,tlf_familiar_paciente,fecha_nacimiento_paciente,genero_paciente,id_alergias,id_discapacidades) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',[nombre_paciente,
    apellido_paciente, 
    direccion_paciente,
    telefono_paciente, 
    email_paciente,
    tlf_familiar_paciente,
    fecha_nacimiento_paciente,
    genero_paciente,
    id_alergias,
    id_discapacidades]);
   console.log(response);
    res.json({
        message:'¡El paciente se ha creado satisfactoriamente!',
        body:{
            pacientes: {nombre_paciente,
                apellido_paciente, 
                direccion_paciente,
                telefono_paciente, 
                email_paciente,
                tlf_familiar_paciente,
                fecha_nacimiento_paciente,
                genero_paciente,
                id_alergias,
                id_discapacidades}
        }
    })
};
/*const updateDoctor = async(req, res) => {
    const id=req.params.id;
    const { 
        nombre_d,
        apellidos_d, 
        email,
        dirreccion_d, 
        contraseña_d,
        id_especialidades
    }=req.body;
    const response = await pool.query('UPDATE doctor SET nombre_d = $1, apellidos_d = $2, email=$3,dirreccion_d = $4, contraseña_d = $5,id_especialidades=$6 WHERE id_doctor = $7',[
        nombre_d,
        apellidos_d, 
        email,
        dirreccion_d, 
        contraseña_d,
        id_especialidades,
        id
    ]) 
    console.log(response);
    res.json('Doctor Actualizado');
};
const deleteDoctor = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM doctor WHERE id_doctor = $1',[id]);
    res.json(`Doctor ${id} eliminado correctamente`);
};*/

module.exports = {
    getDisability,
    getDisabilityById,
    getDoctors,
    getDoctorsById,
    createDisability,
    createDoctor,
    updateDisability,
    updateDoctor,
    deleteDisability,
    deleteDoctor,
    getPatient,
    getPatientById,
    createPatient
}
