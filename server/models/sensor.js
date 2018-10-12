const mongoose = require('mongoose');
const { Schema } = mongoose;

const SensorSchema = new Schema({
    id: { type: Number, unique: true },
    sensorname: { type: String, required: true },
    location: String,
    alarmname: String,
    alvalue: Number
});

module.exports = mongoose.model('Sensors', sensorSchema);