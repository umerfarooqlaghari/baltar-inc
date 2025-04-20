exports.getDashboard = (req, res) => {
    const { clientId } = req.params;
    res.json({
      clientId,
      progress: "In progress",
      invoices: [],
      updates: [],
    });
  };
  