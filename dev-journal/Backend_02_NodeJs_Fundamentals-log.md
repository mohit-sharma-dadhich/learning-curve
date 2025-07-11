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

## 5. How to Use `"type": "module"` in Node.js

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

## 6. Built-in Modules in Node.js

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

## 7. File System Operations (`fs`)

The `fs` module in Node.js provides an API to interact with the file system. It supports both **asynchronous (non-blocking)** and **synchronous (blocking)** methods.



#### 📥 Importing the Module

```js
const fs = require('fs');
```



#### 📖 Reading Files

**Asynchronous**
```js
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
```

**Synchronous**
```js
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```


#### 📝 Writing Files

**Asynchronous**
```js
fs.writeFile('output.txt', 'Hello Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});
```

**Synchronous**
```js
fs.writeFileSync('output.txt', 'Hello Node.js!');
```



#### ➕ Appending to Files

**Asynchronous**
```js
fs.appendFile('output.txt', '\nAppended text.', (err) => {
  if (err) throw err;
  console.log('Data appended');
});
```

**Synchronous**
```js
fs.appendFileSync('output.txt', '\nAppended text.');
```



#### ❌ Deleting Files

**Asynchronous**
```js
fs.unlink('output.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
```

**Synchronous**
```js
fs.unlinkSync('output.txt');
```



#### ✅ Check if File Exists

```js
if (fs.existsSync('example.txt')) {
  console.log('File exists!');
} else {
  console.log('File not found');
}
```


#### 📌 Summary Table

| Task             | Async Method       | Sync Method          |
|------------------|--------------------|----------------------|
| Read file        | `fs.readFile()`    | `fs.readFileSync()`  |
| Write file       | `fs.writeFile()`   | `fs.writeFileSync()` |
| Append to file   | `fs.appendFile()`  | `fs.appendFileSync()`|
| Delete file      | `fs.unlink()`      | `fs.unlinkSync()`    |
| Check if exists  | —                  | `fs.existsSync()`    |

---

## 8. npm (Node Package Manager)

`npm` is the default package manager for Node.js. It is used to install, manage, and update third-party libraries (packages) and also manage project metadata via `package.json`.

### 📦 Initialize a Node.js Project

Creates a `package.json` file with project metadata.

```bash
npm init
npm init -y
```



### 📥 Install Packages

**Install locally (default):**
```bash
npm install package-name
```

**Install globally (for CLI tools):**
```bash
npm install -g package-name
```

### 🗑️ Uninstall a Package

```bash
npm uninstall package-name
```

### 📃 View Installed Packages

**Local:**
```bash
npm list
```

**Global:**
```bash
npm list -g
```

### 📥 Install from `package.json`

Used when cloning/downloading a project:
```bash
npm install
```

### 📌 Summary Table

| Task                      | Command                      |
|---------------------------|------------------------------|
| Init project              | `npm init` / `npm init -y`   |
| Install package           | `npm install <pkg>`          |
| Uninstall package         | `npm uninstall <pkg>`        |
| List local packages       | `npm list`                   |
| List global packages      | `npm list -g`                |
| Install from package.json | `npm install`                |

---
## 9. package.json & package-lock.json

These two files are essential for managing dependencies in a Node.js project.


### 📄 `package.json`

This file holds **metadata** about your project and the list of **dependencies**.

#### 📌 Created using:
```bash
npm init
```

#### 📘 Example:
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```


### 🔑 Key Fields:

| Field         | Purpose                             |
|---------------|--------------------------------------|
| `name`        | Project name                         |
| `version`     | Project version                      |
| `scripts`     | Command shortcuts (`npm run`)        |
| `dependencies`| Required packages for production     |
| `devDependencies` | For development only             |

### 📄 `package-lock.json`

This file **automatically generates** when you install packages using `npm`.

#### 🧠 Purpose:
- Locks the exact version of every installed package (and sub-dependency)
- Ensures **consistent installs** across different systems

📝 **Note:** You should always commit both `package.json` and `package-lock.json` to version control (like Git).



### ✅ Summary:

| File               | Description                                         |
|--------------------|-----------------------------------------------------|
| `package.json`     | Declares project info and dependencies              |
| `package-lock.json`| Locks exact versions of all installed packages      |

---

## 10. The `scripts` Field in `package.json`

The `scripts` field allows you to define **custom commands** that you can run using:

```bash
npm run <script-name>
```


### 🛠️ Example `package.json` Scripts

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo 'No tests defined'"
  }
}
```


### ▶️ How to Run Scripts

```bash
npm run start
npm run dev
npm run test
```



### 🎯 Special Case: `start`

If you define a `start` script, you can run it with just:

```bash
npm start
```

(no need to write `npm run start`)


### ✅ Summary

| Script Field | Description                                  |
|--------------|----------------------------------------------|
| `start`      | Entry point command (`npm start`)            |
| `dev`        | Common for development (e.g., with nodemon)  |
| `test`       | Placeholder for test commands                |
| Any custom   | Can define any custom label + shell command  |

---

## 11. Sync vs Async in Node.js

Node.js supports both **synchronous (blocking)** and **asynchronous (non-blocking)** operations.

### 🔄 Synchronous (Sync)

- **Blocks** the execution until the task completes
- Slower in I/O-heavy tasks
- Easier to write and debug

#### 📘 Example:
```js
const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf8');
console.log(data); // waits until file is read
```


### ⚡ Asynchronous (Async)

- **Does not block** the execution
- Uses callbacks, promises, or async/await
- More efficient for I/O operations

#### 📘 Example:
```js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // executed after file is read
});
```



### ✅ Summary

| Type    | Blocks Execution | Uses         | Performance   |
|---------|------------------|--------------|---------------|
| Sync    | Yes              | Simpler code | Slower        |
| Async   | No               | Callback/Promise/Async-Await | Faster for I/O |

---
## 12. Event Loop (Basic Understanding)

The **Event Loop** is the core of Node.js’s non-blocking architecture. It allows Node.js to handle many operations asynchronously using a single thread.


### 🧠 How It Works:

1. Node.js starts executing code from the top of the file.
2. When it encounters **async operations** (like file read, setTimeout, HTTP requests), it sends them to the system APIs.
3. Meanwhile, Node.js continues executing other code.
4. Once the async operation completes, the **callback** is pushed to the **Event Queue**.
5. The **Event Loop** picks callbacks from the queue and pushes them back into the call stack for execution.



### 📘 Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");
```

**Output:**
```bash
Start
End
Inside setTimeout
```

Even though the timeout is 0ms, it's **asynchronous** — so "End" is printed first.



### ✅ Summary

| Concept         | Description                                              |
|------------------|----------------------------------------------------------|
| Call Stack       | Where JS code runs (one line at a time)                 |
| Event Loop       | Handles async callbacks from queue                      |
| Event Queue      | Holds async task callbacks ready to be executed         |
| Non-blocking     | Continues execution without waiting for async results   |

---