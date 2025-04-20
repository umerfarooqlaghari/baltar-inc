exports.subscribePlan = (req, res) => {
    const { userId, plan } = req.body;
    res.json({ message: `Subscribed user ${userId} to plan ${plan}` });
  };
  
  exports.cancelPlan = (req, res) => {
    const { userId } = req.body;
    res.json({ message: `Cancelled subscription for user ${userId}` });
  };
  