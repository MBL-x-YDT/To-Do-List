const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const task = inputBox.value.trim();

    if (task === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = task;

        let span = document.createElement("span");
        span.textContent = "\u00d7"; // Unicode for '×'
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = ""; // Clear the input box after adding the task
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
