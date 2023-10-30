const inputtdl = document.querySelector('.textarea');
const buttontdl = document.querySelector('.buttoninput');
const listtdl = document.querySelector('.todolist');

function clickButton(e) {
    e.preventDefault();
    addTodo();
}

// Adding todoList
function addTodo() {
    const itemall = document.createElement('div');
    itemall.classList.add('itemall');

    const item = document.createElement('p');
    item.classList.add('item');
    item.innerText = inputtdl.value;
    itemall.appendChild(item);

    if (inputtdl.value === '') return;

    const checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add("check-button");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashbutton.classList.add("trash-button");
    itemall.appendChild(trashbutton);

    listtdl.appendChild(itemall);
    inputtdl.value = '';
}

// Checking and delete todoList
function okdel(e) {
    const item = e.target;

    // Check
    if (item.classList.contains('check-button')) {
        const todolist = item.parentElement;
        todolist.classList.toggle('checklist');
        item.parentElement.querySelector('.item').style.color = 'green'; // Change text color to green
        displayMessage('Congrats! Your Task is completed');
    }

    // Delete
    if (item.classList.contains('trash-button')) {
        const todolist = item.parentElement;
        todolist.remove();
        displayMessage('Task is Removed');
    }
}


// Display a message
function displayMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.innerText = message;
    listtdl.appendChild(messageDiv);

    // Remove the message after 2 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 2000);
}

buttontdl.addEventListener('click', clickButton);
listtdl.addEventListener('click', okdel);
