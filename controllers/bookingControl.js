const User = require('../model/appointment');

// exports.getBookingdeails = (req, res, next) => {

// }

exports.postBookingdetails = async (req, res, next) => {
    try {
        const name = req.body.name;
        const mail = req.body.email;
        const phone = req.body.phonenumber;
        const data = await User.create({
          name: name,
          email: mail,
          phonenumber: phone
        });
        res.status(201).json({newUserDetails : data});
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error: err});
    }
}