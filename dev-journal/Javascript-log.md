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
