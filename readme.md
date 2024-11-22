# User Management System  

This project implements a **User Management System** using **Node.js**, **MongoDB**, and **Mongoose**. It supports secure user registration, password hashing, and password reset functionalities.  

---

## Features  

- **User Registration**  
  - Secure password storage with hashing.  
  - Supports optional fields: `dob` and `mobileNumber`.  

- **Password Protection**  
  - Passwords are never exposed when retrieving user data.  

- **Password Reset**  
  - Users can reset their password using email and verification through `dob` or `mobileNumber`.  

---

## Project Structure  

```  
UserManagementSystem/  
├── index.js                 # Main server entry point  
├── models/  
│   ├── User.js              # Mongoose schema for user  
├── routes/  
│   ├── userRoutes.js        # Routes for user operations  
├── config/  
│   ├── db.js                # MongoDB connection setup  
├── package.json             # Project dependencies  
```  

---

## Installation  

### Prerequisites  

- Node.js installed  
- MongoDB installed and running  

### Steps  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/UserManagementSystem.git  
   cd UserManagementSystem  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the server:  
   ```bash  
   node index.js  
   ```  

4. Server will run at:  
   ```
   http://localhost:3000  
   ```  

---

## API Endpoints  

### 1. **Register a User**  
- **URL**: `POST /api/users/register`  
- **Description**: Registers a new user.  
- **Body** (JSON):  
  ```json  
  {  
    "email": "test@example.com",  
    "password": "password123",  
    "dob": "1995-01-01",  
    "mobileNumber": "1234567890"  
  }  
  ```  

- **Response**:  
  - Success:  
    ```json  
    { "message": "User registered successfully" }  
    ```  
  - Error:  
    ```json  
    { "message": "Email already registered" }  
    ```  

---

### 2. **Get User Details**  
- **URL**: `GET /api/users/:email`  
- **Description**: Retrieves user details (excluding password).  

- **Response**:  
  - Success:  
    ```json  
    {  
      "email": "test@example.com",  
      "dob": "1995-01-01",  
      "mobileNumber": "1234567890"  
    }  
    ```  
  - Error:  
    ```json  
    { "message": "User not found" }  
    ```  

---

### 3. **Reset Password**  
- **URL**: `POST /api/users/resetpassword`  
- **Description**: Resets the user's password.  
- **Body** (JSON):  
  ```json  
  {  
    "email": "test@example.com",  
    "dob": "1995-01-01",  
    "mobileNumber": "1234567890",  
    "newPassword": "newpassword456"  
  }  
  ```  

- **Response**:  
  - Success:  
    ```json  
    { "message": "Password reset successfully" }  
    ```  
  - Error:  
    ```json  
    { "message": "Invalid user details" }  
    ```  

---

## Dependencies  

- `express`: Web framework  
- `mongoose`: MongoDB ODM  
- `bcrypt`: Password hashing  

---