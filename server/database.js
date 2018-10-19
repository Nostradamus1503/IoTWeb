const mongoose = require('mongoose');
//const CONN = 'mongodb://iotuser:M0nIzE@178.26.2.6:27017/IoTdb';
const CONN = 'mongodb://iotuser:M0nIzE@127.0.0.1:27017/IoTdb';

mongoose.connect(CONN, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;