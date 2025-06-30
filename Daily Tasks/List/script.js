function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const btnContainer = document.createElement("div");
  btnContainer.className = "buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.className = "complete-btn";
  completeBtn.setAttribute("aria-label", "Mark task as complete");
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

// Optional: Add Enter key support
document.getElementById("taskInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
