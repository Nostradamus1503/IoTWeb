const express = require('express');
const router = express.Router();
const sensor = require('../controllers/sensor.controller');
router.get('/', sensor.getSensors);
//router.get('/')
router.post('/', sensor.createSensor);
router.get('/:id', sensor.getSensor)
router.put('/:id', sensor.editSensor);
router.delete('/:id', sensor.deleteSensor);
module.exports = router;