# **Contact Management Application**

A simple Node.js application using **Express** and **Mongoose** to manage contacts with validation rules to ensure data integrity.

---

## **Features**

- CRUD operations for managing contacts.
- Data validation using **Mongoose Schema**.
- Proper error handling and validation messages.
- Clean and modular code structure.

---

## **Schema Validation Rules**

1. **Name**:  
   - Required, minimum 3 characters.  
   - Example: `"John Doe"`.
2. **Email**:  
   - Required, must match a valid email format.  
   - Example: `"john.doe@example.com"`.
3. **Phone**:  
   - Required, must be exactly 10 digits.  
   - Example: `"1234567890"`.
4. **Age** (optional):  
   - Must be an integer between 18 and 65.  
   - Example: `30`.

---

## **API Endpoints**

### **Base URL:** `/api/users`

| Method | Endpoint      | Description                |
|--------|---------------|----------------------------|
| POST   | `/`           | Create a new contact.      |
| GET    | `/`           | Fetch all contacts.        |
| PUT    | `/:id`        | Update an existing contact.|
| DELETE | `/:id`        | Delete a contact.          |

---

## **Getting Started**

### **1. Prerequisites**
- Node.js installed on your system.
- MongoDB installed and running locally or a MongoDB URI.

---

### **2. Installation**
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

### **3. Configuration**
Update your MongoDB connection string in `config/db.js`:
```javascript
await mongoose.connect('mongodb://127.0.0.1:27017/contactApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

---

### **4. Run the Application**
Start the server:
```bash
npx nodemon server.js
```
The server will run on `http://localhost:5000`.

---

## **How to Use**

### **Create a New Contact**
- **Endpoint:** `POST /api/users`
- **Body Example:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "age": 30
  }
  ```

### **Get All Contacts**
- **Endpoint:** `GET /api/users`

### **Update a Contact**
- **Endpoint:** `PUT /api/users/:id`
- **Body Example:**
  ```json
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "phone": "9876543210",
    "age": 35
  }
  ```

### **Delete a Contact**
- **Endpoint:** `DELETE /api/users/:id`

---

## **Error Handling**

- **Validation Errors:** Returns specific validation messages for invalid input.
- **Example Response:**
  ```json
  {
    "error": "Phone number must be exactly 10 digits"
  }
  ```

---

## **Technologies Used**

- **Node.js**: Backend framework.
- **Express.js**: Web server.
- **MongoDB**: Database.
- **Mongoose**: ORM for MongoDB.

---

## **Folder Structure**
```
project/
├── server.js          # Server setup
├── routes/
│   └── userRoutes.js  # Routes for CRUD operations
├── models/
│   └── userModel.js   # Mongoose schema and model
└── config/
    └── db.js          # MongoDB connection
```

---