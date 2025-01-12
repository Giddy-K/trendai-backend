# Trendai Backend

Trendai Backend is a RESTful API built using [NestJS](https://nestjs.com/) that handles user authentication, campaign management, and metric tracking. The project demonstrates a scalable and secure backend architecture for modern web applications.

## Features

- User authentication (Signup, Login) with JWT-based authorization.
- Secure password storage using bcrypt.
- Modular and extensible code structure.
- Integration with MongoDB for data persistence.

---

## Table of Contents

- [Trendai Backend](#trendai-backend)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
    - [Authentication](#authentication)
      - [Signup](#signup)
      - [Login](#login)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

---

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16.x or higher)
- npm (v8.x or higher)
- MongoDB (local or cloud instance, e.g., MongoDB Atlas)

---

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/Giddy-K/trendai-backend.git
cd trendai-backend
```

Install the dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=3000
```

> Replace `<your-mongodb-uri>` with your MongoDB connection string and `<your-jwt-secret>` with a secure secret key for JWT signing.

---

## Running the Application

Start the application in development mode:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`.

To build and run the application in production:

```bash
npm run build
npm run start:prod
```

---

## API Endpoints

### Authentication

#### Signup

- **POST** `/auth/signup`
- Request Body:
  ```json
  {
    "username": "user@example.com",
    "password": "password123",
    "role": "user"
  }
  ```
- Response:
  ```json
  {

    "username": "user@example.com",
  }
  ```

#### Login

- **POST** `/auth/login`
- Request Body:
  ```json
  {
    "username": "user@example.com",
    "password": "password123"
  }
  ```
- Response:
  ```json
  {
    "accessToken": "<jwt-token>"
  }
  ```

---

## Project Structure

```plaintext
src/
├── auth/           # Authentication module
├── campaigns/      # Campaigns management module
├── metrics/        # Metrics tracking module
├── user/           # User module
├── main.ts         # Application entry point
├── app.module.ts   # Root application module
├── ...
.env                # Environment variables
README.md           # Project documentation
package.json        # Project metadata and dependencies
```

---

## Technologies Used

- **NestJS**: Framework for building efficient and scalable server-side applications.
- **MongoDB**: Database for data persistence.
- **JWT**: Secure user authentication and authorization.
- **Bcrypt**: Password hashing and verification.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE). *TODO*

---

## Contact

For any inquiries or feedback, please reach out to [gideonkipamet@gmail.com].
