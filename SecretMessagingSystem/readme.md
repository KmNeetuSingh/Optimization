# Secret Messaging System

The **Secret Messaging System** is a Node.js-based application that provides functionality to encrypt, decrypt, hash, and verify messages. It demonstrates the use of both built-in (`crypto`) and external libraries (`crypto-js`) for secure message handling.

## Features

- **Encryption & Decryption (Built-in `crypto`):**
  - Encrypt messages with `AES-256-CBC`.
  - Decrypt encrypted messages using the same method.

- **Encryption & Decryption (External `crypto-js`):**
  - Encrypt messages with `AES`.
  - Decrypt encrypted messages.

- **Hashing & Verification (Coming Soon):**
  - Hash messages and verify their integrity using secure algorithms.

## Project Structure

```
SecretMessagingSystem/
├── app.js                 # Main server entry point
├── routes/
│   ├── encryptDecrypt.js  # Handles encryption and decryption routes
├── storage/
│   ├── data.json          # In-memory storage for encrypted/hashed messages
└── package.json           # Project dependencies
```

## API Endpoints

### Encryption/Decryption with Built-in `crypto`

#### `GET /encrypt1/:message`
Encrypts a message using `AES-256-CBC`.
- **Parameters**: `message` (string)
- **Response**:
  ```json
  {
    "encrypted": "<encrypted_message>",
    "iv": "<iv_value>"
  }
  ```

#### `POST /decrypt1`
Decrypts an encrypted message.
- **Request Body**:
  ```json
  {
    "encrypted": "<encrypted_message>",
    "iv": "<iv_value>"
  }
  ```
- **Response**:
  ```json
  {
    "decrypted": "<original_message>"
  }
  ```

### Encryption/Decryption with External `crypto-js`

#### `GET /encrypt2/:message`
Encrypts a message using `AES`.
- **Parameters**: `message` (string)
- **Response**:
  ```json
  {
    "encrypted": "<encrypted_message>"
  }
  ```

#### `POST /decrypt2`
Decrypts an encrypted message.
- **Request Body**:
  ```json
  {
    "encrypted": "<encrypted_message>"
  }
  ```
- **Response**:
  ```json
  {
    "decrypted": "<original_message>"
  }
  ```

## Installation

1. Clone the repository:
   ```bash
   git clone <repo_url>
   cd SecretMessagingSystem
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

## Testing API Endpoints

Use tools like [Thunder Client](https://www.thunderclient.com/) or [Postman](https://www.postman.com/) to test the endpoints.

### Example Request for `/decrypt1`
- **URL**: `http://localhost:3000/encryptDecrypt/decrypt1`
- **Method**: POST
- **Body**:
  ```json
  {
    "encrypted": "c3b2dff...",
    "iv": "a1f2d3..."
  }
  ```
- **Response**:
  ```json
  {
    "decrypted": "Hello World"
  }
  ```

## Dependencies

- `express`: For building the server and routing.
- `crypto`: Node.js built-in module for encryption/decryption.
- `crypto-js`: External library for additional encryption methods.

