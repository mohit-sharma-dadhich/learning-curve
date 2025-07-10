# Node.js Fundamentals

##  1. What is Node.js?

**Node.js** is a runtime environment that allows JavaScript to run **outside the browser**, usually on a server.

### 🧠 Key Points:
- Built on Chrome’s **V8 engine**
- Developed by **Ryan Dahl** in 2009
- Runs JavaScript on the **server-side**
- Used for building **APIs**, **real-time apps**, **CLI tools**, and more

### ⚙️ Features:
- **Single-threaded** & **event-driven**
- Uses **non-blocking I/O**
- Comes with **npm** (Node Package Manager)
- Cross-platform and open-source

### 🔍 Example:

**File:** `hello.js`

```js
console.log("Hello from Node.js");
```

**Run it in terminal:**

```js
node hello.js
```

**Output:**

```js
Hello from Node.js
```
---

## 2. Node.js Architecture (Single-threaded, Non-blocking I/O)

### 🧠 Key Concepts:

- **Single-threaded**:  
  Node.js uses a **single main thread** to handle all incoming requests.

- **Non-blocking I/O**:  
  It doesn't wait for one task to finish before moving to the next. Instead, it uses **callbacks**, **promises**, or **async/await** to continue execution.

- **Event-driven**:  
  Node.js uses an **Event Loop** to handle multiple requests asynchronously.



### 🔁 How it works:

1. **Client** sends a request (e.g., read a file)
2. Node forwards it to the **Operating System**
3. Instead of waiting, Node handles other incoming requests
4. When the file is ready, Node uses a **callback/event** to send the response



### 💡 Analogy:

Imagine a waiter taking orders:
- Instead of waiting in the kitchen for each dish, he takes another order while the cook prepares the food.
- When food is ready, the waiter serves it.

---


## 3. Node REPL (Read–Eval–Print Loop)

### 📘 What is REPL?

**REPL** stands for:
- **Read**: Takes user input
- **Eval**: Evaluates the input
- **Print**: Prints the result
- **Loop**: Repeats the process

It's an interactive environment that lets you run **JavaScript code line by line** directly in your terminal using Node.js.


### 🧑‍💻 How to Open REPL:

Just type the following in your terminal:

```bash
node
```

You’ll see something like:

```bash
Welcome to Node.js...
>
```

Now type JavaScript directly:

```bash
> 5 + 3
8

> const name = "Node"
undefined

> name
'Node'
```

To exit REPL:

```bash
.exit
```

or press `Ctrl + C` twice.



### 💡 Why Use REPL?

- For quick testing/debugging
- Try syntax or logic without creating a `.js` file
- Understand how Node behaves in real time

---

## 4. Modules in Node.js

### 📦 What is a Module?

A **module** in Node.js is a file containing code (variables, functions, classes, logic) that you can reuse in other files.

Node.js treats every **JavaScript file** as a separate module.



### ✅ Why use modules?
- Code reuse (DRY)
- Separation of concerns
- Easier to manage large codebases



### 🔄 Types of Modules:

1. **Built-in Modules**  
   - Comes with Node.js  
   - Example: `fs`, `path`, `os`, `http`, `events`

2. **Custom Modules**  
   - Files you create yourself (like `math.js`, `greet.js`)

3. **Third-party Modules**  
   - Installed via npm (like `express`, `axios`)

### 🔁 How to Export & Require Modules in Node.js

#### 📤 Export a Function (or Variable/Object)

In `math.js`:

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

You can also export an object:

```js
const mathUtils = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};

module.exports = mathUtils;
```


#### 📥 Import (Require) a Custom Module

In `app.js`:

For function export:
```js
const add = require('./math');

console.log(add(2, 3)); // Output: 5
```

For object export:
```js
const math = require('./math');

console.log(math.add(4, 2)); // Output: 6
console.log(math.sub(4, 2)); // Output: 2
```

📝 **Note**:
- Always use `./` when importing your own modules (same folder)
- Don't add `.js` extension — Node resolves it automatically

## How to Use `"type": "module"` in Node.js

### 📘 Why use it?

By default, Node.js uses **CommonJS** module system (`require`, `module.exports`).  
To use the modern **ES Module** system (`import`, `export`), you need to tell Node.js explicitly.

This is done by adding:

```js
"type": "module"
```

in your `package.json`.

---

### 🔧 How to Add It:

In your `package.json`, add `"type": "module"` at the top level:

```js
{
  "type": "module",
  "dependencies": {
    "@tailwindcss/cli": "^4.1.10",
    "tailwindcss": "^4.1.10"
  }
}
```

---

### 📦 After enabling it:

You can now use **ES module syntax** in your `.js` files:

**Import:**
```js
import { add } from './math.js';
```

**Export:**
```js
export function add(a, b) {
  return a + b;
}
```

---

### ⚠️ Things to Remember:

- Always include **file extensions** like `.js` in `import` paths  
  ✅ `import x from './file.js'`  
  ❌ `import x from './file'`

- You can’t use `require()` or `module.exports` in `.js` files anymore  
  - If you still need CommonJS, rename file as `.cjs`

---

### 💡 Summary:

- `"type": "module"` enables modern JS modules in Node.js
- Use `import/export` instead of `require/module.exports`
- Update `package.json` and use `.js` file extension properly

---

## 5. Built-in Modules in Node.js

Node.js comes with several **core (built-in) modules** — no need to install via npm.



### 📁 fs (File System Module)

Used to **read, write, update, and delete** files.

#### Example: Read a File Asynchronously

```js
const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});
```

#### Example: Write to a File

```js
fs.writeFile('newFile.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});
```



### 📂 path (Path Module)

Helps work with file paths (platform-independent).

#### Example:

```js
const path = require('path');

const filePath = path.join(__dirname, 'file.txt');
console.log('Absolute path:', filePath);
```



### 🖥 os (Operating System Module)

Gives info about the system Node.js is running on.

#### Example:

```js
const os = require('os');

console.log('OS platform:', os.platform());
console.log('Total memory:', os.totalmem());
console.log('Free memory:', os.freemem());
```



### 🔔 events (Event Module)

Allows you to **create, emit, and listen to custom events**.

#### Example:

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Mohit');
```

---