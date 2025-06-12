let add_task_btn = document.querySelector(".add-task");
let taskContainer = document.querySelector(".task_container");
let noTask = document.createElement("p");
noTask.innerText = "Add a task to get started.";
noTask.classList.add("no-task");
checkTaskContainer();

add_task_btn.addEventListener("click", () => {
  add_task();
  checkTaskContainer();
});

function add_task() {
  checkTaskContainer();

  let new_task = document.createElement("div");

  new_task.classList.add("task");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  let input_el = document.createElement("input");
  input_el.classList.add("text-area");
  input_el.placeholder = "Enter your task here...";
  let createBtn = document.createElement("button");
  createBtn.innerText = "Create";
  createBtn.classList.add("btn");
  let discardBtn = document.createElement("button");
  discardBtn.innerText = "Discard";
  discardBtn.classList.add("btn");

  createBtn.addEventListener("click", () => {
    if (input_el.value.trim() === "") {
      alert("Please , Write content in the task!");
    } else {
      created(new_task, createBtn, discardBtn, input_el, checkbox);
    }
  });

  discardBtn.addEventListener("click", () => {
    taskContainer.removeChild(new_task);

    add_task_btn.disabled = false;
    checkTaskContainer();
  });

  new_task.appendChild(checkbox);
  taskContainer.appendChild(new_task);
  new_task.appendChild(input_el);
  new_task.appendChild(createBtn);
  new_task.appendChild(discardBtn);
  input_el.focus();

  add_task_btn.disabled = true;
}

function created(new_task, createBtn, discardBtn, input_el, checkbox) {
  createBtn.hidden = true;
  discardBtn.hidden = true;
  input_el.disabled = true;
  checkbox.disabled = false;
  let edit = document.createElement("button");
  edit.classList.add("btn");
  edit.innerText = "Edit";

  edit.addEventListener("click", () => {
    editBtn(input_el, new_task, edit, checkbox);

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
  });
}

function editBtn(input_el, new_task, edit, checkbox) {
  input_el.disabled = false;
  checkbox.disabled = true;
  let doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.classList.add("btn");
  let dltTaskBtn = document.createElement("button");
  dltTaskBtn.innerText = "Delete Task";
  dltTaskBtn.classList.add("btn");

  doneBtn.addEventListener("click", () => {
    input_el.disabled = true;
    checkbox.disabled = false;
    doneBtn.hidden = true;
    dltTaskBtn.hidden = true;
    edit.hidden = false;

    add_task_btn.disabled = false;
  });
  edit.hidden = true;

  dltTaskBtn.addEventListener("click", () => {
    taskContainer.removeChild(new_task);
    checkTaskContainer();

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

  if (taskElements.length === 0) {
    if (!taskContainer.contains(noTask)) {
      taskContainer.append(noTask);
    }
    noTask.hidden = false;
  } else {
    noTask.hidden = true;
  }
}
