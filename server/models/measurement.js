const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const { Schema } = mongoose;


const MeasurementSchema = new Schema({
    sensor_id: Number,
    name: { type: String, required: true },
    value: { type: Number, required: true },
    date: Date
});

module.exports = mongoose.model('Measurements', MeasurementSchema);