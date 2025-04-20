const { runAuditService } = require('../services/auditService');

exports.runAudit = async (req, res) => {
  try {
    const result = await runAuditService(req.body.url);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
