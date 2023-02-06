const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})
const login = async(req, res) => {
    const {
       email,
       password
    }=req.body;
   const response= await pool.query('select * from pacientes where email_paciente = $1 and password_paciente = $2',[ email,password]);
   if (response.rows.length > 0) {
    res.status(200).json(response.rows);
   }else {
    const response= await pool.query('select * from doctor where email = $1 and password_d = $2',[ email,password]);
    if (response.rows.length > 0) {
        res.status(200).json(response.rows);
    }else {
        const response= await pool.query('select * from administrador where email_admin = $1 and password_admin = $2',[ email,password]);
        res.status(200).json(response.rows);
    }
   }
    
};


module.exports = {
    login
}