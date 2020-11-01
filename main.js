//selectors
var textInput = document.getElementById("todo-input");
var addButton = document.getElementById("todo-button");
var todoList = document.querySelector(".todo-list")

//event listener 
addButton.addEventListener("click", adding);
todoList.addEventListener("click", deleting);
todoList.addEventListener("click", mark);



//functions
function adding(event) {
    event.preventDefault();
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    //create li
    var todoLi = document.createElement("li");
    todoLi.innerText = textInput.value;
    textInput.value = ""
    todoLi.classList.add("todo-item");
    todoDiv.appendChild(todoLi)

    //create button
    //finish button
    var finishButton = document.createElement('button');
    finishButton.classList.add('finish-item')
    finishButton.innerHTML = '<i class="fas fa-check-square"></i>'
    todoDiv.appendChild(finishButton);
    //delete button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-item");
    deleteButton.innerHTML = '<i class="fas fa-minus-square"></i>'

    //adding delete to div
    todoDiv.appendChild(deleteButton)
    todoList.appendChild(todoDiv);
}
//deleting items using delete button
function deleting(e) {
    var item = e.target;
    console.log(item)
    if (item.classList[0] === "delete-item") {
        item.parentElement.remove();

    }
}

function mark(event) {
    var item = event.target;
    if (item.classList[0] === "finish-item") {
        console.log("passed")
        console.log(item.previousSibling)
        var z = item.previousSibling;
        z.setAttribute("id", "checked")

        // var z = item.previousSibling;
        // z.style.color = "green";
        // z.style.textDecoration = "line-through";

    }
}
