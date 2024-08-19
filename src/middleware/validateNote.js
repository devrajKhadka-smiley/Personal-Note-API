const validateNote = (req, res, next) => {
  const { name, email, date } = req.body;

  if (!name || !email || !date) {
    return res.status(400).json({ message: "Name, Email, and Date are required" });
  }

  next();
};

module.exports = validateNote;
