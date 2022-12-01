"use strict";

const todoListEl = document.getElementById("todoList");
const todoFormEl = document.getElementById("todoForm");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
updateTodos();

function updateTodos() {
    //storage
    localStorage.setItem("todos", JSON.stringify(todos));

    todoListEl.innerHTML = "";
    //render
    for (let todo of todos) {
        const liEl = document.createElement("li");
        liEl.innerHTML = todo;
        console.log(todo + " here");
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "x";

        removeButton.onclick = function () {
            const index = todos.indexOf(todo);
            todos.splice(index, 1);

            updateTodos();
        };

        liEl.append(removeButton);
        todoListEl.append(liEl);
    }
}

todoFormEl.onsubmit = function (event) {
    event.preventDefault();

    const input = todoFormEl.elements.todo;
    todos.push(input.value);
    //clear the form
    input.value = "";
    updateTodos();
};