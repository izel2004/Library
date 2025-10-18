# Library API

A Library Management System backend built using **Node.js**, **Express**, and **MongoDB Atlas**.
This API allows you to manage books, members, and loans

---

## 🌐 Base URL
http://localhost:5000

## 📝 Endpoints

### Books
| Method | Endpoint        | Description                | Sample Request Body |
|--------|----------------|---------------------------|-------------------|
| GET    | /api/books      | Get all books             | -                 |
| GET    | /api/books/:id  | Get a single book by ID   | -                 |
| POST   | /api/books      | Add a new book            | `{ "title": "My Book", "author": "Jarden liezel", "isbn": "123", "publishedDate": "2025-01-01" }` |
| PUT    | /api/books/:id  | Update a book by ID       | `{ "title": "Updated Book" }` |
| DELETE | /api/books/:id  | Delete a book by ID       | -                 |

### Members
| Method | Endpoint          | Description                | Sample Request Body |
|--------|-----------------|---------------------------|-------------------|
| GET    | /api/members     | Get all members           | -                 |
| GET    | /api/members/:id | Get a member by ID        | -                 |
| POST   | /api/members     | Add a new member          | `{ "name": "precy Smith", "email": "precy@example.com" }` |
| PUT    | /api/members/:id | Update a member by ID     | `{ "email": "precy_new@example.com" }` |
| DELETE | /api/members/:id | Delete a member by ID     | -                 |

### Loans
| Method | Endpoint         | Description                     | Sample Request Body |
|--------|----------------|--------------------------------|-------------------|
| GET    | /api/loans      | Get all loan records            | -                 |
| GET    | /api/loans/:id  | Get a loan record by ID         | -                 |
| POST   | /api/loans      | Create a new loan               | `{ "bookId": "BOOK_ID_HERE", "memberId": "MEMBER_ID_HERE", "loanDate": "2025-10-16", "returnDate": "2025-10-23" }` |
| PUT    | /api/loans/:id  | Update a loan (return a book)  | `{ "returnDate": "2025-10-20" }` |
| DELETE | /api/loans/:id  | Delete a loan record            | -                 |