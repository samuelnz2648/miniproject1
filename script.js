document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const todoTemplate = document.getElementById("todo-template");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the input value
    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    // Create a clone of the template
    const todoClone = todoTemplate.content.cloneNode(true);
    const todoTextElement = todoClone.querySelector(".todo-text");
    const editInputElement = todoClone.querySelector(".edit-input");
    const editButton = todoClone.querySelector(".edit-btn");
    const deleteButton = todoClone.querySelector(".delete-btn");
    const saveButton = todoClone.querySelector(".save-btn");
    const cancelButton = todoClone.querySelector(".cancel-btn");

    todoTextElement.textContent = todoText;
    editInputElement.value = todoText;

    // Add delete functionality to the delete button
    deleteButton.addEventListener("click", () => {
      deleteButton.closest(".todo-card").remove();
    });

    // Add edit functionality to the edit button
    editButton.addEventListener("click", () => {
      todoTextElement.style.display = "none";
      editInputElement.style.display = "block";
      editButton.style.display = "none";
      deleteButton.style.display = "none";
      saveButton.style.display = "inline";
      cancelButton.style.display = "inline";
    });

    // Add save functionality to the save button
    saveButton.addEventListener("click", () => {
      const newText = editInputElement.value.trim();
      if (newText !== "") {
        todoTextElement.textContent = newText;
        todoTextElement.style.display = "block";
        editInputElement.style.display = "none";
        editButton.style.display = "inline";
        deleteButton.style.display = "inline";
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
      }
    });

    // Add cancel functionality to the cancel button
    cancelButton.addEventListener("click", () => {
      todoTextElement.style.display = "block";
      editInputElement.style.display = "none";
      editButton.style.display = "inline";
      deleteButton.style.display = "inline";
      saveButton.style.display = "none";
      cancelButton.style.display = "none";
      editInputElement.value = todoTextElement.textContent;
    });

    // Append the new todo item to the list
    todoList.appendChild(todoClone);

    // Clear the input
    todoInput.value = "";
  });
});
