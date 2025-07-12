# Express.js

## 📚 Table of Contents

1. [What is Express?](#1-what-is-express)
2. [Why use Express?](#2-why-use-express)
3. [Setting Up a Basic Express Server](#3-setting-up-a-basic-express-server)
4. [Defining Routes (GET, POST, PUT, DELETE)](#4-defining-routes-get-post-put-delete)
5. [Middleware in Express](#5-middleware-in-express)
6. [Built-in Middleware](#6-built-in-middleware)
7. [Custom Middleware](#7-custom-middleware)
8. [Third-party Middleware](#8-third-party-middleware)
9. [Middleware Order Matters](#9-middleware-order-matters)
10. [Express Router (Modular Routing)](#10-express-router-modular-routing)
11. [Route Parameters & Query Strings](#11-route-parameters--query-strings)
12. [Serving Static Files](#12-serving-static-files)
13. [Error Handling in Express](#13-error-handling-in-express)

---
## 1. What is Express?

**Express** is a minimal and flexible **Node.js web application framework** that provides a robust set of features for building web and mobile applications.

It simplifies the process of:
- Creating servers
- Defining routes
- Handling requests and responses
- Building RESTful APIs

---

## 2. Why use Express?
- Simple and clean API
- Fast server-side routing
- Middleware support
- Easy to scale
- Compatible with any frontend or database

> Think of Express as a layer built on top of Node.js that helps you build servers with much less code and more readability.
---

## 3. Setting Up a Basic Express Server

To get started, follow these steps:

### 1. Initialize project

```bash
npm init -y
```

### 2. Install Express

```bash
npm install express
```

### 3. Create a basic server (`index.js` or `app.js`)

```js
import express from 'express';

const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### 4. Run the server

```bash
node index.js
```

> You should see "Server is running on http://localhost:3000" in the terminal, and visiting that URL will show: “Hello from Express!”

---

## 4. Defining Routes (GET, POST, PUT, DELETE)

Express makes it easy to define multiple **HTTP method routes**:

### 🟢 GET — Read data

```js
app.get('/get', (req, res) => {
  res.send('GET request received');
});
```

### 🟡 POST — Create data

```js
app.post('/post', (req, res) => {
  res.send('POST request received');
});
```

### 🔵 PUT — Update data

```js
app.put('/put', (req, res) => {
  res.send('PUT request received');
});
```

### 🔴 DELETE — Delete data

```js
app.delete('/delete', (req, res) => {
  res.send('DELETE request received');
});
```

### Summary of HTTP Verbs

| Method  | Purpose        | Route Example       |
|---------|----------------|---------------------|
| GET     | Read/Retrieve  | `/products`         |
| POST    | Create         | `/products`         |
| PUT     | Update         | `/products/:id`     |
| DELETE  | Remove         | `/products/:id`     |

> These routes form the backbone of a **RESTful API**.

---
## 5. Middleware in Express

Middleware functions in Express are functions that execute during the **request-response cycle**. They have access to the `req`, `res`, and `next` objects.

They are used for:
- Logging
- Parsing request bodies
- Authentication
- Modifying `req` and `res`
- Handling errors

---

## 6. Built-in Middleware

Express comes with some built-in middleware functions.

### 6.1 express.json()

Parses incoming JSON data and populates `req.body`.

```js
app.use(express.json());
```

### 6.2 express.urlencoded()

Parses URL-encoded data (from forms).

```js
app.use(express.urlencoded({ extended: true }));
```

#### Example:

```js
import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
```

---

## 7. Custom Middleware

You can create your own middleware functions to perform actions before the request reaches the final route.

### 7.1 Global Custom Middleware

```js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to next middleware or route
};

app.use(logger);
```

### 7.2 Route-Specific Middleware

```js
app.get('/about', logger, (req, res) => {
  res.send('About Page');
});
```

---

## 8. Third-party Middleware

You can install and use middleware created by others via npm.

### 8.1 Using `morgan` (for logging)

#### Install:

```bash
npm install morgan
```

#### Use:

```js
import morgan from 'morgan';
app.use(morgan('dev'));
```

### 8.2 Using `cors` (to handle cross-origin requests)

#### Install:

```bash
npm install cors
```

#### Use:

```js
import cors from 'cors';
app.use(cors());
```

---

## 9. Middleware Order Matters

- Middleware runs in the order it's declared
- Always use `express.json()` **before** accessing `req.body`
- Use logger middleware at the top
- Error-handling middleware must go **after all routes**

--- 
## 10. Express Router (Modular Routing)

As your application grows, managing all routes in a single file (like `app.js`) becomes difficult. To keep things organized, Express provides the **Router** class to define routes in separate files and then mount them in the main app.


### 10.1 What is Express Router?

**Express Router** is a built-in way to create **modular, mountable route handlers**.  
It helps in separating route logic by feature or path.

---

### 10.2 Basic Folder Structure

```
project/
│
├── app.js
├── routes/
│   └── products.js
```



### 10.3 Step-by-Step Setup

#### 1. Create a Router file (`routes/products.js`)

```js
import express from 'express';
const router = express.Router();

// Route: GET /products
router.get('/', (req, res) => {
  res.send('All products');
});

// Route: POST /products
router.post('/', (req, res) => {
  res.send('Create a product');
});

export default router;
```


#### 2. Import and Mount Router in `app.js`

```js
import express from 'express';
import productsRouter from './routes/products.js';

const app = express();
const PORT = 3000;

app.use(express.json()); // Required to parse JSON
app.use('/products', productsRouter); // Mount the router

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```


### 10.4 How It Works

- `/products` is the **base path**.
- Inside `products.js`, `router.get('/')` responds to `GET /products`.
- You can define nested paths like `router.get('/:id')` for `GET /products/123`.


### 10.5 Summary

| File           | What it does                     |
|----------------|----------------------------------|
| `app.js`       | Main entry, mounts all routers   |
| `products.js`  | Handles all `/products` routes   |

> This modular approach keeps your routes clean, organized, and scalable.
---
## 11. Route Parameters & Query Strings

Express gives access to both **Route Parameters** and **Query Strings** through the `req` object.

### 11.1 Route Parameters (`req.params`)

Used to capture values directly from the URL pattern.  
For example: `/user/:id`

```js
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

Request:
```js
GET /user/42
```

Response:
```js
User ID: 42
```

### 11.2 Query Strings (`req.query`)

Used to send optional key-value data via the URL after a `?`

```js
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search term: ${query}`);
});
```

Request:
```js
GET /search?q=apple
```

Response:
```js
Search term: apple
```

---

## 12. Serving Static Files

You can serve static files like images, CSS, or JS using Express’s built-in `express.static()` middleware.


### 12.1 Folder Structure

```
project/
│
├── public/
│   ├── index.html
│   └── style.css
├── app.js
```

> Place your static assets (HTML, CSS, JS, images) in the `public` folder.


### 12.2 Enable Static File Serving

```js
import express from 'express';
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server running...');
});
```

Request:
```js
GET http://localhost:3000/index.html
```

> Automatically serves static content from `/public` without defining any routes.

---

## 13. Error Handling in Express

Express allows you to handle errors using a special middleware with **four arguments**:
(err, req, res, next)


### 13.1 Triggering an Error Manually

```js
app.get('/cause-error', (req, res) => {
  throw new Error('Something went wrong!');
});
```

### 13.2 Global Error Handling Middleware

Always place this **after all routes**.

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
```


### 13.3 Forward Error with `next(error)`

```js
app.get('/fail', (req, res, next) => {
  const error = new Error('Manual error');
  next(error);
});
```

> Any route or middleware can forward an error using `next(error)`, and it will be caught by your error-handling middleware.

