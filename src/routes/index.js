const {Router} = require('express');
const router = Router();

const {getDisability,
    getDisabilityById,
     createDisability, 
     deleteDisability,
     updateDisability,
     getDoctors,
     getDoctorsById,
     createDoctor,
     updateDoctor,
     deleteDoctor,
     getPatient,
     getPatientById,
     createPatient
} = require('../controllers/index.controller')

router.get('/api/disabilities', getDisability);
router.get('/api/doctors', getDoctors);
router.get('/api/disabilities/:id', getDisabilityById);
router.get('/api/doctors/:id', getDoctorsById);
router.get('/api/patients',getPatient);
router.get('/api/patients/:id', getPatientById);

router.post('/api/disabilities', createDisability);
router.post('/api/doctors', createDoctor);
router.post('/api/patients',createPatient);

router.put('/api/disabilities/:id',updateDisability);
router.put('/api/doctors/:id',updateDoctor);

router.delete('/api/disabilities/:id', deleteDisability);
router.delete('/api/doctors/:id', deleteDoctor);

module.exports = router;
