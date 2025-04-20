const express = require('express');
const router = express.Router();

// Import real route modules from the subservice
router.use('/audit', require('../services/Baltar-technology/Frontend-Web-Designs/routes/auditRoutes'));
router.use('/seo', require('../services/Baltar-technology/Frontend-Web-Designs/routes/seoRoutes'));
router.use('/bookings', require('../services/Baltar-technology/Frontend-Web-Designs/routes/bookingRoutes'));

module.exports = router;
