const express = require('express');

const adminControls = require('../controllers/adminControls');

const router = express.Router();

router.get('/getAll', adminControls.postAllAppointments);
router.get('/getById', adminControls.postAppointment);
router.delete('/delete', adminControls.deleteAppointment);

module.exports = router;