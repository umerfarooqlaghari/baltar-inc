const { generateSEOService } = require('../services/seoService');

exports.generateSEOReport = async (req, res) => {
  try {
    const result = await generateSEOService(req.body.url);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
