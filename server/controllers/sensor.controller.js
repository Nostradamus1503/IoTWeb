const Sensor = require('../models/sensor');
const sensorCtrl = {};

sensorCtrl.getSensors = async(req, res) => {
    const sensors = await Sensor.find();
    console.log(sensors);
    res.json(sensors);
}
sensorCtrl.createSensor = async(req, res) => {
    const sensor = new Sensor({
        sid: req.body.sid,
        sensorname: req.body.sensorname,
        location: req.body.location,
        alarmname: req.body.alarmname,
        alvalue: req.body.alvalue
    });
    await sensor.save();
    res.json({
        'status': 'Sensor Guardado'
    });
};

sensorCtrl.getSensor = async(req, res) => {
    console.log(req.params.id);
    const sensor = await Sensor.findById(req.params.id);
    res.json(sensor);
};
sensorCtrl.editSensor = async(req, res) => {
    const { _id } = req.params;
    const sensor = {
        sid: req.body.sid,
        sensorname: req.body.sensorname,
        location: req.body.location,
        alarmname: req.body.alarmname,
        alvalue: req.body.alvalue
    };
    await Sensor.findByIdAndUpdate(req.params.id, { $set: sensor }, { new: true });
    res.json({ status: 'Sensor Actualizado' });
};
sensorCtrl.deleteSensor = async(req, res) => {
    await Sensor.findByIdAndDelete(req.params.id);
    res.json({ status: 'Sensor Eliminado' })
};
module.exports = sensorCtrl;