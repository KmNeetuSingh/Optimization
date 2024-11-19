# **Event Management System**

An Event Management System built using **Node.js**, **Express.js**, **Mongoose**, and **MongoDB**. This system allows organizers to create events, attendees to register for events, and track registrations efficiently.

---

## **Features**
- Add organizers, events, and attendees.
- Register attendees for events while ensuring no duplicate registrations.
- List attendees of a specific event or events attended by a user.
- Update event or organizer details.
- Cancel a registration.

---

## **Tech Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Environment Variables**: dotenv

---

## **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/event-management-system.git
   cd event-management-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Setup Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/eventManagement
   ```

4. **Start MongoDB**:
   ```bash
   mongod
   ```

5. **Run the Application**:
   ```bash
   npm start
   ```

---

## **Directory Structure**
```
EventManagementSystem/
├── config/
│   └── db.js                     # Database connection
├── controllers/
│   ├── attendeeController.js     # Attendee logic
│   ├── eventController.js        # Event logic
│   ├── organizerController.js    # Organizer logic
│   └── registrationController.js # Registration logic
├── models/
│   ├── Attendee.js               # Attendee Schema
│   ├── Event.js                  # Event Schema
│   ├── Organizer.js              # Organizer Schema
│   └── Registration.js           # Registration Schema
├── routes/
│   └── routes.js                 # API routes
├── .env                          # Environment variables
├── index.js                      # Application entry point
└── package.json                  # Project metadata
```

---

## **API Endpoints**

### **Attendees**
- **Create an Attendee**:  
  **POST** `/api/attendees`  
  **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890"
  }
  ```

### **Events**
- **Create an Event**:  
  **POST** `/api/events`  
  **Body**:
  ```json
  {
    "title": "Tech Conference 2024",
    "date": "2024-12-15",
    "location": "New York",
    "organizer": "organizerId"
  }
  ```

- **Get Event Attendees**:  
  **GET** `/api/attendees/:eventId`

### **Registrations**
- **Register an Attendee for an Event**:  
  **POST** `/api/register`  
  **Body**:
  ```json
  {
    "eventId": "eventId",
    "attendeeId": "attendeeId"
  }
  ```

- **Cancel a Registration**:  
  **DELETE** `/api/registrations/:registrationId`

---

## **Usage**
- Add organizers, attendees, and events.
- Link attendees to events via registrations.
- Query attendees for a specific event or events attended by a user.

---

## **Sample `.env` File**
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/eventManagement
```

---