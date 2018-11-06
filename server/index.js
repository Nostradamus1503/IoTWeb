const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');
// Settings
app.set('port', process.env.PORT || 9000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin : 'http://localhost:4200'}))
//Routes
app.use('/sensors', require('./routes/sensors.routes'));
app.use('/measurements', require('./routes/measurements.routes'));
app.use(require('./routes/default.routes'));
//Starting The Server
app.listen(app.get('port'), () => {
    console.log('Server on Port ', app.get('port'));
});