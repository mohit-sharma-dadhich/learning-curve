let add_task_btn = document.querySelector(".add-task");
let taskContainer = document.querySelector(".task_container");
let deleteAllBtn = document.querySelector(".delete-all");

let noTask = document.querySelector(".no-task");
getPreviousTask();
checkTaskContainer();
deleteAllBtn.addEventListener("click", () => {
  localStorage.removeItem("tasks");
  taskContainer.innerHTML = "";
  checkTaskContainer();
});

add_task_btn.addEventListener("click", () => {
  add_task();
  checkTaskContainer();
});

function add_task() {
  checkTaskContainer();
  let components = createStructure();
  let new_task = components.new_task;
  let createBtn = components.createBtn;
  let discardBtn = components.discardBtn;
  let input_el = components.input_el;
  let checkbox = components.checkbox;
  let warning = components.warning;
  let inputWrapper = components.inputWrapper;

  createBtn.addEventListener("click", () => {
    if (input_el.value.trim() === "") {
      warning.hidden = false;
      input_el.focus();
    } else {
      created(new_task, createBtn, discardBtn, input_el, checkbox, warning);
      warning.hidden = true;
      storeTask(input_el, checkbox);
    }
  });

  discardBtn.addEventListener("click", () => {
    taskContainer.removeChild(new_task);
    deleteTaskFromStorage(input_el.value.trim());
    add_task_btn.disabled = false;
    checkTaskContainer();
  });

  input_el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input_el.value.trim() !== "") {
      createBtn.click();
    }
  });

  inputWrapper.appendChild(input_el);
  inputWrapper.appendChild(warning);
  new_task.appendChild(checkbox);
  taskContainer.appendChild(new_task);
  new_task.appendChild(inputWrapper);
  new_task.appendChild(createBtn);
  new_task.appendChild(discardBtn);
  input_el.focus();

  add_task_btn.disabled = true;
}

function created(new_task, createBtn, discardBtn, input_el, checkbox, warning) {
  createBtn.hidden = true;
  discardBtn.hidden = true;
  input_el.disabled = true;
  checkbox.disabled = false;
  let edit = document.createElement("button");
  edit.classList.add("btn");
  edit.innerText = "Edit";

  edit.addEventListener("click", () => {
    editBtn(input_el, new_task, edit, checkbox, warning);

    add_task_btn.disabled = true;
  });

  if (!new_task.contains(edit)) {
    new_task.appendChild(edit);
  }

  add_task_btn.disabled = false;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      edit.hidden = true;
    } else {
      edit.hidden = false;
    }
    updateStoredTask(input_el.value.trim(), checkbox.checked);
    checkTaskContainer();
  });
}

function editBtn(input_el, new_task, edit, checkbox, warning) {
  input_el.disabled = false;
  checkbox.disabled = true;
  let doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.classList.add("btn");
  let dltTaskBtn = document.createElement("button");
  dltTaskBtn.innerText = "Delete Task";
  dltTaskBtn.classList.add("btn");

  doneBtn.addEventListener("click", () => {
    if (input_el.value.trim() === "") {
      warning.hidden = false;
      input_el.focus();
    } else {
      input_el.disabled = true;
      checkbox.disabled = false;
      doneBtn.hidden = true;
      dltTaskBtn.hidden = true;
      edit.hidden = false;

      add_task_btn.disabled = false;
      warning.hidden = true;
    }
  });
  edit.hidden = true;

  dltTaskBtn.addEventListener("click", () => {
    taskContainer.removeChild(new_task);
    checkTaskContainer();
    deleteTaskFromStorage(input_el.value.trim());
    add_task_btn.disabled = false;
  });

  if (!new_task.contains(doneBtn)) {
    new_task.appendChild(doneBtn);
  }
  if (!new_task.contains(dltTaskBtn)) {
    new_task.appendChild(dltTaskBtn);
  }
}

function checkTaskContainer() {
  const taskElements = taskContainer.querySelectorAll(".task");
  const congratsMsg = document.querySelector(".congrats");

  if (taskElements.length === 0) {
    if (!taskContainer.contains(noTask)) {
      taskContainer.append(noTask);
    }
    noTask.hidden = false;
    congratsMsg.hidden = true;
    return;
  }

  noTask.hidden = true;

  const allChecked = Array.from(taskElements).every((task) => {
    const checkbox = task.querySelector("input[type='checkbox']");
    return checkbox?.checked;
  });

  congratsMsg.hidden = !allChecked;
}

function storeTask(input_el, checkbox) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({
    text: input_el.value.trim(),
    completed: checkbox.checked,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getPreviousTask() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  savedTasks.forEach(({ text, completed }) => {
    let structure = createStructure();
    let new_task = structure.new_task;
    let createBtn = structure.createBtn;
    let discardBtn = structure.discardBtn;
    let input_el = structure.input_el;
    let checkbox = structure.checkbox;
    let warning = structure.warning;
    let inputWrapper = structure.inputWrapper;

    input_el.value = text;
    checkbox.checked = completed;

    inputWrapper.appendChild(input_el);
    inputWrapper.appendChild(warning);
    new_task.appendChild(checkbox);
    taskContainer.appendChild(new_task);
    new_task.appendChild(inputWrapper);
    created(new_task, createBtn, discardBtn, input_el, checkbox, warning);
  });

  checkTaskContainer();
}

function createStructure() {
  let new_task = document.createElement("div");

  new_task.classList.add("task");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("check-box");
  checkbox.disabled = true;
  let input_el = document.createElement("input");
  input_el.classList.add("text-area");
  input_el.placeholder = "Enter your task here...";
  let createBtn = document.createElement("button");
  createBtn.innerText = "Create";
  createBtn.classList.add("btn");
  let discardBtn = document.createElement("button");
  discardBtn.innerText = "Discard";
  discardBtn.classList.add("btn");
  let inputWrapper = document.createElement("div");
  let warning = document.createElement("p");
  warning.innerText = "Please enter a task before creating.";
  warning.hidden = true;

  inputWrapper.classList.add("input-wrapper");
  warning.classList.add("warning-text");

  return {
    new_task,
    checkbox,
    input_el,
    createBtn,
    discardBtn,
    warning,
    inputWrapper,
  };
}

function updateStoredTask(text, completed) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.map((task) =>
    task.text === text ? { ...task, completed } : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function deleteTaskFromStorage(text) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.text !== text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
