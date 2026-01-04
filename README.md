📌 User Management API

A RESTful User Management API built with Node.js, Express, and Prisma, implementing common real-world backend patterns such as JWT Authentication, Role-based Authorization, Pagination, Search, and Swagger API Documentation.

This project is designed as a backend practice project for Intern/Fresher level, focusing on clean structure, correctness, and practical usage.

🚀 Features

User Registration & Login

JWT Authentication

  Access Token

  Refresh Token

Role-based Authorization (USER / ADMIN)

Admin APIs:

  Get user list with pagination

  Search users by email

User APIs:

  Update personal profile

Swagger (OpenAPI 3.0) API Documentation

🛠️ Tech Stack

Node.js

Express.js

Prisma ORM

PostgreSQL

JWT (jsonwebtoken)

Swagger (swagger-ui-express, swagger-jsdoc)

📂 Project Structure

user-management/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── admin.controller.js
│   │   └── user.controller.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── admin.route.js
│   │   └── user.route.js
│   ├── middlewares/
│   │   ├── auth.js        # JWT authentication
│   │   └── role.js        # Role-based authorization
│   ├── swagger.js        # Swagger configuration
│   ├── prisma.js         # Prisma client
│   └── index.js          # App entry point
├── .env
├── .gitignore
├── package.json
└── README.md

⚙️ Environment Variables

Create a .env file in the root directory:

DATABASE_URL="postgresql://user:password@localhost:5432/user_management"
JWT_SECRET=access_secret_123
JWT_REFRESH_SECRET=refresh_secret_456

🔧 Installation & Run

1️⃣ Install dependencies

npm install

2️⃣ Generate Prisma Client

npx prisma generate

3️⃣ Run database migration

npx prisma migrate dev

4️⃣ Start development server

npm run dev

Server will run at:

http://localhost:3000

🔐 Authentication Flow

User logs in successfully

Server returns:

  Access Token (15 minutes)

  Refresh Token (7 days)

Access Token is used to call protected APIs

When Access Token expires:

  Client calls Refresh Token API

  Server issues a new Access Token

📖 API Documentation (Swagger)

After starting the server, open:

http://localhost:3000/api-docs


Swagger UI allows you to:

  View all API endpoints

  Inspect request/response schemas

  Test APIs directly

  Authorize using Bearer Token

📌 API Endpoints Overview

🔑 Auth

| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| POST   | `/auth/register`      | Register a new user  |
| POST   | `/auth/login`         | Login                |
| POST   | `/auth/refresh-token` | Refresh access token |

👤 User

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| PUT    | `/users/profile` | Update user profile |

Requires authentication (USER or ADMIN)

👑 Admin

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | `/admin/users` | Get all users |

Requires ADMIN role

Query Parameters

| Name   | Description                |
| ------ | -------------------------- |
| page   | Page number                |
| limit  | Number of records per page |
| search | Search by email            |

Example:

/admin/users?page=1&limit=5&search=test

🔒 Authorization

USER

  Access personal APIs

ADMIN

  Access admin APIs

Authorization is implemented using middleware:

  auth.js – JWT authentication

  role.js – Role checking

🧪 Testing

Swagger UI

Postman

Thunder Client

📌 Future Improvements

Refresh Token rotation

Logout API

Input validation (Zod / Joi)

Soft delete users

Docker support

Unit & integration testing

👤 Author

Hoàng Trọng Vững
Backend Developer Intern
📍 Ho Chi Minh City, Vietnam

GitHub:
👉 https://github.com/HoangTrongVung

⭐ Notes for Recruiters

This project demonstrates:

  RESTful API design principles

  JWT authentication and role-based authorization

  Clean and maintainable project structure

  Practical backend features commonly used in real-world applications
