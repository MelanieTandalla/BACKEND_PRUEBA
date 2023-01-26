const {Router} = require('express');
const router = Router();

const {getDisability,getDisabilityById, createDisability, deleteDisability,updateDisability} = require('../controllers/index.controller')

router.get('/api/disabilities', getDisability);
router.get('/api/disabilities/:id', getDisabilityById);
router.delete('/api/disabilities/:id', deleteDisability);
router.post('/api/disabilities', createDisability);
router.put('/api/disabilities/:id',updateDisability);

module.exports = router;
