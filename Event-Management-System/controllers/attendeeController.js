const Attendee = require('../models/Attendee');

exports.createAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.create(req.body);
    res.status(201).json(attendee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
