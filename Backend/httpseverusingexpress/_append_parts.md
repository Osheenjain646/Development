const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'Express.md');

// ─── PART 2 ───────────────────────────────────────────────────
const part2 = `

---

## 9. Middleware

Middleware functions are functions that have access to **req** (request), **res** (response), and **next** — called one after another in a pipeline.

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                     MIDDLEWARE CHAIN                             │
│                                                                  │
│  Incoming Request                                                │
│        │                                                         │
│        ▼                                                         │
│  ┌─────────────────┐                                             │
│  │  Logger         │  Logs method + URL                         │
│  └───────┬─────────┘                                             │
│          │ next()                                                │
│          ▼                                                       │
│  ┌─────────────────┐                                             │
│  │  Body Parser    │  Parses JSON into req.body                 │
│  └───────┬─────────┘                                             │
│          │ next()                                                │
│          ▼                                                       │
│  ┌─────────────────┐                                             │
│  │  Auth Check     │  Validates token; 401 if invalid           │
│  └───────┬─────────┘                                             │
│          │ next()                                                │
│          ▼                                                       │
│  ┌─────────────────┐                                             │
│  │  Route Handler  │  Business logic + sends response           │
│  └─────────────────┘                                             │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

### All 5 Types of Middleware

\`\`\`javascript
const express = require('express');
const app = express();

// ── 1. Application-Level ──────────────────────────────────────
app.use((req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.url);
    next(); // ALWAYS call next() or the request hangs!
});

// ── 2. Built-In Middleware ────────────────────────────────────
app.use(express.json());                         // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse HTML form data
app.use(express.static('public'));               // Serve static files

// ── 3. Router-Level ───────────────────────────────────────────
const router = express.Router();
router.use((req, res, next) => {
    console.log('Router middleware hit');
    next();
});
app.use('/api', router);

// ── 4. Third-Party ────────────────────────────────────────────
// npm install morgan cors helmet compression
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());

// ── 5. Error-Handling (MUST have 4 params) ────────────────────
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message });
});
\`\`\`

### Custom Middleware Examples

\`\`\`javascript
// Authentication middleware
const requireAuth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });
    req.user = { id: 1 }; // In real apps: verify JWT
    next();
};

app.get('/dashboard', requireAuth, (req, res) => {
    res.json({ message: 'Welcome!', user: req.user });
});

// Validation middleware
const validateUser = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'name and email required' });
    }
    next();
};

app.post('/users', validateUser, (req, res) => {
    res.status(201).json({ message: 'User created', data: req.body });
});

// Request timing middleware
const timer = (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        console.log(req.method, req.url, res.statusCode, Date.now() - start + 'ms');
    });
    next();
};
app.use(timer);
\`\`\`

---

## 10. Request & Response Objects

### Request Object (req)

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                    REQUEST OBJECT (req)                          │
├──────────────────────┬───────────────────────────────────────────┤
│  Property / Method   │  Description                              │
├──────────────────────┼───────────────────────────────────────────┤
│  req.params          │  Route params  /users/:id → params.id    │
│  req.query           │  Query string  ?page=1 → query.page      │
│  req.body            │  Parsed body (needs middleware)           │
│  req.headers         │  All request headers                      │
│  req.method          │  'GET', 'POST', 'PUT', 'DELETE', ...     │
│  req.url             │  Full URL + query string                  │
│  req.path            │  URL path only (no query string)          │
│  req.protocol        │  'http' or 'https'                       │
│  req.hostname        │  Host header value                        │
│  req.ip              │  Client IP address                        │
│  req.cookies         │  Cookies (needs cookie-parser)            │
│  req.get(name)       │  Get a specific header                    │
│  req.is(type)        │  Check if Content-Type matches            │
│  req.app             │  Reference to the Express app             │
└──────────────────────┴───────────────────────────────────────────┘
\`\`\`

### Response Object (res)

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                   RESPONSE OBJECT (res)                          │
├──────────────────────┬───────────────────────────────────────────┤
│  Method              │  Description                              │
├──────────────────────┼───────────────────────────────────────────┤
│  res.send(data)      │  Send text, buffer, or object             │
│  res.json(obj)       │  Send JSON (auto sets Content-Type)       │
│  res.status(code)    │  Set HTTP status (chainable)              │
│  res.redirect(url)   │  Redirect to another URL                  │
│  res.render(view)    │  Render a template engine view            │
│  res.sendFile(path)  │  Stream a file to the client              │
│  res.download(path)  │  Prompt file download                     │
│  res.set(key, value) │  Set a response header                    │
│  res.cookie(...)     │  Set a cookie                             │
│  res.clearCookie(n)  │  Remove a cookie                          │
│  res.end()           │  End response without body                │
│  res.locals          │  Share data with templates                │
└──────────────────────┴───────────────────────────────────────────┘
\`\`\`

### Practical Examples

\`\`\`javascript
app.get('/info', (req, res) => {
    // Reading from req
    console.log(req.method);              // 'GET'
    console.log(req.path);                // '/info'
    console.log(req.get('User-Agent'));   // Browser string
    console.log(req.query.page);          // ?page=2 → '2'
    console.log(req.ip);                  // '127.0.0.1'

    // Send JSON response
    res.json({
        method:   req.method,
        path:     req.path,
        protocol: req.protocol,
        host:     req.hostname
    });
});

// Chaining example
app.post('/create', (req, res) => {
    res.status(201)
       .set('X-App-Version', '1.0.0')
       .json({ created: true, data: req.body });
});
\`\`\`

---

## 11. Static Files

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                   STATIC FILE SERVING                            │
│                                                                  │
│  Directory: public/                                              │
│  ├── css/styles.css    → /css/styles.css                        │
│  ├── js/app.js         → /js/app.js                             │
│  ├── images/logo.png   → /images/logo.png                       │
│  └── index.html        → /  (or /index.html)                    │
│                                                                  │
│  With virtual prefix /static:                                   │
│  └── logo.png          → /static/images/logo.png               │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

\`\`\`javascript
const express = require('express');
const path = require('path');
const app = express();

// Basic usage
app.use(express.static('public'));

// Recommended: absolute path with __dirname
app.use(express.static(path.join(__dirname, 'public')));

// Virtual prefix
app.use('/static', express.static(path.join(__dirname, 'public')));

// Multiple directories (searched in order)
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'assets')));

// With options
app.use('/files', express.static(path.join(__dirname, 'public'), {
    maxAge:     '7d',        // Browser cache for 7 days
    index:      'index.html',
    extensions: ['html'],
    dotfiles:   'ignore',    // Block .env, .git etc.
    etag:       true
}));

app.listen(3000);
\`\`\`

---

## 12. Error Handling

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                    ERROR HANDLING FLOW                           │
│                                                                  │
│  Request → Middleware → Route Handler                            │
│                              │                                   │
│               ┌──────────────┴──────────────┐                   │
│               │ success                      │ error             │
│               ▼                               ▼                  │
│      res.json(data)               next(err) called               │
│                                        │                         │
│                                        ▼                         │
│                             Error Handling Middleware            │
│                           (err, req, res, next) => {}            │
│                                        │                         │
│                                        ▼                         │
│                             res.status(code).json(error)         │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

\`\`\`javascript
const express = require('express');
const app = express();
app.use(express.json());

// Custom error class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
    }
}

// Route that can error
app.get('/users/:id', (req, res, next) => {
    try {
        if (isNaN(req.params.id)) throw new AppError('Invalid ID format', 400);
        const user = null; // Simulate not found
        if (!user) throw new AppError('User not found', 404);
        res.json({ data: user });
    } catch (err) {
        next(err); // Pass to error handler
    }
});

// Async error example
app.get('/data', async (req, res, next) => {
    try {
        // await someDBCall();
        res.json({ data: [] });
    } catch (err) {
        next(err);
    }
});

// 404 — must be AFTER all route definitions
app.use((req, res, next) => {
    next(new AppError('Route ' + req.method + ' ' + req.url + ' not found', 404));
});

// Global error handler — MUST be LAST and have 4 parameters
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message    = err.message    || 'Internal Server Error';

    res.status(statusCode).json({
        status:  err.status || 'error',
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

app.listen(3000);
\`\`\`

---

## 13. RESTful API — Full Example

\`\`\`javascript
// Paste this into index.js and run: node index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

let todos = [
    { id: 1, title: 'Learn Express',  done: false },
    { id: 2, title: 'Build REST API', done: false }
];
let nextId = 3;

// GET /api/todos?done=false
app.get('/api/todos', (req, res) => {
    let result = [...todos];
    if (req.query.done !== undefined) {
        result = result.filter(t => t.done === (req.query.done === 'true'));
    }
    res.json({ success: true, count: result.length, data: result });
});

// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: todo });
});

// POST /api/todos
app.post('/api/todos', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ success: false, message: 'title required' });
    const todo = { id: nextId++, title, done: false };
    todos.push(todo);
    res.status(201).json({ success: true, data: todo });
});

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ success: false, message: 'Not found' });
    todos[index] = { id: todos[index].id, ...req.body };
    res.json({ success: true, data: todos[index] });
});

// PATCH /api/todos/:id/toggle
app.patch('/api/todos/:id/toggle', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ success: false, message: 'Not found' });
    todo.done = !todo.done;
    res.json({ success: true, data: todo });
});

// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ success: false, message: 'Not found' });
    todos.splice(index, 1);
    res.json({ success: true, message: 'Deleted' });
});

// 404 and error handler
app.use((req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(PORT, () => console.log('API: http://localhost:' + PORT + '/api/todos'));
\`\`\`

### Testing with cURL

\`\`\`bash
# List all todos
curl http://localhost:3000/api/todos

# Filter completed
curl "http://localhost:3000/api/todos?done=false"

# Create
curl -X POST http://localhost:3000/api/todos \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Deploy to production"}'

# Update
curl -X PUT http://localhost:3000/api/todos/1 \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Learn Express JS","done":true}'

# Toggle done
curl -X PATCH http://localhost:3000/api/todos/1/toggle

# Delete
curl -X DELETE http://localhost:3000/api/todos/2
\`\`\`

---

## 14. Async/Await & Promises

\`\`\`javascript
// ── Pattern 1: try/catch in each handler ──────────────────────
app.get('/users', async (req, res, next) => {
    try {
        const users = await User.find(); // e.g., Mongoose call
        res.json({ data: users });
    } catch (err) {
        next(err); // Passes to error-handling middleware
    }
});

// ── Pattern 2: asyncWrapper helper ────────────────────────────
const asyncWrapper = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

app.get('/posts', asyncWrapper(async (req, res) => {
    const posts = await Post.find();
    res.json({ data: posts });
}));

app.post('/posts', asyncWrapper(async (req, res) => {
    const post = await Post.create(req.body);
    res.status(201).json({ data: post });
}));

// ── Pattern 3: express-async-errors package ───────────────────
// $ npm install express-async-errors
// Drop this require at the very top of index.js:
// require('express-async-errors');
// After that, thrown errors in async handlers auto-call next(err)
app.get('/auto-catch', async (req, res) => {
    const data = await riskyAsyncOperation(); // no try/catch needed
    res.json({ data });
});
\`\`\`

`;
fs.appendFileSync(file, part2, 'utf8');

// ─── PART 3 ───────────────────────────────────────────────────
const part3 = `
---

## 15. Environment Variables

Never hard-code secrets! Use environment variables with the \`dotenv\` package.

### Setup

\`\`\`bash
npm install dotenv
\`\`\`

### .env file

\`\`\`
PORT=3000
NODE_ENV=development
DB_URI=mongodb://localhost:27017/mydb
JWT_SECRET=supersecretkey123
CORS_ORIGIN=http://localhost:3001
\`\`\`

> **IMPORTANT:** Add \`.env\` to your \`.gitignore\` — never commit secrets!

### Using in index.js

\`\`\`javascript
// Must be at the VERY TOP before any other imports
require('dotenv').config();

const express = require('express');
const app = express();

const PORT       = process.env.PORT       || 3000;
const NODE_ENV   = process.env.NODE_ENV   || 'development';
const DB_URI     = process.env.DB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

console.log('Environment:', NODE_ENV);

app.get('/', (req, res) => {
    res.json({
        environment: NODE_ENV,
        port: PORT
    });
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT + ' [' + NODE_ENV + ']');
});
\`\`\`

### Different .env files per environment

\`\`\`bash
.env              # Default
.env.development  # Dev overrides
.env.production   # Prod overrides
.env.test         # Test overrides
\`\`\`

\`\`\`javascript
// Load the right file based on NODE_ENV
require('dotenv').config({ path: '.env.' + (process.env.NODE_ENV || 'development') });
\`\`\`

---

## 16. Template Engines (EJS)

Template engines let you render dynamic HTML on the server.

### Available Template Engines

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│              TEMPLATE ENGINES IN EXPRESS                         │
├──────────────┬───────────────────────────────────────────────────┤
│  Engine      │  Syntax / Notes                                   │
├──────────────┼───────────────────────────────────────────────────┤
│  EJS         │  <%= variable %> — most popular, like HTML+JS     │
│  Pug         │  Indentation-based, no closing tags               │
│  Handlebars  │  {{variable}} — logicless Mustache variant        │
│  Mustache    │  {{variable}} — strictly logicless                │
└──────────────┴───────────────────────────────────────────────────┘
\`\`\`

### EJS Setup

\`\`\`bash
npm install ejs
\`\`\`

\`\`\`javascript
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob',   age: 30 }
];

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'Welcome!',
        users
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.listen(3000);
\`\`\`

### views/index.ejs

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><%= title %></title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .user { background: #f0f0f0; padding: 10px; margin: 8px 0; border-radius: 4px; }
    </style>
</head>
<body>
    <%- include('partials/header') %>

    <h1><%= message %></h1>

    <h2>Users (<%= users.length %>):</h2>

    <% if (users.length === 0) { %>
        <p>No users yet.</p>
    <% } else { %>
        <% users.forEach(user => { %>
            <div class="user">
                <strong><%= user.name %></strong> — Age: <%= user.age %>
            </div>
        <% }) %>
    <% } %>

    <%- include('partials/footer') %>
</body>
</html>
\`\`\`

### EJS Tags Reference

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                    EJS TAGS QUICK REFERENCE                      │
├──────────────┬───────────────────────────────────────────────────┤
│  Tag         │  Purpose                                          │
├──────────────┼───────────────────────────────────────────────────┤
│  <%= val %>  │  Output value (HTML-escaped — safe)               │
│  <%- val %>  │  Output raw HTML (unescaped — use carefully!)     │
│  <% code %>  │  Execute JS (if/for/etc.) — no output            │
│  <%# text %> │  Comment (not sent to client)                     │
│  <%- include │  Include a partial template file                  │
│    ('file')%>│                                                   │
└──────────────┴───────────────────────────────────────────────────┘
\`\`\`

---

## 17. Express Router — Modular Routes

As apps grow, keep routes organized in separate files using \`express.Router()\`.

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                    EXPRESS ROUTER STRUCTURE                      │
│                                                                  │
│   index.js (main)                                                │
│      │                                                           │
│      ├── app.use('/api/users',    userRouter)                    │
│      ├── app.use('/api/posts',    postRouter)                    │
│      └── app.use('/api/products', productRouter)                 │
│                                                                  │
│   routes/users.js                                                │
│      router.get('/')        → GET  /api/users                   │
│      router.get('/:id')     → GET  /api/users/1                 │
│      router.post('/')       → POST /api/users                   │
│      router.put('/:id')     → PUT  /api/users/1                 │
│      router.delete('/:id')  → DELETE /api/users/1               │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

### routes/users.js

\`\`\`javascript
const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob',   email: 'bob@example.com'   }
];
let nextId = 3;

// GET /api/users
router.get('/', (req, res) => {
    res.json({ success: true, data: users });
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: user });
});

// POST /api/users
router.post('/', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'name and email required' });
    const user = { id: nextId++, name, email };
    users.push(user);
    res.status(201).json({ success: true, data: user });
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Not found' });
    users[index] = { id: users[index].id, ...req.body };
    res.json({ success: true, data: users[index] });
});

// DELETE /api/users/:id
router.delete('/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Not found' });
    users.splice(index, 1);
    res.json({ success: true, message: 'User deleted' });
});

module.exports = router;
\`\`\`

### index.js (main app)

\`\`\`javascript
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Mount routers
app.use('/api/users',    require('./routes/users'));
app.use('/api/posts',    require('./routes/posts'));
app.use('/api/products', require('./routes/products'));

// Root
app.get('/', (req, res) => res.json({ message: 'API is running!' }));

// 404
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () => console.log('http://localhost:' + PORT));
\`\`\`

---

## 18. CORS, Helmet & Rate Limiting

### CORS (Cross-Origin Resource Sharing)

CORS controls which origins (domains) can access your API.

\`\`\`bash
npm install cors helmet express-rate-limit
\`\`\`

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express();

// ── Helmet — Security headers ──────────────────────────────────
app.use(helmet());
// Automatically sets: X-Content-Type-Options, X-Frame-Options,
// Content-Security-Policy, Strict-Transport-Security, etc.

// ── CORS — Multiple configuration options ──────────────────────

// Allow ALL origins (development only!)
app.use(cors());

// Allow specific origin
app.use(cors({
    origin: 'https://myfrontend.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true   // Allow cookies
}));

// Allow multiple origins
const allowedOrigins = ['http://localhost:3001', 'https://myfrontend.com'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

// ── Rate Limiting ──────────────────────────────────────────────
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100,                   // Max 100 requests per window
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true,      // Return rate info in headers
    legacyHeaders: false
});

// Apply globally
app.use(limiter);

// Or apply to specific route prefix
app.use('/api/', limiter);

// Stricter limit for auth endpoints
const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    message: { error: 'Too many login attempts.' }
});
app.use('/api/auth/', authLimiter);

app.listen(3000);
\`\`\`

---

## 19. JWT Authentication

A common pattern for stateless API authentication.

\`\`\`bash
npm install jsonwebtoken bcryptjs
\`\`\`

\`\`\`javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret';

// Mock user store
const users = [
    { id: 1, username: 'alice', passwordHash: bcrypt.hashSync('password123', 10) }
];

// ── POST /api/auth/login ───────────────────────────────────────
app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
        { userId: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: '24h' }
    );

    res.json({ success: true, token, expiresIn: '24h' });
});

// ── JWT Middleware ─────────────────────────────────────────────
const protect = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // Expected format: "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access token required' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // attach user payload to request
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
};

// ── Protected route ────────────────────────────────────────────
app.get('/api/profile', protect, (req, res) => {
    res.json({
        success: true,
        user: { id: req.user.userId, username: req.user.username }
    });
});

// ── POST /api/auth/logout ──────────────────────────────────────
// JWTs are stateless — client simply discards the token.
// For server-side invalidation, maintain a token blocklist in Redis/DB.
app.post('/api/auth/logout', protect, (req, res) => {
    res.json({ success: true, message: 'Logged out — discard token on client.' });
});

app.listen(3000, () => console.log('Auth API running on port 3000'));
\`\`\`

### JWT Flow Diagram

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                      JWT AUTH FLOW                               │
│                                                                  │
│  Client                          Server                          │
│    │                               │                             │
│    │  POST /login {user,pass}       │                             │
│    │ ─────────────────────────────▶│                             │
│    │                               │ Verify credentials          │
│    │                               │ Generate JWT token          │
│    │  { token: "eyJhbGci..." }     │                             │
│    │ ◀─────────────────────────────│                             │
│    │                               │                             │
│    │  Store token (localStorage)   │                             │
│    │                               │                             │
│    │  GET /api/profile             │                             │
│    │  Authorization: Bearer <token>│                             │
│    │ ─────────────────────────────▶│                             │
│    │                               │ Verify token signature      │
│    │                               │ Decode payload              │
│    │                               │ Attach user to req          │
│    │  { user: { id, username } }   │                             │
│    │ ◀─────────────────────────────│                             │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

---

## 20. Best Practices

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                   EXPRESS BEST PRACTICES                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. PROJECT STRUCTURE                                            │
│     controllers/   Business logic (keep routes thin)            │
│     routes/        Route definitions                             │
│     middleware/    Custom middleware (auth, validation)          │
│     models/        Data models / DB schemas                      │
│     services/      External API calls, complex business logic    │
│     config/        App configuration (DB, environment)           │
│                                                                  │
│  2. SECURITY                                                     │
│     Use helmet()          Security HTTP headers                  │
│     Use cors() carefully  Allowlist specific origins             │
│     Rate limit endpoints  Prevent brute-force / DoS             │
│     Validate all input    Never trust client data                │
│     Use HTTPS in prod     Encrypt data in transit                │
│     Never expose secrets  Use .env + .gitignore                  │
│                                                                  │
│  3. PERFORMANCE                                                  │
│     Use compression()     Gzip responses                         │
│     Implement caching     Redis, in-memory, HTTP cache headers   │
│     Paginate large data   page + limit query params              │
│     Async/await properly  Never block the event loop             │
│     Connection pooling    For DB connections (mongoose, pg)      │
│                                                                  │
│  4. ERROR HANDLING                                               │
│     Always have a global error handler (4 params)               │
│     Use proper HTTP status codes (not always 200)               │
│     Log errors with details (Winston, Morgan)                    │
│     Never leak stack traces to production clients                │
│                                                                  │
│  5. CODE QUALITY                                                 │
│     Use Express Router for modular routes                        │
│     Separate route handlers from business logic                  │
│     Use environment variables for all config                     │
│     Keep route handlers small (single responsibility)            │
│     Write async handlers with proper error forwarding            │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

### Production-Ready Security Setup

\`\`\`javascript
require('dotenv').config();
const express   = require('express');
const helmet    = require('helmet');
const cors      = require('cors');
const rateLimit = require('express-rate-limit');
const morgan    = require('morgan');
const compression = require('compression');

const app = express();

// Security
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Performance
app.use(compression());

// Logging
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Body parsing
app.use(express.json({ limit: '10kb' })); // Prevent huge payloads
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Routes
app.use('/api/users',    require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use('/api/auth',     require('./routes/auth'));

// 404
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

// Error handler
app.use((err, req, res, next) => {
    const code = err.statusCode || 500;
    res.status(code).json({
        error:   err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Production server on port ' + PORT));
\`\`\`

---

## 21. Quick Reference Cheatsheet

\`\`\`javascript
// ── Setup ─────────────────────────────────────────────────────
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ── Routes ────────────────────────────────────────────────────
app.get('/path',    handler);    // Read
app.post('/path',   handler);    // Create
app.put('/path',    handler);    // Replace
app.patch('/path',  handler);    // Partial update
app.delete('/path', handler);    // Delete
app.all('/path',    handler);    // Any method

// ── Route Params & Query ──────────────────────────────────────
app.get('/users/:id', (req, res) => {
    const id   = req.params.id;    // URL param
    const page = req.query.page;   // ?page=1
    res.json({ id, page });
});

// ── Middleware ────────────────────────────────────────────────
app.use(myMiddleware);             // Global
app.use('/api', myMiddleware);     // Path-specific
app.get('/route', mw, handler);    // Route-specific

// ── Router ────────────────────────────────────────────────────
const router = express.Router();
router.get('/', handler);
router.post('/', handler);
module.exports = router;           // In route file

app.use('/api/users', require('./routes/users')); // In index.js

// ── Response ─────────────────────────────────────────────────
res.send('text');
res.json({ key: 'value' });
res.status(201).json({ created: true });
res.status(404).json({ error: 'Not found' });
res.redirect('/new-path');
res.redirect(302, 'https://example.com');
res.sendFile(path.join(__dirname, 'file.pdf'));
res.download(path.join(__dirname, 'file.pdf'));

// ── Error Handling ────────────────────────────────────────────
// In route: pass error with next(err)
// Must be LAST middleware, MUST have 4 params
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ error: err.message });
});

// ── Listen ────────────────────────────────────────────────────
app.listen(3000, () => console.log('Running on http://localhost:3000'));
\`\`\`

---

## Conclusion

Express.js is the backbone of the Node.js web ecosystem. With its middleware-based architecture, clean routing, and massive ecosystem, it gives you full control to build anything from a simple API to a large-scale production service.

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                    WHAT TO LEARN NEXT                            │
│                                                                  │
│  Database Integration                                            │
│    Mongoose (MongoDB)     →  npm install mongoose               │
│    Prisma (PostgreSQL)    →  npm install prisma                  │
│    Sequelize (SQL)        →  npm install sequelize               │
│                                                                  │
│  Authentication                                                  │
│    JWT                    →  npm install jsonwebtoken            │
│    Passport.js            →  npm install passport                │
│    OAuth2                 →  npm install passport-google-oauth   │
│                                                                  │
│  File Upload                                                     │
│    Multer                 →  npm install multer                  │
│                                                                  │
│  Validation                                                      │
│    Joi                    →  npm install joi                     │
│    express-validator      →  npm install express-validator       │
│                                                                  │
│  Testing                                                         │
│    Supertest              →  npm install supertest               │
│    Jest                   →  npm install jest                    │
│                                                                  │
│  Deployment                                                      │
│    Railway, Render, Heroku  →  Quick deploys                     │
│    Docker + EC2/GCP         →  Production grade                  │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

---

**Resources:**
- [Express.js Official Docs](https://expressjs.com/)
- [MDN HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [JWT.io](https://jwt.io/)
- [Helmet.js](https://helmetjs.github.io/)

**Last Updated:** March 2026
`;
fs.appendFileSync(file, part3, 'utf8');

console.log('All parts appended. Done!');
console.log('File size:', fs.statSync(file).size, 'bytes');
