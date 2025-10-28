# Time Tracking API

A simple time tracking API built with Node.js, Express, and MongoDB.

## Features

*   User authentication (JWT)
*   Task creation, retrieval, update, and deletion
*   Time logging for tasks

## Installation

1.  Clone the repository:
   
   git clone <repository_url>
   
2.  Install dependencies:
   
   npm install
   
3.  Set up environment variables:
    Create a `.env` file in the root directory with the following variables:
   
   PORT=3000
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   
4.  Run the server:
   
   npm start
   

## API Endpoints

### Authentication

*   `POST /api/auth/register`: Register a new user
*   `POST /api/auth/login`: Log in an existing user

### Tasks

*   `POST /api/tasks`: Create a new task
*   `GET /api/tasks`: Get all tasks for the authenticated user
*   `GET /api/tasks/:id`: Get a specific task by ID
*   `PUT /api/tasks/:id`: Update a task by ID
*   `DELETE /api/tasks/:id`: Delete a task by ID

### Time Logs

*   `POST /api/tasks/:taskId/logs`: Create a new time log for a task
*   `GET /api/tasks/:taskId/logs`: Get all time logs for a task
*   `PUT /api/logs/:id`: Update a time log by ID
*   `DELETE /api/logs/:id`: Delete a time log by ID
