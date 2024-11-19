const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEventAttendees = async (req, res) => {
  try {
    const attendees = await Event.findById(req.params.eventId)
      .populate('attendees')
      .exec();
    res.status(200).json(attendees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
