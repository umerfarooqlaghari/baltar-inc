const express = require('express');
const router = express.Router();
const { subscribePlan, cancelPlan } = require('../controllers/subscriptionController');

router.post('/subscribe', subscribePlan);
router.post('/cancel', cancelPlan);

module.exports = router;
