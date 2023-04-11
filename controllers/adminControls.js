const Appointment = require('../model/appointment');

exports.postAllAppointments = (req, res, next) => {
    Appointment.findAll()
    .then(appointments => {
        res.json(appointments);
    })
    .catch(err => console.log(err));
}

exports.postAppointment = (req, res, next) => {
    const prodId = req.body.id;
    Appointment.findByPk(prodId)
    .then(appointment => {
        res.json(appointment);
    })
    .catch(err => console.log(err));
}

exports.deleteAppointment = (req, res, next) => {
    const prodId = req.query.id;
    console.log('This is ProdId '+prodId);
    Appointment.destroy({where: {id: prodId}})
    .then(result => {
      console.log(result);
      console.log('delete Success');
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
};
