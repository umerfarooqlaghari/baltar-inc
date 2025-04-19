const { createBookingService, getBookingsService } = require('../services/bookingService');

exports.createBooking = (req, res) => {
  try {
    const result = createBookingService(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBookings = (req, res) => {
  const result = getBookingsService();
  res.json(result);
};
