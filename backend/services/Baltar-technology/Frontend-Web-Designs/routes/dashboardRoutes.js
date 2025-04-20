const express = require('express');
const router = express.Router();
const { getDashboard } = require('../controllers/dashboardController');

router.get('/:clientId', getDashboard);

module.exports = router;
