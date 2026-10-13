# Task 2: Simple REST API

## Overview

This project is a simple REST API built with Node.js and Express for the Codveda Full-Stack Development Internship.

The API manages products and supports creating, reading, updating, and deleting product records (CRUD operations).

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Thunder Client for API testing

## Features

- Retrieve all products.
- Retrieve a single product by ID.
- Create a new product.
- Update an existing product.
- Delete a product.
- Validate product names, prices, and IDs.
- Handle invalid JSON and unknown routes.
- Return appropriate HTTP status codes and error messages.

## Project Structure

```text
task-2-rest-api/
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Installation and Setup

### 1. Install Node.js

Install Node.js if it is not already installed.

### 2. Install dependencies

Open a terminal inside the `task-2-rest-api` folder and run:

```bash
npm install
```

### 3. Start the server

Run:

```bash
npm start
```

The server should run at:

http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check that the API is running |
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve a product by ID |
| POST | `/products` | Create a product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

## Example Requests

### Create a product

**POST** `/products`

Request body:

```json
{
  "name": "Mouse",
  "price": 25
}
```

### Update a product

**PUT** `/products/2`

Request body:

```json
{
  "name": "Headphones Pro",
  "price": 65
}
```

## HTTP Status Codes

- `200 OK` — The request succeeded.
- `201 Created` — A product was created successfully.
- `400 Bad Request` — The request contains invalid input.
- `404 Not Found` — The requested product or route does not exist.
- `500 Internal Server Error` — An unexpected server error occurred.

## Testing

The API can be tested using Thunder Client in Visual Studio Code.

Test the GET, POST, PUT, and DELETE endpoints, along with invalid product IDs and invalid input.

## Data Storage

Products are stored in memory. Data created or modified through the API is not permanently saved and resets when the server restarts.

## Author

Codveda Full-Stack Development Internship — Task 2