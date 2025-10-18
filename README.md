# Library API

A Library Management System backend built using **Node.js**, **Express**, and **MongoDB Atlas**.
This API allows you to manage books, members, and loans

---

## 🌐 Base URL
http://localhost:5000

---

## 📘 Endpoints

### 🧾 Books
Manage all book records in the library.

| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| **GET**    | `/api/books`      | Retrieve all books           |
| **GET**    | `/api/books/:id`  | Retrieve a single book by ID |
| **POST**   | `/api/books`      | Add a new book               |
| **PUT**    | `/api/books/:id`  | Update book information      |
| **DELETE** | `/api/books/:id`  | Delete a book record         |

---

### 👥 Members
Manage library members and their information.

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| **GET**    | `/api/members`     | Retrieve all members         |
| **GET**    | `/api/members/:id` | Retrieve a member by ID      |
| **POST**   | `/api/members`     | Add a new member             |
| **PUT**    | `/api/members/:id` | Update member details        |
| **DELETE** | `/api/members/:id` | Delete a member record       |

---

### 📖 Loans
Track which member has borrowed which book, and when it’s due.

| Method | Endpoint         | Description                 |
|--------|------------------|------------------------------|
| **GET**    | `/api/loans`      | Retrieve all loan records        |
| **GET**    | `/api/loans/:id`  | Retrieve a specific loan by ID   |
| **POST**   | `/api/loans`      | Create a new loan (borrow a book) |
| **PUT**    | `/api/loans/:id`  | Update loan details (e.g., return a book) |
| **DELETE** | `/api/loans/:id`  | Delete a loan record             |