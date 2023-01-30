const {Router} = require('express');
const router = Router();

const { getDisability,getDisabilityById,createDisability, deleteDisability,
updateDisability} = require('../controllers/disability.controller');

const {getDoctors, getDoctorsById, deleteDoctor, createDoctor, updateDoctor}= require('../controllers/doctor.controller');

const {getPatient, getPatientById, deletePatient, createPatient, updatePatient}= require('../controllers/patient.controller');

const {getAllergies,getAllergiesById,createAllergies,updateAllergies,deleteAllergies}= require('../controllers/allergies.controller');

//Discapacidades listar
router.get('/api/disabilities', getDisability);
router.get('/api/disabilities/:id', getDisabilityById);

//Doctores listar
router.get('/api/doctors', getDoctors);
router.get('/api/doctors/:id', getDoctorsById);

//Pacientes listar
router.get('/api/patients',getPatient);
router.get('/api/patients/:id', getPatientById);

//Alergias listar
router.get('/api/allergies',getAllergies);
router.get('/api/allergies/:id',getAllergiesById)

//Crear
router.post('/api/disabilities', createDisability);
router.post('/api/doctors', createDoctor);
router.post('/api/patients',createPatient);
router.post('/api/allergies',createAllergies)

//update
router.put('/api/disabilities/:id',updateDisability);
router.put('/api/doctors/:id',updateDoctor);
router.put('/api/patients/:id',updatePatient);
router.put('/api/allergies/:id',updateAllergies);

//delete
router.delete('/api/disabilities/:id', deleteDisability);
router.delete('/api/doctors/:id', deleteDoctor);
router.delete('/api/patients/:id', deletePatient);
router.delete('/api/allergies/:id', deleteAllergies);

module.exports = router;
