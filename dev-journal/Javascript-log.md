# Rock-Paper-Scissors:

This is a basic Rock-Paper-Scissors game created using only HTML and  simple JavaScript.  
The player clicks a button (Rock, Paper, or Scissors), the computer makes a random choice, and the result is shown using an alert popup.

---

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

console.log(str.toUpperCase());   // "  HELLO, MOHIT!  "
console.log(str.toLowerCase());   // "  hello, mohit!  "
console.log(str.includes("Mohit")); // true
console.log(str.indexOf("Mohit"));  // 9
console.log(str.slice(2, 7));       // "Hello"
console.log(str.trim());            // "Hello, Mohit!"
console.log(str.replace("Mohit", "Friend")); // "  Hello, Friend!  "
console.log(str.split(","));       // ["  Hello", " Mohit!  "]
console.log(str.charAt(2));        // "H"
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
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    result = 'Player Wins';
  }
}
`````
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
    draw: 1
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
    draws: 1
  }
};
```
### ✅ Function Inside Object (Method)

A function stored inside an object is called a **method**.  
It allows the object to perform actions or behaviors.

Example:

```js
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;  // Shorter method syntax
  }
};

console.log(calculator.add(5, 3));      // Output: 8
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
console.log(a == b);  // false
```
- Two objects are only equal if they refer to the same memory reference.

### ✅ Destructuring

- Destructuring lets you unpack values from arrays or properties from objects into distinct variables.  
- Makes your code cleaner and avoids repetitive access like `obj.key` or `arr[0]`.

**Array Destructuring:**
```js
const scores = [80, 90, 100];
const [math, science, english] = scores;

console.log(math);    // 80
console.log(science); // 90
```
**Object Destructuring:**
```js
const user = {
  name: "Mohit",
  age: 20,
  city: "Jaipur"
};

const { name, age } = user;
console.log(name); // "Mohit"
console.log(age);  // 20
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
  age: age
};
```

**With Shorthand:**
```js
const name = "Mohit";
const age = 20;

const user = {
  name,
  age
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
  greet: function() {
    console.log("Hello!");
  }
};
```
**With Shorthand:**
```js
const user = {
  greet() {
    console.log("Hello!");
  }
};
```
**Why it works:**
 - JavaScript treats it as a regular function method, just written in a shorter form.
 - Useful when writing methods inside objects like event handlers, class-like structures, etc.

