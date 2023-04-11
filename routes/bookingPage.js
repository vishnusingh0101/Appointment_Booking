const express = require('express');

const bookingController = require('../controllers/bookingControl');

const router = express.Router();

// router.get('/details', bookingController.getBookingPage);

router.post('/user/add-user', bookingController.postBookingdetails);

module.exports = router;