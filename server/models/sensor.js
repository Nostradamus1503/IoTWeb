const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const { Schema } = mongoose;


const SensorSchema = new Schema({
    sid: { type: Number, unique: true, index: true },
    sensorname: { type: String, required: true },
    location: String,
    alarmname: String,
    alvalue: Number
});

module.exports = mongoose.model('Sensors', SensorSchema);