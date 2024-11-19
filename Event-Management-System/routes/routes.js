const express = require('express');
const { createAttendee } = require('../controllers/attendeeController');
const { createEvent, getEventAttendees } = require('../controllers/eventController');
const { registerAttendee, cancelRegistration } = require('../controllers/registrationController');

const router = express.Router();

// Routes
router.post('/attendees', createAttendee);
router.post('/events', createEvent);
router.post('/register', registerAttendee);
router.get('/attendees/:eventId', getEventAttendees);
router.delete('/registrations/:registrationId', cancelRegistration);

module.exports = router;
