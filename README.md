# Task Management API

## Project Description

This project is a REST API for a task management system. It includes user authentication and CRUD functionalities for task management. Users can register, log in, and manage their tasks with various filters and functionalities.

## Features

- User registration and login
- Task management (add, update, delete, mark as complete)
- Task listing with filtering by status, priority, and due date
- Data validation and structured error handling

## Prerequisites

- [Node.js](https://nodejs.org/) (version: 20)
- [Database](https://www.mongodb.com/try/download/community) (MongoDB)

## Getting Started

### 1. Clone the repository

```bash
git clone <https://github.com/TheHero29/task-management-api.git>
cd task-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Make a .env file and set up environment variable

```bash
MONGODB_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>
```

### 4. Start the server

```bash
npm start
```
