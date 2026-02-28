# Express.js - Complete Guide 🚀

## Table of Contents
1. [What is Express.js?](#what-is-expressjs)
2. [Why Use Express?](#why-use-express)
3. [Installation & Setup](#installation--setup)
4. [Basic Server Creation](#basic-server-creation)
5. [Understanding the Request-Response Cycle](#understanding-the-request-response-cycle)
6. [Routing](#routing)
7. [HTTP Methods](#http-methods)
8. [Route Parameters & Query Strings](#route-parameters--query-strings)
9. [Middleware](#middleware)
10. [Request & Response Objects](#request--response-objects)
11. [Static Files](#static-files)
12. [Error Handling](#error-handling)
13. [RESTful API Examples](#restful-api-examples)
14. [Template Engines](#template-engines)
15. [Express Router](#express-router)
16. [Best Practices](#best-practices)

---

## 1. What is Express.js? {#what-is-expressjs}

Express.js is a **minimalist**, **flexible**, and **fast** web application framework for Node.js. It provides robust features for building web servers and APIs.

```
┌─────────────────────────────────────────────────────────────────┐
│                        EXPRESS.JS                               │
│                                                                 │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐        │
│   │   Client    │───▶│   Express   │───▶│   Database  │
│   │  (Browser)  │◀───│   Server    │◀───│   / Files   │
│   └─────────────┘    └─────────────┘    └─────────────┘        │
│                                                                 │
│   Minimal • Flexible • Fast • Middleware-based                 │
└─────────────────────────────────────────────────────────────────┘
```

### Key Points:
- **Open-source** and free to use
- **Minimalist** - only essential features included
- **Middleware** - modular, reusable functions
- **RESTful routing** - easy to create REST APIs
- **Template engines** - supports various view engines

---

## 2. Why Use Express? {#why-use-express}

### Comparison: Raw Node.js vs Express.js

```
┌──────────────────────────────────────────────────────────────────┐
│           RAW NODE.JS (from BasicHTTPServerUsingNode)            │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  const http = require('http');                                   │
│  const server = http.createServer(function(request, response){  │
│      if(request.url === '/home'){                               │
│          response.end("Welcome home");                          │
│      }                                                           │
│  });                                                             │
│                                                                  │
│  ❌ Manual routing logic                                         │
│  ❌ Manual parsing                                               │
│  ❌ No built-in middleware                                       │
│  ❌ Verbose code                                                 │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                        EXPRESS.JS                               │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  const express = require('express');                             │
│  const app = express();                                         │
│                                                                  │
│  app.get('/home', (req, res) => {                                │
│      res.send("Welcome home");                                  │
│  });                                                             │
│                                                                  │
│  ✅ Simple routing                                               │
│  ✅ Built-in parsing                                             │
│  ✅ Middleware support                                           │
│  ✅ Clean, concise code                                          │
└──────────────────────────────────────────────────────────────────┘
```

### Benefits of Express:
| Feature | Benefit |
|---------|---------|
| **Fast Development** | Pre-built functions save time |
| **Middleware** | Modular code, easy to extend |
| **Routing** | Clean URL structure |
| **Template Engines** | Dynamic HTML pages |
| **Large Ecosystem** | Lots of packages available |
| **Community** | Excellent documentation & support |

---

## 3. Installation & Setup {#installation--setup}

### Step 1: Initialize a Node.js Project

```bash
# Create a new folder
mkdir my-express-app
cd my-express-app

# Initialize npm
npm init -y
```

### Step 2: Install Express

```
bash
# Install Express (latest version)
npm install express

# Install Express (specific version)
npm install express@4.18.2

# Install with save flag
npm install express --save
```

### Step 3: Package.json Structure

```
json
{
  "name": "my-express-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### Project Structure

```
my-express-app/
├── node_modules/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   └── js/
│       └── script.js
├── views/
│   └── index.ejs
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
├── index.js
└── package.json
```

---

## 4. Basic Server Creation {#basic-server-creation}

### Simple Express Server

```
javascript
// index.js
const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

### Run the Server

```
bash
# Using node
node index.js

# Using nodemon (auto-restart on changes)
npm install -g nodemon
nodemon index.js
```

### Server Lifecycle

```
┌─────────────────────────────────────────────────────────────────┐
│                    SERVER LIFECYCLE                             │
│                                                                 │
│   1. REQUIRE EXPRESS         const express = require('express')│
│                              ↓                                  │
│   2. CREATE APP             const app = express()              │
│                              ↓                                  │
│   3. DEFINE ROUTES          app.get('/', handler)              │
│                              ↓                                  │
│   4. MIDDLEWARE             app.use(middleware)                │
│                              ↓                                  │
│   5. START LISTENING        app.listen(port, callback)         │
│                              ↓                                  │
│   6. WAIT FOR REQUESTS      ←───────────────────▶              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. Understanding the Request-Response Cycle {#understanding-the-request-response-cycle}

```
┌─────────────────────────────────────────────────────────────────────┐
│                    REQUEST-RESPONSE CYCLE                          │
│                                                                     │
│   ┌─────────┐      ┌──────────────┐      ┌──────────────────┐     │
│   │ Client  │─────▶│ Middleware 1  │─────▶│ Middleware 2     │     │
│   │         │◀─────│  (Logging)    │◀─────│  (Body Parser)   │     │
│   └─────────┘      └──────────────┘      └──────────────────┘     │
│                           │                        │                │
│                           │                        ▼                │
│                           │              ┌──────────────────┐      │
│                           └─────────────▶│ Route Handler    │      │
│                                            │ (app.get/post)   │      │
│                                            └──────────────────┘      │
│                                                 │                   │
│                                                 ▼                   │
│                                            ┌──────────┐              │
│                                            │ Response │              │
│                                            │  Send    │              │
│                                            └──────────┘              │
└─────────────────────────────────────────────────────────────────────┘
```

### Code Flow Example:

```
javascript
const express = require('express');
const app = express();
const port = 3000;

// 1. Middleware (executed in order)
app.use((req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next(); // Pass to next middleware
});

app.use(express.json()); // Parse JSON bodies

// 2. Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// 3. Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

---

## 6. Routing {#routing}

### What is Routing?

```
┌─────────────────────────────────────────────────────────────────┐
│                      EXPRESS ROUTING                           │
│                                                                 │
│   URL:  http://localhost:3000/users/123?name=john              │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  METHOD    │  PATH         │  ACTION                    │  │
│   ├───────────┼───────────────┼────────────────────────────┤  │
│   │  GET      │  /users       │  Get all users             │  │
│   │  GET      │  /users/:id   │  Get user by ID            │  │
│   │  POST     │  /users       │  Create new user            │  │
│   │  PUT      │  /users/:id   │  Update user                │  │
│   │  DELETE   │  /users/:id   │  Delete user                │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Basic Routing Syntax

```
javascript
const express = require('express');
const app = express();
const port = 3000;

// GET Request
app.get('/home', (req, res) => {
    res.send('Home Page');
});

// POST Request
app.post('/submit', (req, res) => {
    res.send('Form Submitted');
});

// PUT Request
app.put('/update', (req, res) => {
    res.send('Data Updated');
});

// DELETE Request
app.delete('/delete', (req, res) => {
    res.send('Data Deleted');
});

// Handle all HTTP methods
app.all('/all', (req, res) => {
    res.send('Handles all methods');
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
```

### Route Handler (Callback) Function

```
javascript
// Route handler receives three parameters
app.get('/route', (req, res, next) => {
    // req  - Request object (client data)
    // res  - Response object (send response)
    // next - Function to pass control to next middleware
    
    console.log('Route matched!');
    next(); // Continue to next middleware
});
```

---

## 7. HTTP Methods {#http-methods}

### Complete CRUD Example

```
javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON request body

// Sample data
let users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
];

// ┌─────────────────────────────────────────────────────────────┐
// │  GET    - Read data                                        │
// └─────────────────────────────────────────────────────────────┘

// Get all users
app.get('/api/users', (req, res) => {
    res.json({
        success: true,
        count: users.length,
        data: users
    });
});

// Get single user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    
    if (user) {
        res.json({ success: true, data: user });
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

// ┌─────────────────────────────────────────────────────────────┐
// │  POST   - Create data                                       │
// └─────────────────────────────────────────────────────────────┘

app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    });
});

// ┌─────────────────────────────────────────────────────────────┐
// │  PUT    - Update data (replace entire record)              │
// └─────────────────────────────────────────────────────────────┘

app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex !== -1) {
        users[userIndex] = {
            id: userId,
            name: req.body.name || users[userIndex].name,
            email: req.body.email || users[userIndex].email
        };
        res.json({ success: true, data: users[userIndex] });
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

// ┌─────────────────────────────────────────────────────────────┐
// │  PATCH  - Update data (partial update)                      │
// └─────────────────────────────────────────────────────────────┘

app.patch('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    
    if (user) {
        if (req.body.name) user.name = req.body.name;
        if (req.body.email) user.email = req.body.email;
        res.json({ success: true, data: user });
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

// ┌─────────────────────────────────────────────────────────────┐
// │  DELETE - Delete data                                       │
// └─────────────────────────────────────────────────────────────┘

app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.json({ success: true, message: 'User deleted', data: deletedUser });
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
```

### HTTP Status Codes

```
┌─────────────────────────────────────────────────────────────────┐
│                    HTTP STATUS CODES                           │
├─────────────┬───────────────────────────────────────────────────┤
│   STATUS    │                    MEANING                        │
├─────────────┼───────────────────────────────────────────────────┤
│   200       │  OK - Request succeeded                            │
│   201       │  Created - Resource successfully created          │
│   204       │  No Content - Success, no content to return       │
│   400       │  Bad Request - Client error                       │
│   401       │  Unauthorized - Authentication required            │
│   403       │  Forbidden - No permission                         │
│   404       │  Not Found - Resource doesn't exist                │
│   500       │  Internal Server Error - Server error             │
└─────────────┴───────────────────────────────────────────────────┘
```

---

## 8. Route Parameters & Query Strings {#route-parameters--query-strings}

### Route Parameters (URL Parameters)

```
┌─────────────────────────────────────────────────────────────────┐
│                 ROUTE PARAMETERS                                │
│                                                                 │
│   URL Pattern:  /users/:id                                      │
│                                                                 │
│   ┌────────────────┬────────────────┬────────────────┐           │
│   │   Actual URL  │   Parameter   │   Value        │           │
│   ├───────────────┼───────────────┼────────────────┤           │
│   │  /users/123   │   :id         │   "123"        │           │
│   │  /users/456   │   :id         │   "456"        │           │
│   │  /users/abc   │   :id         │   "abc"        │           │
│   └───────────────┴───────────────┴────────────────┘           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

```
javascript
// Route with single parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Route with multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
    const { userId, postId } = req.params;
    res.send(`User: ${userId}, Post: ${postId}`);
});

// Route with optional parameter
app.get('/users/:id?', (req, res) => {
    if (req.params.id) {
        res.send(`User ID: ${req.params.id}`);
    } else {
        res.send('All users');
    }
});
```

### Query Strings

```
┌─────────────────────────────────────────────────────────────────┐
│                 QUERY STRINGS                                  │
│                                                                 │
│   URL:  /search?category=electronics&minPrice=100&maxPrice=500│
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  Query Parameter    │  Value                            │  │
│   ├─────────────────────┼───────────────────────────────────┤  │
│   │  category           │  "electronics"                    │  │
│   │  minPrice           │  "100"                            │  │
│   │  maxPrice           │  "500"                            │  │
│   └─────────────────────┴───────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

```
javascript
// Query string example
app.get('/search', (req, res) => {
    const { category, minPrice, maxPrice } = req.query;
    
    console.log('Category:', category);      // "electronics"
    console.log('Min Price:', minPrice);      // "100"
    console.log('Max Price:', maxPrice);      // "500"
    
    res.json({
        category,
        minPrice,
        maxPrice
    });
});

// Testing URL: http://localhost:3000/search?category=books&minPrice=10
```

### Combined Example

```
javascript
// GET /products?category=electronics&sort=price&page=1

app.get('/products', (req, res) => {
    // Access route parameters (none in this case)
    // req.params
    
    // Access query strings
    const category = req.query.category;    // "electronics"
    const sort = req.query.sort;             // "price"
    const page = parseInt(req.query.page);   // 1
    
    // Access request body (for POST/PUT)
    // req.body
    
    res.json({
        category,
        sort,
        page,
        message: 'Products retrieved successfully'
    });
});
```

---

## 9. Middleware {#middleware}

### What is Middleware?

```
┌─────────────────────────────────────────────────────────────────┐
│                    MIDDLEWARE CONCEPT                          │
│                                                                 │
│   Middleware functions are functions that have access to       │
│   the request object (req), response object (res), and         │
│   the next middleware function in the application's             │
│   request-response cycle.                                      │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐ │
│   │                    MIDDLEWARE CHAIN                       │ │
│   │                                                           │ │
│   │  Request                                                 │ │
│   │     │                                                     │ │
│   │     ▼                                                     │ │
│   │  ┌──────────────┐                                         │ │
│   │  │  Logger      │  Logs request details                  │ │
│   │  │  Middleware  │  console.log(req.method, req.url)      │ │
│   │  └──────┬───────┘                                         │ │
│   │         │ next()                                          │ │
│   │         ▼                                                 │ │
│   │  ┌──────────────┐                                         │ │
│   │  │  Auth        │  Checks if user is authenticated       │ │
│   │  │  Middleware  │  if(!authorized) return 401             │ │
│   │  └──────┬───────┘                                         │ │
│   │         │ next()                                          │ │
│   │         ▼                                                 │ │
│   │  ┌──────────────┐                                         │ │
│   │  │  Route       │  Handles the actual request            │ │
│   │  │  Handler     │  res.send('Hello')                     │ │
│   │  └──────────────┘                                         │ │
│   │         │                                                 │ │
│   │         ▼                                                 │ │
│   │  Response                                                  │ │
│   └──────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Types of Middleware

```
javascript
const express = require('express');
const app = express();

// ┌─────────────────────────────────────────────────────────────┐
// │  1. APPLICATION-LEVEL MIDDLEWARE                            │
// │     - Bound to the app instance                             │
// └─────────────────────────────────────────────────────────────┘

// Logger middleware - logs every request
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Don't forget to call next()
});

// Skip certain routes
app.use((req, res, next) => {
    if (req.url === '/skip') {
        return res.send('Skipped!');
    }
    next();
});

// ┌─────────────────────────────────────────────────────────────┐
// │  2. ROUTER-LEVEL MIDDLEWARE                                 │
// │     - Bound to express.Router()                             │
// └─────────────────────────────────────────────────────────────┘

const router = express.Router();

// Router middleware
router.use((req, res, next) => {
    console.log('Router middleware:', req.method);
    next();
});

router.get('/page', (req, res) => {
    res.send('Router page');
});

app.use('/api', router);

// ┌─────────────────────────────────────────────────────────────┐
// │  3. BUILT-IN MIDDLEWARE                                     │
// │     - express.json()    - Parse JSON bodies                │
// │     - express.urlencoded() - Parse URL-encoded bodies       │
// │     - express.static()   - Serve static files               │
// │     - express.text()     - Parse text bodies                │
// │     - express.raw()      - Parse binary bodies              │
// └─────────────────────────────────────────────────────────────┘

app.use(express.json());           // Parse JSON: {"name": "John"}
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static('public')); // Serve static files

// ┌─────────────────────────────────────────────────────────────┐
// │  4. THIRD-PARTY MIDDLEWARE                                   │
// │     - Additional packages from npm                          │
// └─────────────────────────────────────────────────────────────┘

// npm install morgan cors helmet
// const morgan = require('morgan');
// const cors = require('cors');
// const helmet = require('helmet');

// app.use(morgan('dev'));  // HTTP logging
// app.use(cors());         // Enable CORS
// app.use(helmet());       // Security headers

// ┌─────────────────────────────────────────────────────────────┐
// │  5. ERROR-HANDLING MIDDLEWARE                                │
// │     - Special middleware with 4 parameters                  │
// └─────────────────────────────────────────────────────────────┘

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: err.message 
    });
});
```

### Custom Middleware Examples

```
javascript
// ┌─────────────────────────────────────────────────────────────┐
// │  Authentication Middleware                                   │
// └─────────────────────────────────────────────────────────────┘

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token === 'my-secret-token') {
        next(); // Authorized, continue
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

// Use on specific routes
app.get('/protected', authenticate, (req, res) => {
    res.send('Welcome to protected route!');
});

// ┌─────────────────────────────────────────────────────────────┐
// │  Validation Middleware                                       │
// └─────────────────────────────────────────────────────────────┘

const validateUser = (req, res, next) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ 
            error: 'Name and email are required' 
        });
    }
    
    next();
};

app.post('/users', validateUser, (req, res) => {
    // Create user
    res.send('User created!');
});
```

---

## 10. Request & Response Objects {#request--response-objects}

### Request (req) Object

```
┌─────────────────────────────────────────────────────────────────┐
│                    REQUEST OBJECT (req)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   req.app        │  Reference to the Express app instance      │
│   req.body       │  Parsed request body (POST/PUT data)        │
│   req.cookies    │  Cookies (requires cookie-parser)           │
│   req.params     │  Route parameters (/:id)                    │
│   req.query      │  Query string parameters (?key=value)      │
│   req.headers    │  Request headers                            │
│   req.method     │  HTTP method (GET, POST, etc.)             │
│   req.url        │  Request URL                                │
│   req.path       │  Path portion of URL                       │
│   req.protocol   │  Protocol (http, https)                    │
│   req.get()      │  Get specific header                        │
│   req.hostname   │  Hostname from header                       │
│   req.ip         │  Client IP address                          │
│   req.ips        │  Array of client IPs (from X-Forwarded-For)│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Response (res) Object

```
┌─────────────────────────────────────────────────────────────────┐
│                   RESPONSE OBJECT (res)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   res.send()        │  Send string/buffer/JSON                 │
│   res.json()        │  Send JSON response                      │
│   res.jsonp()       │  Send JSONP response                     │
│   res.sendFile()    │  Send file as stream                     │
│   res.download()    │  Download file (prompt save)             │
│   res.redirect()    │  Redirect to URL                          │
│   res.render()      │  Render template (view engine)           │
│   res.status()      │  Set HTTP status code                   │
│   res.set()         │  Set response headers                    │
│   res.cookie()      │  Set cookie (requires cookie-parser)    │
│   res.clearCookie() │  Clear cookie                            │
│   res.end()         │  End response without data              │
│                                                                 │
│   Chainable:  res.status(404).json({ error: 'Not found' })    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Examples

```
javascript
// Request object examples
app.get('/examples/req', (req, res) => {
    // Get route parameter
    const id = req.params.id;
    
    // Get query string
    const page = req.query.page;
    const limit = req.query.limit;
    
    // Get request headers
    const contentType = req.get('Content-Type');
    const userAgent = req.get('User-Agent');
    
    // Get body (requires express.json() middleware)
    const { name, email } = req.body;
    
    res.json({
        params: id,
        query: { page, limit },
        headers: { contentType, userAgent },
        body: { name, email }
    });
});

// Response object examples
app.get('/examples/res', (req, res) => {
    // Send JSON
    res.json({ message: 'JSON response' });
    
    // Send string
    // res.send('Hello World');
    
    // Set status and JSON
    // res.status(201).json({ created: true });
    
    // Redirect
    // res.redirect('/other-page');
    
    // Download file
    // res.download('/path/to/file.pdf');
    
    // Render template
    // res.render('index', { title: 'My Page' });
});
```

---

## 11. Static Files {#static-files}

### Serving Static Files

```
┌─────────────────────────────────────────────────────────────────┐
│                 STATIC FILE SERVING                            │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                    PROJECT STRUCTURE                     │  │
│   │                                                          │  │
│   │   my-app/                                               │  │
│   │   ├── public/                    ◀── Static folder      │  │
│   │   │   ├── css/                                          │  │
│   │   │ styles.css                                │   │   └──  │
│   │   │   ├── js/                                           │  │
│   │   │   │   └── app.js                                    │  │
│   │   │   ├── images/                                       │  │
│   │   │   │   └── logo.png                                  │  │
│   │   │   └── index.html                                    │  │
│   │   └── index.js                                          │  │
│   │                                                          │  │
│   │   URL: http://localhost:3000/css/styles.css            │  │
│   │   URL: http://localhost:3000/images/logo.png            │  │
│   │   URL: http://localhost:3000/index.html                 │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Code Implementation

```
javascript
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// Serve static files from multiple folders
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'assets')));

// Virtual path prefix (serve from /static URL)
app.use('/static', express.static('public'));

// With options
app.use(express.static('public', {
    dotfiles: 'ignore',      // Ignore .hidden files
    etag: true,             // Enable ETag
    extensions: ['htm', 'html'], // File extensions to try
    index: 'index.html',    // Default file
    maxAge: '1d',           // Cache control max-age
    redirect: true          // Redirect to trailing slash
}));

// Access: http://localhost:3000/css/styles.css
// Access: http://localhost:3000/index.html

app.listen(port, () => console.log(`Server running on port ${port}`));
```

---

## 12. Error Handling {#error-handling}

### Error Handling Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                  ERROR HANDLING FLOW                            │
│                                                                 │
│   Request                                                       │
│     │                                                           │
│     ▼                                                           │
│   ┌─────────────┐                                               │
│   │  Middleware │  (normal flow)                               │
│   └──────┬──────┘                                               │
│          │                                                      │
│          ▼                                                      │
│   ┌─────────────┐     ┌─────────────┐                          │
│   │   Route     │────▶│   │
│   │   Handler   │     │   Success   │                          Response  │                          │
│   └──────┬──────┘     └─────────────┘                          │
│          │                                                      │
│   Error! ▼                                                      │
│   ┌─────────────┐                                               │
│   │   next()    │  (pass error)                                │
│   │  (err)      │                                               │
│   └──────┬──────┘                                               │
│          │                                                      │
│          ▼                                                      │
│   ┌─────────────────────────────────────────────┐              │
│   │        ERROR-HANDLING MIDDLEWARE            │              │
│   │   app.use((err, req, res, next) => {...})  │              │
│   └─────────────────────────────────────────────┘              │
│                         │                                       │
│                         ▼                                      │
│                  Error Response                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Implementation

```
javascript
const express = require('express');
const app = express();
const port = 3000;

// ┌─────────────────────────────────────────────────────────────┐
// │  Catch 404 - Route Not Found                                │
// └─────────────────────────────────────────────────────────────┘

app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not Found',
        message: `Cannot ${req.method} ${req.url}`
    });
});

// ┌─────────────────────────────────────────────────────────────┐
// │  Error Handling Middleware                                  │
// └─────────────────────────────────────────────────────────────┘

// Must have 4 parameters: err, req, res, next
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    console.error('Stack:', err.stack);
    
    // Default error
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    
    res.status(status).json({
        error: true,
        status,
        message,
        // Show stack trace in development only
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

// ┌─────────────────────────────────────────────────────────────┐
// │  Throwing Errors in Routes                                  │
// └─────────────────────────────────────────────────────────────┘

app.get('/error-example', (req, res, next) => {
    try {
        // Simulate an error
        throw new Error('Something went wrong!');
    } catch (err) {
        next(err); // Pass error to error handler
    }
});

// Custom error class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
        Error.captureStackTrace(this, this.constructor);
    }
}

app.get('/custom-error', (req, res, next) => {
    throw new AppError('Resource not found', 404);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
```

---

## 13. RESTful API Examples {#restful-api-examples}

### Complete REST API Structure

```
┌─────────────────────────────────────────────────────────────────┐
│              RESTful API ENDPOINTS                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Resource: /users                                              │
│                                                                 │
│   ┌──────────┬────────────────────┬────────────────────────┐  │
│   │ METHOD   │ ENDPOINT            │ DESCRIPTION            │  │
│   ├──────────┼────────────────────┼────────────────────────┤  │
│   │ GET      │ /users              │ Get all users         │  │
│   │ GET      │ /users/:id          │ Get user by ID        │  │
│   │ POST     │ /users              │ Create new user       │  │
│   │ PUT      │ /users/:id          │ Update user (full)    │  │
│   │ PATCH    │ /users/:id          │ Update user (partial) │  │
│   │ DELETE   │ /users/:id          │ Delete user           │  │
│   └──────────┴────────────────────┴────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Full CRUD API Example

```
javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// In-memory database
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 25 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 30 }
];

// Get all users with pagination
app.get('/api/users', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const results = users.slice(startIndex, endIndex);
    
    res.json({
        success: true,
        page,
        limit,
        total: users.length,
        totalPages: Math.ceil(users.length / limit),
        data: results
    });
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return res.status(404).json({ 
            success: false, 
            message: 'User not found' 
        });
    }
    
    res.json({ success: true, data: user });
});

// Create new user
app.post('/api/users', (req, res) => {
    const { name, email, age } = req.body;
    
    // Validation
    if (!name || !email) {
        return res.status(400).json({ 
            success: false, 
            message: 'Name and email are required' 
        });
    }
    
    // Check if email exists
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Email already exists' 
        });
    }
    
    const newUser = {
        id: users.length + 1,
        name,
        email,
        age: age || 18
    };
    
    users.push(newUser);
    
    res.status(201).json({ 
        success: true, 
        message: 'User created successfully',
        data: newUser 
    });
});

// Update user (PUT - full update)
app.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ 
            success: false, 
            message: 'User not found' 
        });
    }
    
    const { name, email, age } = req.body;
    
    users[userIndex] = {
        id,
        name: name || users[userIndex].name,
        email: email || users[userIndex].email,
        age: age !== undefined ? age : users[userIndex].age
    };
    
    res.json({ 
        success: true, 
        message: 'User updated successfully',
        data: users[userIndex] 
    });
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ 
            success: false, 
            message: 'User not found' 
        });
    }
    
    const deletedUser = users.splice(userIndex, 1);
    
    res.json({ 
        success: true, 
        message: 'User deleted successfully',
        data: deletedUser[0] 
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
    });
});

app.listen(port, () => console.log(`API running on port ${port}`));
```

### Testing with cURL

```
bash
# Get all users
curl http://localhost:3000/api/users

# Get user by ID
curl http://localhost:3000/api/users/1

# Create user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com", "age": 22}'

# Update user
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "John Updated", "age": 26}'

# Delete user
curl -X DELETE http://localhost:3000/api/users/1
```

---

## 14. Template Engines {#template-engines}

### Popular Template Engines

```
┌─────────────────────────────────────────────────────────────────┐
│              TEMPLATE ENGINES IN EXPRESS                       │
├──────────────┬──────────────────────────────────────────────────┤
│   Engine     │                  Description                    │
├──────────────┼──────────────────────────────────────────────────┤
│   EJS        │  Embedded JavaScript - simple, popular         │
│   Pug        │  (formerly Jade) - indentation-based syntax     │
│   Handlebars │  Mustache-based - logicless templates           │
│   Mustache   │  Simple, logicless templates                    │
│   Twig       │  PHP-inspired, similar to Django                │
└──────────────┴──────────────────────────────────────────────────┘
```

### EJS Example

```
bash
# Install EJS
npm install ejs
```

```
javascript
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Sample data
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home Page',
        message: 'Welcome to Express with EJS!',
        users
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
```

### views/index.ejs

```
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><%= title %></title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .user { background: #f0f0f0; padding: 10px; margin: 10px 0; }
    </style>
</head>
<body>
    <h1><%= message %></h1>
    
    <h2>Users List:</h2>
    <% users.forEach(user => { %>
        <div class="user">
            <strong>Name:</strong> <%= user.name %><br>
            <strong>Age:</strong> <%= user.age %>
        </div>
    <% }) %>
    
    <% if (users.length === 0) { %>
        <p>No users found.</p>
    <% } %>
</body>
</html>
```

---

## 15. Express Router {#express-router}

### Router Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                  EXPRESS ROUTER                                 │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                    main index.js                        │  │
│   │                                                          │  │
│   │  const userRouter = require('./routes/users');         │  │
│   │  const productRouter = require('./routes/products');   │  │
│   │                                                          │  │
│   │  app.use('/api/users', userRouter);                    │  │
│   │  app.use('/api/products', productRouter);              │  │
│   └─────────────────────────────────────────────────────────┘  │
│                            │                                    │
│              ┌─────────────┴─────────────┐                    │
│              ▼                           ▼                     │
│   ┌─────────────────────┐     ┌─────────────────────┐         │
│   │   routes/users.js   │     │ routes/products.js  │         │
│   │                     │     │                     │         │
│   │  router.get('/')    │     │  router.get('/')    │         │
│   │  router.post('/')   │     │  router.post('/')   │         │
│   │  router.get('/:id') │     │  router.get('/:id') │         │
│   │  router.put('/:id') │     │  router.put('/:id') │         │
│   │  router.delete()    │     │  router.delete()   │         │
│   └─────────────────────┘     └─────────────────────┘         │
│                                                                 │
│   URL Examples:                                                 │
│   - GET /api/users          → users.js router.get('/')         │
│   - GET /api/users/123     → users.js router.get('/:id')      │
│   - GET /api/products       → products.js router.get('/')     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Implementation

```
javascript
// ─────────────────────────────────────────────────────────────
// routes/users.js
// ─────────────────────────────────────────────────────────────

const express = require('express');
const router = express.Router();

// In-memory data
let users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
];

// GET /users (all users)
router.get('/', (req, res) => {
    res.json({ success: true, data: users });
});

// GET /users/:id (single user)
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    res.json({ success: true, data: user });
});

// POST /users (create user)
router.post('/', (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ success: false, message: 'Name and email required' });
    }
    
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
});

// PUT /users/:id (update user)
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    users[userIndex] = {
        id,
        name: req.body.name || users[userIndex].name,
        email: req.body.email || users[userIndex].email
    };
    
    res.json({ success: true, data: users[userIndex] });
});

// DELETE /users/:id (delete user)
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    users.splice(userIndex, 1);
    res.json({ success: true, message: 'User deleted' });
});

module.exports = router;
```

```
javascript
// ─────────────────────────────────────────────────────────────
// index.js (main file)
// ─────────────────────────────────────────────────────────────

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

// Use routes with prefix
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Server error' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
```

---

## 16. Best Practices {#best-practices}

### Development Best Practices

```
┌─────────────────────────────────────────────────────────────────┐
│                 EXPRESS BEST PRACTICES                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. 📁 PROJECT STRUCTURE                                        │
│     ├── controllers/      (Business logic)                      │
│     ├── routes/          (Route definitions)                    │
│     ├── middleware/      (Custom middleware)                    │
│     ├── models/          (Database models)                      │
│     ├── views/           (Templates)                            │
│     ├── public/          (Static files)                         │
│     └── config/          (Configuration)                        │
│                                                                 │
│  2. 🔒 SECURITY                                                 │
│     ├── Use helmet for security headers                        │
│     ├── Enable CORS properly                                     │
│     ├── Validate all user input                                 │
│     ├── Use parameterized queries                               │
│     ├── Don't expose sensitive data                            │
│                                                                 │
│  3. ⚡ PERFORMANCE                                              │
│     ├── Use middleware appropriately                            │
│     ├── Implement caching                                       │
│     ├── Compress responses (compression)                       │
│     ├── Use pagination for large data                          │
│     └── Connection pooling for databases                        │
│                                                                 │
│  4. 🐛 ERROR HANDLING                                           │
│     ├── Always use error-handling middleware                    │
│     ├── Log errors properly                                      │
│     ├── Return proper HTTP status codes                         │
│     ├── Don't leak stack traces in production                   │
│                                                                 │
│  5. 📝 CODE ORGANIZATION                                        │
│     ├── Use Express Router for modular routes                   │
│     ├── Separate concerns (controllers, routes)                 │
│     ├── Use environment variables (dotenv)                      │
│     └── Keep route handlers small                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Security Example

```
javascript
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();

// Security headers
app.use(helmet());

// Enable CORS
app.use(cors({
    origin: 'https://yourdomain.com',
    credentials: true
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later'
});
app.use('/api/', limiter);

// Input validation
const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(0).max(150)
});

app.post('/api/users', (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ 
            error: error.details[0].message 
        });
    }
    next();
});
```

---

## Quick Reference Cheatsheet

```
javascript
// ┌─────────────────────────────────────────────────────────────┐
// │                    QUICK REFERENCE                          │
// └─────────────────────────────────────────────────────────────┘

const express = require('express');
const app = express();

// Middleware
app.use(express.json());           // Parse JSON
app.use(express.urlencoded());     // Parse form data
app.use(express.static('public')); // Static files

// Routes
app.get('/path', handler);
app.post('/path', handler);
app.put('/path', handler);
app.delete('/path', handler);

// Route with params
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});

// Query strings
app.get('/search', (req, res) => {
    const { q, page } = req.query;
    res.json({ q, page });
});

// Response types
res.send('Text');
res.json({ key: 'value' });
res.status(404).json({ error: 'Not found' });
res.redirect('/other');
res.download('/file.pdf');

// Router
const router = express.Router();
router.get('/', handler);
app.use('/api', router);

// Error handling
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

// Listen
app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## Conclusion

Express.js is a powerful and flexible framework for building Node.js applications. With its middleware-based architecture, clean routing system, and extensive ecosystem, it's the go-to choice for building web servers and RESTful APIs in Node.js.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   🎉  CONGRATULATIONS!  🎉                                      │
│                                                                 │
│   You've completed the Express.js guide!                        │
│                                                                 │
│   Next Steps:                                                   │
│   ├── Build more projects                                      │
│   ├── Learn database integration (MongoDB, PostgreSQL)         │
│   ├── Explore authentication (JWT, Passport.js)               │
│   ├── Practice with real-world APIs                            │
│   └── Read official Express docs                               │
│                                                                 │
│   Keep Coding! 🚀                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

**Author:** Express.js Notes  
**Last Updated:** 2024  
**Resources:** [Express.js Official Docs](https://expressjs.com/)
