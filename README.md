# Task Management API

## Project Description

This project is a REST API for a task management system. It includes user authentication and CRUD functionalities for task management. Users can register, log in, and manage their tasks with various filters and functionalities.

## Features

- User registration and login
- Task management (add, update, delete, mark as complete)
- Task listing with filtering by status, priority, and due date
- Data validation and structured error handling
- Optional: Role-based access control, sorting and pagination, task reminders, and automated tests

## Prerequisites

- [Node.js](https://nodejs.org/) (version: ___)
- [Database of choice] (e.g., PostgreSQL, MySQL, MongoDB, or SQLite)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
MONGODB_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>
```
### 4. Start the server
```bash
npm start
```

