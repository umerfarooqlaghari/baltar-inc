let bookings = [];

exports.createBookingService = ({ name, email, dateTime, service }) => {
  if (!name || !email || !dateTime) {
    throw new Error('Missing required fields');
  }

  const booking = {
    id: bookings.length + 1,
    name,
    email,
    service: service || 'General Consultation',
    dateTime,
    status: 'Pending'
  };

  bookings.push(booking);
  return { message: 'Booking created', booking };
};

exports.getBookingsService = () => {
  return { bookings };
};
