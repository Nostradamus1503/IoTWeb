const express = require('express');
const router = express.Router();
const measurement = require('../controllers/measurement.controller');
router.get('/', measurement.getSensors);
//router.get('/')
router.post('/', measurement.createSensor);
router.get('/:id', measurement.getSensor)
router.put('/:id', measurement.editSensor);
router.delete('/:id', measurement.deleteSensor);
module.exports = router;