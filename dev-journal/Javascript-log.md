# 📘 JavaScript Notes Index

## 📚 Table of Contents

- [Basics_of_JS](#basics_of_js)
- [JavaScript DOM](#javascript-dom)
  - [window Object](#-window-object)
  - [document Object](#-document-object)
  - [Element Selection in the DOM](#-2-element-selection-in-the-dom)
  - [DOM Content & Form Input](#-3-dom-content--form-input)
  - [Event Handling Methods](#-4-event-handling-methods)
  - [Common Event Types](#-5-common-event-types)
  - [Event Object](#-6-event-object)
  - [classList](#-classlist)
- [Arrow Functions in JavaScript](#-arrow-functions-in-javascript)
- [setTimeout – Delay Execution](#-settimeout--delay-execution)
- [setInterval & clearInterval – Repeated Execution](#-setinterval--clearinterval--repeated-execution)
- [JavaScript Loops](#-javascript-loops)
  - [while Loop](#-1-while-loop)
  - [do...while Loop](#-2-dowhile-loop)
  - [for Loop](#-3-for-loop)
  - [for...of Loop](#-4-forof-loop)
  - [for...in Loop](#-5-forin-loop)
  - [break and continue](#-6-loop-control-break-and-continue)
- [Closures in JavaScript](#-closures-in-javascript)

# Basics_of_JS:

## 🧠 What I Learned

### ✅ `let`

Used to declare variables like `userChoice`, `computerChoice`, and `result`.  
It allows storing and updating values during the game.

---

### ✅ `Math.random()`

Generates a random decimal number between `0` and `1`.  
In this project, it is used to randomly choose between rock, paper, and scissors for the computer.

---

### ✅ `if-else` Statements

Used to check conditions and control what happens based on the user and computer choices.  
For example, who wins, or if it’s a draw.

---

### ✅ `alert()`

Displays a popup message on the screen.  
Here, it shows the player’s move, computer’s move, and the result of the game.

---

### ✅ `onclick`

An HTML attribute that lets us run JavaScript code when a button is clicked.  
Each button (Rock, Paper, Scissors) runs different logic based on the user's choice.

---

### ✅ Strings and Template Literals (\` \`)

Used to format messages with variables inside them.  
For example:

```js
alert(`Player: ${userChoice}\nComputer: ${computerChoice}\nResult: ${result}`);
```

### ✅ String Properties and Methods

- Strings in JavaScript are **primitive data types** but behave like objects because they have built-in methods.
- These methods help in manipulating, checking, and formatting text.

**Common String Properties:**

- `.length` — Returns the number of characters in a string.

```js
const name = "Mohit";
console.log(name.length); // 5
```

**Common String Methods:**

- `.toUpperCase()` — Converts all characters to uppercase.
- `.toLowerCase()` — Converts all characters to lowercase.
- `.includes()` — Checks if a substring exists.
- `.indexOf()` — Returns the index of the first match.
- `.slice(start, end)` — Extracts part of a string.
- `.trim()` — Removes whitespace from both ends.
- `.replace(old, new)` — Replaces part of the string.
- `.split(separator)` — Splits the string into an array.
- `.charAt(index)` — Returns the character at a specific index.
  **Examples:**

```js
const str = "  Hello, Mohit!  ";

console.log(str.toUpperCase()); // "  HELLO, MOHIT!  "
console.log(str.toLowerCase()); // "  hello, mohit!  "
console.log(str.includes("Mohit")); // true
console.log(str.indexOf("Mohit")); // 9
console.log(str.slice(2, 7)); // "Hello"
console.log(str.trim()); // "Hello, Mohit!"
console.log(str.replace("Mohit", "Friend")); // "  Hello, Friend!  "
console.log(str.split(",")); // ["  Hello", " Mohit!  "]
console.log(str.charAt(2)); // "H"
```

### ✅ function (Core Concept)

Functions help organize code into reusable blocks.  
Instead of repeating logic, we can define it once and call it multiple times.

In this project:

- getComputerMove() — decides the computer's move.
- getResult() — compares user and computer choices to decide the winner.
- showResult() — displays the result using alert().

Example:

```js
function getResult() {
  if (userChoice === "rock" && computerChoice === "scissors") {
    result = "Player Wins";
  }
}
```

### ✅ Falsy Values in JavaScript

Some values are considered **falsy**, meaning they behave like `false` in condition checks:

- `false`
- `0`
- `''` (empty string)
- `null`
- `undefined`
- `NaN`

Example:

```js
if (0) {
  // This block will not run because 0 is falsy
}
```

### ✅ Returning Multiple Values in JavaScript

JavaScript doesn’t support returning multiple values directly like Python tuples,  
but we can return multiple values using an object or an array.

Example (object way — more readable):

```js
function count(result) {
  return {
    win: 2,
    lose: 1,
    draw: 1,
  };
}
```

### ✅ Object Inside an Object (Nested Objects)

You can have objects as properties inside another object.

Example:

```js
const player = {
  name: "Alice",
  score: 0,
  stats: {
    wins: 5,
    losses: 2,
    draws: 1,
  },
};
```

### ✅ Function Inside Object (Method)

A function stored inside an object is called a **method**.  
It allows the object to perform actions or behaviors.

Example:

```js
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b; // Shorter method syntax
  },
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
```

### ✅ JSON (JavaScript Object Notation)

- JSON is a lightweight data-interchange format, easy for humans to read and write, and easy for machines to parse and generate.
- It represents data as key-value pairs, arrays, and nested objects.
- Commonly used to send and receive data between a client and a server in web applications.

**Key Methods:**

- `JSON.stringify(object)` — Converts a JavaScript object to a JSON string.
- `JSON.parse(string)` — Converts a JSON string back to a JavaScript object.

**Example:**

```js
const user = { name: "Mohit", age: 20 };
const jsonString = JSON.stringify(user);
// '{"name":"Mohit","age":20}'
const userObj = JSON.parse(jsonString);
// { name: "Mohit", age: 20 }
```

### ✅ localStorage

- `localStorage` is a browser API for storing key-value pairs persistently (data stays after page reloads or browser restarts).
- Used to save user preferences, game scores, tokens, etc.
- Stores data as strings only.

**Common methods:**

- `localStorage.setItem(key, value)` — Save a value by key.
- `localStorage.getItem(key)` — Retrieve value by key.
- `localStorage.removeItem(key)` — Remove item by key.
- `localStorage.clear()` — Clear all stored data.

**Example:**

```js
// Save data
localStorage.setItem("username", "Mohit");

// Get data
const name = localStorage.getItem("username"); // "Mohit"

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```

### ✅ `null` vs `undefined`

- `undefined`: A variable that has been declared but **not assigned** a value.
- `null`: A value that represents the **intentional absence** of any object value.

**Key Differences:**

- `undefined` is set **automatically by JavaScript** when no value is assigned.
- `null` is set **manually by the developer** to represent “nothing”.

**Example:**

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

### ✅ Objects are References

- In JavaScript, **objects are assigned and compared by reference**, not by value.
- When you assign an object to another variable, both variables refer to the **same object in memory**.
- Changing one affects the other unless a new object is explicitly created.

**Example:**

```js
const obj1 = { name: "Mohit" };
const obj2 = obj1;

obj2.name = "Sharma";
console.log(obj1.name); // "Sharma" (same object reference)
```

**Reassigning Creates a New Reference:**

```js
obj2 = { name: "New" };
console.log(obj1.name); // "Sharma" (unchanged, now different object)
```

**Object Comparison:**

```js
const a = { x: 1 };
const b = { x: 1 };

console.log(a === b); // false (different objects)
console.log(a == b); // false
```

- Two objects are only equal if they refer to the same memory reference.

### ✅ Destructuring

- Destructuring lets you unpack values from arrays or properties from objects into distinct variables.
- Makes your code cleaner and avoids repetitive access like `obj.key` or `arr[0]`.

**Array Destructuring:**

```js
const scores = [80, 90, 100];
const [math, science, english] = scores;

console.log(math); // 80
console.log(science); // 90
```

**Object Destructuring:**

```js
const user = {
  name: "Mohit",
  age: 20,
  city: "Jaipur",
};

const { name, age } = user;
console.log(name); // "Mohit"
console.log(age); // 20
```

**Renaming While Destructuring:**

```js
const { name: userName } = user;
console.log(userName); // "Mohit"
```

**Default Values:**

```js
const { score = 0 } = {};
console.log(score); // 0
```

### ✅ Shorthand Property

- If the **variable name** is the same as the **property name**, you can use shorthand syntax.
- This helps make the object definition cleaner and easier to read.

**Without Shorthand:**

```js
const name = "Mohit";
const age = 20;

const user = {
  name: name,
  age: age,
};
```

**With Shorthand:**

```js
const name = "Mohit";
const age = 20;

const user = {
  name,
  age,
};
```

**Why it works:**

- JavaScript automatically understands that name and age are variables and uses their names as property keys and their values as property values.

### ✅ Shorthand Method

- When defining functions inside objects, you can skip the `function` keyword and the colon.
- This shorthand makes object methods cleaner and more readable.

**Without Shorthand:**

```js
const user = {
  greet: function () {
    console.log("Hello!");
  },
};
```

**With Shorthand:**

```js
const user = {
  greet() {
    console.log("Hello!");
  },
};
```

**Why it works:**

- JavaScript treats it as a regular function method, just written in a shorter form.
- Useful when writing methods inside objects like event handlers, class-like structures, etc.

# 🧠 JavaScript DOM:

## Browser Environment:

### ✅ window Object:

The **`window`** object represents the browser window and is the **global object** for client-side JavaScript. All global functions like `alert()` or `setTimeout()` are part of `window`.

```js
console.log(window.innerWidth); // Viewport width in pixels
console.log(window.location.href); // Current page URL
window.alert("Hello!"); // Displays an alert box
```

### ✅ `document` Object

The **`document`** object is a property of the `window` object and represents the **entire HTML document**. It is the main entry point to access and manipulate the DOM (Document Object Model).

You can use `document` to:

- Access elements in the page
- Modify content or structure
- Add event listeners
- Read meta-information about the page

#### Examples:

```js
console.log(document); // Logs the entire document object
console.log(document.title); // Gets the page title
console.log(document.URL); // Gets the current URL of the page
console.log(document.body); // Logs the <body> element
```

## 2. Element Selection in the DOM

To interact with elements on a webpage, you must first **select** them using DOM selection methods.

### ✅ `document.getElementById(id)`

Selects a **single element** by its ID.

```js
const heading = document.getElementById("main-heading");
console.log(heading);
```

### ✅ `document.querySelector(selector)`

- Selects the first matching element using a CSS-style selector.

```js
document.querySelector("#header"); // ID selector
document.querySelector(".title"); // Class selector
document.querySelector("div"); // Tag selector
document.querySelector("input[type='text']"); // Attribute selector
```

### ✅ `document.getElementsByClassName(className)`

- Returns an HTMLCollection of all elements that have the specified class name.

```js
const items = document.getElementsByClassName("list-item");
console.log(items); // HTMLCollection (not an array)
```

### ✅ `document.getElementsByTagName(tagName)`

- Returns an HTMLCollection of all elements with the given tag name.

```js
const paragraphs = document.getElementsByTagName("p");
```

### ✅ `document.querySelectorAll(selector)`

- Returns a NodeList of all elements matching the given CSS selector.

```js
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  console.log(btn.textContent);
});
```

- Note: `NodeList` supports `forEach()`, unlike `HTMLCollection`.

**Note:**

- `querySelectorAll()` returns a `NodeList`, which supports `.forEach()`, unlike `HTMLCollection` returned by methods like `getElementsByClassName()` or `getElementsByTagName()`.

## 🖋️ 3. DOM Content & Form Input

This section covers how to read and update the content of elements or input fields in the DOM.

---

### ✅ `innerText`

Returns the **visible text content** of an element (ignores hidden content). When setting it, only plain text is added.

```js
const element = document.querySelector("#demo");
console.log(element.innerText); // Reads visible text

element.innerText = "Updated Text"; // Sets new text
```

### ✅ `textContent`

- Returns all the text inside an element, including hidden text. It’s usually faster than innerText.

```js
const element = document.querySelector("#demo");
console.log(element.textContent); // May include hidden text

element.textContent = "Hidden-safe text";
```

### ✅ `innerHTML`

- Gets or sets the HTML content inside an element. Can include HTML tags and formatting.

```js
const div = document.querySelector("#content");

console.log(div.innerHTML); // Reads current HTML

div.innerHTML = "<strong>Bold Text</strong>"; // Inserts formatted content
```

### ✅ `value`

- Used with form elements (`<input>`, `<textarea>`, `<select>`) to get or set the user-entered value.

```js
const input = document.querySelector("#username");

console.log(input.value); // Gets value from input field

input.value = "NewUser123"; // Sets value programmatically
```

**`Number()` Function**

- Converts a string (e.g., from an input) into a number. Useful when working with numeric inputs.

```js
const input = document.querySelector("#age");
const age = Number(input.value); // Converts string to number

console.log(typeof age); // "number"
```

## 🧷 4. Event Handling Methods

JavaScript allows you to respond to user actions (like clicks, key presses, etc.) using **event handlers**.

---

### ✅ HTML Attribute Method (Not Recommended)

You can attach an event handler directly in HTML using the `onclick`, `onchange`, etc. attributes.

```html
<button onclick="alert('Clicked!')">Click Me</button>
```

### ✅ Property-Based Method

You can assign a JavaScript function directly to an element’s event property like `onclick`.

```js
const btn = document.querySelector("#myBtn");

btn.onclick = function () {
  console.log("Button clicked using property-based method");
};
```

- Only one function can be assigned to a given event using this method.
  Assigning a new one overwrites the previous handler.

### ✅ `addEventListener()` Method (Recommended)

This is the **most preferred way** to handle events. It allows you to attach **multiple event handlers** to the same element without overwriting existing ones.

```js
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", () => {
  console.log("Clicked with addEventListener");
});

btn.addEventListener("click", () => {
  console.log("Another listener also runs!");
});
```

**✅ Advantages:**

- Allows multiple functions for the same event

- Keeps JavaScript separate from HTML

- Supports removing listeners with removeEventListener()

```js
function handleClick() {
  console.log("Clicked once");
}

btn.addEventListener("click", handleClick);

// To remove later
btn.removeEventListener("click", handleClick);
```

### 🧾 Summary: Event Handling Methods

| Method                 | Syntax Example                                | Notes                                      |
| ---------------------- | --------------------------------------------- | ------------------------------------------ |
| **HTML Attribute**     | `<button onclick="...">`                      | Not recommended; mixes HTML with JS        |
| **Property-Based**     | `element.onclick = function () {}`            | Only one handler at a time                 |
| **addEventListener()** | `element.addEventListener("click", callback)` | Preferred method; allows multiple handlers |

✅ **Recommendation:**
Always use `addEventListener()` for clean, modular, and flexible event handling.

## 🧱 5. Common Event Types

Here are frequently used DOM event types in JavaScript:

- `click` – When an element is clicked
- `keydown` – When a key is pressed down
- `keyup` – When a key is released
- `mouseenter` – When the mouse enters an element
- `mouseleave` – When the mouse leaves an element
- `scroll` – When the user scrolls the document or an element
- `change` – When a form input value changes
- `submit` – When a form is submitted
- `input` – When a user types in an input/textarea field

## 🎯 6. Event Object

When an event occurs, the browser passes a special **event object** to your event handler. This object contains all the details about the triggered event.

---

### 🔑 Useful Properties & Methods of the Event Object

- `event.type` – Returns the type of event (`"click"`, `"keydown"`, etc.)
- `event.key` – Returns the key pressed (for keyboard events)
- `event.target` – Returns the element that triggered the event
- `event.currentTarget` – Returns the element the listener is attached to
- `event.preventDefault()` – Prevents the browser's default behavior
- `event.stopPropagation()` – Prevents event from bubbling to parent elements

### ✅ Event Object in Action (All-in-One Example)

```js
document.addEventListener("keydown", function (event) {
  console.log("Event Type:", event.type); // e.g., "keydown"

  console.log("Key Pressed:", event.key); // e.g., "a", "Enter", "Escape"

  console.log("Target Element:", event.target); // The element where event occurred

  console.log("Current Target:", event.currentTarget); // Element the listener is attached to

  event.preventDefault(); // Prevents default action (useful in forms, links, etc.)

  event.stopPropagation(); // Prevents event from bubbling up (use with caution)
});
```

**🧠 Note:**

- This is a keydown listener on the entire document. Try typing in an input or pressing any key to see how event object properties behave.

### 🧠 Quick Recap: `preventDefault()` vs `stopPropagation()`

- `event.preventDefault()` — Prevents the browser's default behavior (like navigating a link, submitting a form).
  - ✅ Example: Stops a link from navigating to another page.
- `event.stopPropagation()` — Stops the event from bubbling up to parent elements.
  - ✅ Example: Clicking a child element won’t trigger the parent’s event listener.

📌 Use both when you want **full control** over what happens during an event — and who gets to know about it.

## 🧠 classList

### ✅ element.classList

- The `classList` property provides a convenient way to access and modify the **CSS classes** of an HTML element. It returns a **live DOMTokenList**.

**🔧 Common `classList` Methods**

| Method                        | Description                                 |
| ----------------------------- | ------------------------------------------- |
| `add(class)`                  | Adds one or more class names                |
| `remove(class)`               | Removes one or more class names             |
| `toggle(class)`               | Toggles the existence of a class            |
| `contains(class)`             | Returns `true` if the element has the class |
| `replace(oldClass, newClass)` | Replaces an existing class with a new one   |

---

# 🔁 JavaScript Loops

Loops allow you to **run the same block of code repeatedly**, as long as a specified condition is true or over a set of items.

## 🔹 1. `while` Loop

Runs **as long as the condition is true**. Condition is checked **before each iteration**.

```js
let i = 0;

while (i < 5) {
  console.log(i); // 0 1 2 3 4
  i++;
}
```

## 🔹 2. `do...while` Loop

Runs the block **at least once**, then continues **while the condition is true**.

```js
let j = 0;

do {
  console.log(j); // 0 1 2 3 4
  j++;
} while (j < 5);
```

## 🔹 3. `for` Loop

The most common loop with 3 parts: **initialization**, **condition**, and **increment**.

```js
for (let k = 0; k < 5; k++) {
  console.log(k); // 0 1 2 3 4
}
```

## 🔹 4. `for...of` Loop

Used to **iterate over values** of an iterable (like arrays, strings, sets, etc.).

```js
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit); // apple, banana, cherry
}
```

## 🔹 5. `for...in` Loop

Used to **iterate over keys (property names)** in an object.

```js
const user = {
  name: "Alex",
  age: 25,
  isAdmin: true,
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
  // name: Alex
  // age: 25
  // isAdmin: true
}
```

## 🔹 6. Loop Control: `break` and `continue`

### ✅ `break` – exits the loop completely

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0 1 2 3 4
}
```

### ✅ `continue` – skips current iteration and moves to next

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0 1 3 4
}
```

📌 **Tips**:

- Use `for` when you know how many times to loop.
- Use `while` or `do...while` when the number of iterations is unknown.
- Use `for...of` for arrays or iterable values.
- Use `for...in` for object properties.

---

# 🧱 Array Properties and Common Methods

### ✅ `.length`

- Returns the number of elements in the array.

```js
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // 3
```

### ✅ `.push(value)`

- Adds a new element **to the end** of the array.

```js
fruits.push("orange");
console.log(fruits); // ['apple', 'banana', 'cherry', 'orange']
```

### ✅ `.splice(start, deleteCount, ...items)`

- Can **remove, replace, or insert** elements at a specific index.

```js
fruits.splice(1, 1, "grape");
// From index 1, remove 1 element ('banana'), insert 'grape'
console.log(fruits); // ['apple', 'grape', 'cherry', 'orange']
```

### ✅ `.slice(start, end)`

- Returns a **shallow copy** of a portion of the array (does not modify original).
- `end` index is **not included**.

```js
const sliced = fruits.slice(0, 2); // Copy from index 0 to 1
console.log(sliced); // ['apple', 'grape']
```

### ✅ `.forEach()` — Iterating Over Arrays

- Executes a **callback function** for each element in the array.
- Does **not return** a new array (used for **side-effects** like logging or DOM manipulation).
- Does **not support** `break` or `continue` — use `return` inside the callback to skip to next iteration.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  if (num === 3) return; // Skip number 3
  console.log(`Index ${index} → ${num}`);
});
```

**Explanation:**

- `num` is the current item.
- `index` is the index of the current item.
- Using `return` inside the callback skips the current iteration, but `.forEach()` continues.

📌 **Note:** You cannot use `break` or `continue` in `.forEach()` like in loops.

### ✅ `.map()` — Transform Each Element

- Creates a **new array** by applying a callback function to each element.
- Original array remains **unchanged**.

```js
const numbers = [1, 2, 3, 4, 5];

// Multiply each number by 2
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

**Use Cases:**

- Transform data without modifying the original array.
- Commonly used in UI rendering and data formatting.

### ✅ `.filter()` — Filter Out Elements Based on a Condition

- Creates a **new array** containing elements that **pass the test** (return `true` in the callback).
- Original array remains **unchanged**.

```js
const numbers = [1, 2, 3, 4, 5];

// Keep only even numbers
const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // [2, 4]
```

**Use Cases:**

- Filtering based on user input or data rules.
- Removing unwanted or falsy elements from data.

📌 **Note:** Like `.map()`, `.filter()` also returns a **new array**.

---

# Arrow Functions in JavaScript

Arrow functions provide a shorter syntax for writing function expressions. Introduced in ES6.

---

#### 🔹 1. Basic Syntax

```js
// Traditional function
const add = function (a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};
```

---

#### 🔹 2. Implicit Return (One-Liner Arrow Functions)

- If there's only one expression, you can **omit the `return` keyword and curly braces**.

```js
const multiply = (a, b) => a * b;

console.log(multiply(3, 4)); // 12
```

- If the function has only **one parameter**, you can also omit the parentheses:

```js
const square = (n) => n * n;
```

---

#### 🔹 3. Arrow Functions & `this` Keyword

Arrow functions **do not have their own `this`**. They **inherit** `this` from the surrounding scope.

```js
const person = {
  name: "Alex",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, I'm ${this.name}`);
    }, 1000);
  },
};

person.greet(); // ✅ Correctly logs: Hello, I'm Alex
```

If you used a regular function inside `setTimeout()`, `this.name` would be `undefined` because the context would change.

---

#### 🔹 4. No Hoisting

- Arrow functions are **not hoisted** like function declarations.
- You **cannot use them before they are defined**.

```js
sayHi(); // ❌ ReferenceError

const sayHi = () => {
  console.log("Hi!");
};
```

✅ Compare with regular function (hoisted):

```js
sayHello(); // ✅ Works fine

function sayHello() {
  console.log("Hello!");
}
```

---

📌 **Summary Table: Arrow Functions**

| Feature             | Arrow Function               | Regular Function |
| ------------------- | ---------------------------- | ---------------- |
| Short Syntax        | ✅ Yes                       | ❌ No            |
| Has own `this`?     | ❌ No (inherits from parent) | ✅ Yes           |
| Hoisted?            | ❌ No                        | ✅ Yes           |
| Use as constructor? | ❌ No (`new` will fail)      | ✅ Yes           |
| Use for callbacks?  | ✅ Common                    | ✅ Common        |

---

# ⏳ `setTimeout()` – Delay Execution

The `setTimeout()` function is used to **run code after a delay** (once, not repeatedly).

### ✅ Syntax:

```js
setTimeout(callback, delayInMilliseconds);
```

- `callback`: A function to run after the delay.
- `delayInMilliseconds`: Time to wait (in ms) before running the function.

### 🔹 Basic Example

```js
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds
```

- The code after `setTimeout()` continues to run immediately.
- The callback runs asynchronously after the delay.

### 🔹 Passing Arguments to Callback

```js
function greet(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(greet, 1500, "Alex"); // "Hello, Alex" after 1.5s
```

### 🔹 Storing Timeout ID

`setTimeout()` returns a timeout ID, which you can use to cancel it later.

```js
const timeoutId = setTimeout(() => {
  console.log("Will not run");
}, 3000);

clearTimeout(timeoutId); // Cancels the timeout
```

📌 Use `setTimeout()` when you want to:

- Create a delay before showing/hiding UI elements.
- Defer code execution without blocking other operations.
- Simulate loading or animations.

---

# 🔁 `setInterval()` & `clearInterval()` – Repeated Execution

JavaScript’s `setInterval()` allows you to **run a function repeatedly** at fixed intervals. You can cancel it using `clearInterval()`.

### ✅ `setInterval()` Syntax:

```js
setInterval(callback, intervalInMilliseconds);
```

- `callback`: The function to execute repeatedly.
- `intervalInMilliseconds`: Time between each call (in ms).

### 🔹 Example: Print Every 1 Second

```js
setInterval(() => {
  console.log("This prints every second");
}, 1000);
```

### 🔹 Stopping Repetition with `clearInterval()`

Use `clearInterval()` to stop a running interval. You must save the interval ID returned by `setInterval()`.

```js
const intervalId = setInterval(() => {
  console.log("Repeating...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped!");
}, 5000);

// Output:
// Repeating...
// Repeating...
// Repeating...
// Repeating...
// Repeating...
// Stopped!
```

### 🔹 Real-World Use Case

```js
let count = 5;

const countdown = setInterval(() => {
  console.log(`Countdown: ${count}`);
  count--;

  if (count === 0) {
    clearInterval(countdown);
    console.log("Blastoff!");
  }
}, 1000);
```

📌 Use `setInterval()` to:

- Update clocks, countdowns, or animations.
- Periodically fetch data or refresh UI.
- Poll for user activity or background changes.

🛑 Always use `clearInterval()` when repetition is no longer needed to avoid memory leaks or unwanted behavior.

---

# 🔒 Closures in JavaScript

A **closure** is created when a function "remembers" variables from its **outer scope**, even after that outer function has finished executing.

## 🔹 1. Basic Concept

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer() is called once, returns `inner`
counter(); // 1
counter(); // 2
counter(); // 3
```

- Here, `inner()` still has access to `count` even though `outer()` has finished.
- This happens because `inner()` **closes over** the variables in `outer()`.

## 🔹 2. Closures Keep State Private

Closures are often used to create **private variables**.

```js
function secretCounter() {
  let secret = 0;

  return {
    increment() {
      secret++;
      console.log("Secret:", secret);
    },
    getSecret() {
      return secret;
    },
  };
}

const counterObj = secretCounter();
counterObj.increment(); // Secret: 1
counterObj.increment(); // Secret: 2
console.log(counterObj.getSecret()); // 2
```

✅ `secret` is **not directly accessible** from outside — only through returned methods.

## 🔹 3. Closures with Loops – Common Pitfall & Fix

### ❌ Problem (without closure awareness):

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i); // All print 4 after 1s
  }, 1000);
}
```

- Because `var` is function-scoped, all `setTimeout()` callbacks share the same `i`.

### ✅ Solution using Closure (`let` or IIFE):

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i); // 1 2 3
  }, i * 1000);
}
```

or

```js
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j); // 1 2 3
    }, j * 1000);
  })(i);
}
```

## 🔹 4. Real-World Closure Use: Function Factory

Closures help in creating functions with preserved settings.

```js
function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12
```

## 🔹 5. Arrow Functions & Closures

Arrow functions can also form closures.

```js
function outer() {
  let msg = "Hello";

  return () => {
    console.log(msg);
  };
}

const sayHello = outer();
sayHello(); // Hello
```

Arrow functions don’t have their own `this`, but they **can close over variables** like any other function.

## 📌 Summary: When & Why to Use Closures

| Use Case                       | Why Use Closure?                             |
| ------------------------------ | -------------------------------------------- |
| Private variables              | Encapsulation without classes                |
| Function factories             | Customize functions dynamically              |
| Async callbacks (e.g. timers)  | Maintain state across timeouts               |
| Memoization / caching          | Store and reuse previous results internally  |
| Currying / partial application | Return chainable or pre-configured functions |

Closures are a **core part of JS** — understanding them makes async code, React hooks, and many libraries easier to reason about.
