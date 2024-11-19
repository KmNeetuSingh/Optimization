const Registration = require('../models/Registration');
const Event = require('../models/Event');
const Attendee = require('../models/Attendee');

exports.registerAttendee = async (req, res) => {
  try {
    const { eventId, attendeeId } = req.body;

    // Ensure no duplicate registrations
    const existingRegistration = await Registration.findOne({ event: eventId, attendee: attendeeId });
    if (existingRegistration) {
      return res.status(400).json({ error: 'Attendee is already registered for this event.' });
    }

    const registration = await Registration.create({ event: eventId, attendee: attendeeId });

    // Update event and attendee with registration details
    await Event.findByIdAndUpdate(eventId, { $push: { attendees: registration._id } });
    await Attendee.findByIdAndUpdate(attendeeId, { $push: { registrations: registration._id } });

    res.status(201).json(registration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.cancelRegistration = async (req, res) => {
  try {
    const { registrationId } = req.params;

    const registration = await Registration.findByIdAndDelete(registrationId);

    if (!registration) {
      return res.status(404).json({ error: 'Registration not found.' });
    }

    // Remove references from event and attendee
    await Event.findByIdAndUpdate(registration.event, { $pull: { attendees: registrationId } });
    await Attendee.findByIdAndUpdate(registration.attendee, { $pull: { registrations: registrationId } });

    res.status(200).json({ message: 'Registration canceled successfully.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
