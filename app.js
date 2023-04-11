const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();
const cors = require('cors')

app.use(cors());
const sequelize = require('./util/database');

const bookingRoutes = require('./routes/bookingPage');
const adminRoutes = require('./routes/appointmentData');
const errorController = require('./controllers/error');

app.use(bodyParser.json({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(bookingRoutes);

app.use(errorController.get404);

sequelize.sync()
    .then(
    result => {
        app.listen(4000);
    })
    .catch(err => console.log(err));

