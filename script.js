const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const title = document.getElementById("titleInput").value.trim();
    const desc = document.getElementById("descInput").value.trim();

    if (!title) return alert("Please enter a task title.");

    createTask(title, desc);

    document.getElementById("titleInput").value = "";
    document.getElementById("descInput").value = "";
});

function createTask(title, desc) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const titleEl = document.createElement("div");
    titleEl.className = "task-title";
    titleEl.textContent = title;

    const descEl = document.createElement("div");
    descEl.className = "task-desc";
    descEl.textContent = desc;

    const btnBox = document.createElement("div");
    btnBox.className = "task-btns";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark as Completed";
    completeBtn.className = "complete-btn";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Complete Task
    completeBtn.addEventListener("click", () => {
        taskDiv.classList.toggle("completed");

        if (taskDiv.classList.contains("completed")) {
            completeBtn.textContent = "Mark as Incomplete";
        } else {
            completeBtn.textContent = "Mark as Completed";
        }
    });

    // Delete Task
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskDiv);
    });

    // Edit Task
    editBtn.addEventListener("click", () => {
        if (editBtn.textContent === "Edit") {
            const titleInput = document.createElement("input");
            titleInput.value = titleEl.textContent;
            titleInput.className = "input";

            const descInput = document.createElement("textarea");
            descInput.value = descEl.textContent;
            descInput.className = "textarea";

            taskDiv.replaceChild(titleInput, titleEl);
            taskDiv.replaceChild(descInput, descEl);

            titleEl = titleInput;
            descEl = descInput;

            editBtn.textContent = "Save";
        } else {
            const updatedTitle = titleEl.value;
            const updatedDesc = descEl.value;

            const titleP = document.createElement("div");
            titleP.textContent = updatedTitle;
            titleP.className = "task-title";

            const descP = document.createElement("div");
            descP.textContent = updatedDesc;
            descP.className = "task-desc";

            taskDiv.replaceChild(titleP, titleEl);
            taskDiv.replaceChild(descP, descEl);

            titleEl = titleP;
            descEl = descP;

            editBtn.textContent = "Edit";
        }
    });

    btnBox.appendChild(completeBtn);
    btnBox.appendChild(editBtn);
    btnBox.appendChild(deleteBtn);

    taskDiv.appendChild(titleEl);
    taskDiv.appendChild(descEl);
    taskDiv.appendChild(btnBox);

    taskList.appendChild(taskDiv);
}
