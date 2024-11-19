# 📚 Library Management System

The **Library Management System** is a backend application built with Node.js, Express, and MongoDB to handle library operations like managing books, authors, and users, as well as borrowing and returning books.

---

## 🛠 Features

- **Author Management**: Add new authors to the database.
- **Book Management**: Add books and link them to authors.
- **User Management**: Register users who can borrow books.
- **Borrow & Return Books**: Manage borrowing and returning operations.
- **List Books by Author**: Retrieve all books by a specific author.
- **List Borrowed Books**: Retrieve all books borrowed by a specific user.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14+ recommended)
- **MongoDB** (local or cloud)
- Package manager: `npm` or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/library-management-system.git
   cd library-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/librarydb
   ```

4. Start the application:
   ```bash
   nodemon index.js
   ```

---

## 🖇 API Endpoints

### **Author Management**
- **Add Author**  
  `POST /api/authors`  
  **Body**: `{ "name": "Author Name" }`

### **Book Management**
- **Add Book**  
  `POST /api/books`  
  **Body**: `{ "title": "Book Title", "authorId": "AuthorID" }`

- **List Books by Author**  
  `GET /api/books/:authorId`

### **User Management**
- **Add User**  
  `POST /api/users`  
  **Body**: `{ "name": "User Name" }`

### **Borrow & Return Management**
- **Borrow a Book**  
  `POST /api/borrow`  
  **Body**: `{ "userId": "UserID", "bookId": "BookID" }`

- **Return a Book**  
  `POST /api/return`  
  **Body**: `{ "userId": "UserID", "bookId": "BookID" }`

- **List Borrowed Books by User**  
  `GET /api/borrowed/:userId`

---

## 🛡 Error Handling

- Handles invalid requests with appropriate error responses.
- Validates required fields for API endpoints.

---

## 🌟 Technologies Used

- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: MongoDB ORM

---

## 📂 Project Structure

```plaintext
LibraryManagementSystem/
├── config/
│   └── db.js             # Database connection setup
├── controllers/
│   └── libraryController.js  # Logic for library operations
├── models/
│   ├── Author.js         # Author schema
│   ├── Book.js           # Book schema
│   └── User.js           # User schema
├── routes/
│   └── libraryRoutes.js  # API routes
├── .env                  # Environment variables
├── index.js              # Application entry point
└── package.json          # Project dependencies
```

---

## 📝 Notes

- Ensure MongoDB is running locally or provide a valid cloud connection string.
- Customize the `.env` file as per your setup.


---

## 🏅 Acknowledgments

Special thanks to the **Node.js** and **MongoDB** communities for their amazing documentation and support.

-