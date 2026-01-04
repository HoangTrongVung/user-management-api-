## 📌 User Management API

A RESTful API for user management built with Node.js, Express, Prisma, featuring JWT Authentication, Role-based Authorization, Pagination, Search, and Swagger Documentation.

🚀 Features

User Registration & Login

JWT Authentication (Access Token + Refresh Token)

Role-based Authorization (USER / ADMIN)

Admin: Get list of users

Pagination

Search by email

User: Update profile

Swagger API Documentation

🛠️ Tech Stack

Node.js

Express.js

Prisma ORM

PostgreSQL

JWT (jsonwebtoken)

Swagger (OpenAPI 3.0)

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
│   │   ├── auth.js
│   │   └── role.js
│   ├── swagger.js
│   ├── prisma.js
│   └── index.js
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

User logs in → receives:

Access Token (15 minutes)

Refresh Token (7 days)

Access Token used for protected APIs

When expired → call Refresh Token API to get a new Access Token

📖 API Documentation (Swagger)

After running the server, open:

http://localhost:3000/api-docs


You can:

Test APIs directly

View request/response schema

Authorize using Bearer Token

📌 API Endpoints Overview
🔑 Auth
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Login
POST	/auth/refresh-token	Refresh access token
👤 User
Method	Endpoint	Description
PUT	/users/profile	Update user profile
👑 Admin
Method	Endpoint	Description
GET	/admin/users	Get all users (ADMIN only)

Query parameters for /admin/users:

page

limit

search

Example:

/admin/users?page=1&limit=5&search=test

🔒 Authorization

USER: Access personal APIs

ADMIN: Access admin APIs

Authorization implemented using middleware:

auth.js

role.js

🧪 Testing

Use Postman or Thunder Client

Swagger UI available for quick testing

📌 Future Improvements

Refresh Token rotation

Logout API

Soft delete users

Docker support

Unit testing

👤 Author

Hoàng Trọng Vững
Backend Developer Intern
📍 Ho Chi Minh City, Vietnam

GitHub: https://github.com/HoangTrongVung

⭐ Notes for Recruiters

This project demonstrates:

RESTful API design

Authentication & Authorization

Clean project structure

Real-world backend features