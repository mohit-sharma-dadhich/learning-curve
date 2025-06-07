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
