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
     deleteDoctor
} = require('../controllers/index.controller')

router.get('/api/disabilities', getDisability);
router.get('/api/doctors', getDoctors);
router.get('/api/disabilities/:id', getDisabilityById);
router.get('/api/doctors/:id', getDoctorsById);

router.post('/api/disabilities', createDisability);
router.post('/api/doctors', createDoctor);

router.put('/api/disabilities/:id',updateDisability);
router.put('/api/doctors/:id',updateDoctor);

router.delete('/api/disabilities/:id', deleteDisability);
router.delete('/api/doctors/:id', deleteDoctor);

module.exports = router;
