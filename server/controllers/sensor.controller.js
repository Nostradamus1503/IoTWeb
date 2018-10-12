const Sensor = require('../models/sensor');
const sensorCtrl = {};

sensorCtrl.getSensors = async(req, res) => {
    const sensors = await Sensor.find();
    res.json(sensors);
}
sensorCtrl.createSensor = async(req, res) => {
    const sensors = await Sensor.find();
    res.json(sensors);
}
sensorCtrl.getSensor = function() {}
sensorCtrl.editSensor = function() {}
sensorCtrl.deleteSensor = function() {}
module.exports = sensorCtrl;