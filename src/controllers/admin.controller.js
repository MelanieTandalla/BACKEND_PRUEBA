const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})
const getAdmin = async(req, res) => {
    const response=await pool.query('SELECT * FROM administrador');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getAdminById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM administrador WHERE id_admin = $1',[id]);
    res.json(response.rows);
};
const createAdmin = async(req, res) => {
    const {
        nombre_admin,
	    apellido_admin,
	    username_admin,
	    email_admin,
	    password_admin,
	    isAdmin 
    }=req.body;
   const response= await pool.query('INSERT INTO administrador (nombre_admin,apellido_admin,username_admin,email_admin,password_admin,isAdmin ) VALUES($1,$2,$3,$4,$5,$6)',[
    nombre_admin,
    apellido_admin,
    username_admin,
    email_admin,
    password_admin,
    isAdmin
]);
   console.log(response); 
    res.json({
        message:'¡El administrador se ha creado satisfactoriamente!',
        body:{
            administrador: { 
                nombre_admin,
                apellido_admin,
                username_admin,
                email_admin,
                password_admin,
                isAdmin
            }
        }
    })
};
const updateAdmin = async(req, res) => {
    const id=req.params.id;
    const { 
        nombre_admin,
        apellido_admin,
        username_admin,
        email_admin,
        password_admin,
        isAdmin
    }=req.body;
    const response = await pool.query('UPDATE administrador SET nombre_admin = $1, apellido_admin = $2, username_admin=$3,email_admin = $4, password_admin = $5,isAdmin=$6 WHERE id_admin = $7',[
        nombre_admin,
        apellido_admin,
        username_admin,
        email_admin,
        password_admin,
        isAdmin,
        id
    ]) 
    console.log(response);
    res.json('Administrador Actualizado');
};
const deleteAdmin = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM administrador WHERE id_admin = $1',[id]);
    res.json(`Admin ${id} eliminado correctamente`);
};

module.exports = {
   getAdmin, 
   getAdminById,
   createAdmin,
   updateAdmin,
   deleteAdmin
}