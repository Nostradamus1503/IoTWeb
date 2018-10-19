const Measurement = require('../models/measurement');
const measurCtrl = {};

measurCtrl.getSensors = async(req, res) => {
    const measurements = await Measurement.find();
    console.log(measurements);
    res.json(measurements);
}
measurCtrl.createSensor = async(req, res) => {
    const measurement = new Measurement(req.body);
    await Measurement.save();
    res.json({
        'status': 'Sensor Guardado'
    });
};

measurCtrl.getSensor = async(req, res) => {
    console.log(req.params.id);
    const measurement = await Measurement.findOne({ sid: req.params.id });
    res.json(measurement);
};
measurCtrl.editSensor = async(req, res) => {
    const { id } = req.params;
    const measurement = {
        sensorname: req.body.sensorname,
        location: req.body.location,
        alarmname: req.body.alarmname,
        alvalue: req.body.alvalue
    };
    await Measurement.findByIdAndUpdate(id, { $set: sensormeasurement }, { new: true });
    res.json({ status: 'Sensor Actualizado' });
};
measurCtrl.deleteSensor = async(req, res) => {
    await Measurement.findByIdAndRemove(req.params.id);
    res.json({ status: 'Sensor Eliminado' })
};
module.exports = measurCtrl;