const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const { Schema } = mongoose;


const MeasurementSchema = new Schema({
    id: { type: Number, unique: true, index: true },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    date: Date
});

module.exports = mongoose.model('Measurements', MeasurementSchema);