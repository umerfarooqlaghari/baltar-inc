const express = require('express');
const router = express.Router();
const { generateSEOReport } = require('../controllers/seoController');

router.post('/', generateSEOReport);

module.exports = router;
