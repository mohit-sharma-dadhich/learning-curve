# 📝 Task Manager App

A simple task manager built using **JavaScript**, **HTML**, and **CSS**. It supports task creation, editing, deleting, marking tasks as complete, storing tasks in `localStorage`, and shows a congratulatory message when all tasks are completed.

---

## 📚 Learning Concepts Covered

### ✅ DOM Manipulation
- `document.createElement()` to dynamically build elements.
- `.appendChild()` and `.removeChild()` for adding/removing elements.
- `.querySelector()` and `.classList` for selecting and styling elements.
- `.addEventListener()` for handling events like `click`, `change`, and `keydown`.

### ✅ Working with `localStorage`
- Storing and retrieving tasks as JSON.
- Updating stored tasks when edited or checked.
- Deleting specific tasks or all tasks from `localStorage`.

### ✅ Event Handling
- `click` for buttons like Create, Edit, Delete.
- `keydown` for "Enter" key handling during task creation.
- `change` for checkbox updates.
- Preventing task creation if input is empty.

### ✅ Conditional UI Rendering
- Showing a **"No Task"** placeholder when no tasks exist.
- Dynamically enabling/disabling buttons.
- Displaying a **"Congrats 🎉"** message only when all tasks are checked.

---

## ⚡ Useful Tricks and Techniques

- **Disabling buttons** until conditions are met (`button.disabled = true`).
- Auto-focusing on input fields to improve UX.
- Avoiding duplicate edit/done/delete buttons with `.contains()`.
- Efficient task rendering using helper function `createStructure()` to reduce repetition.
- Automatically triggering "Create" with **Enter key** (`keydown` event).
- Using `.trim()` to avoid empty input or leading/trailing whitespace.

---

## 💡 Tips for Beginners

- Always check if `localStorage.getItem()` returns `null` before parsing.
- Wrap repeated DOM structure logic into a reusable function.
- Use `hidden` property or `classList.toggle()` to cleanly show/hide elements.
- Structure your app into small, readable functions like `storeTask()`, `editBtn()`, `checkTaskContainer()`.
- Use `flexbox` with `gap`, `justify-content`, and `align-items` for neat button layouts.

---

Happy coding! 🧠🚀
