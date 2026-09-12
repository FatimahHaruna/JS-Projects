const Todolist = [
    {
        name: 'make dinner',
        due: '2026-07-22'
    },
    {
        name: 'wash dishes',
        due:'2026-07-19'
    }];

function addtask() {
    const Inputelement = document.querySelector('.Task');
    const dueDateInput = document.querySelector('.duedate');
    const taskName = Inputelement.value.trim();

    if (taskName) {
        Todolist.push({
            name: taskName,
            due: dueDateInput.value
        });
        Inputelement.value = '';
        dueDateInput.value = '';
        rendertodo();
    }
}

function rendertodo() {
    const taskList = document.querySelector('.taskinput');

    if (Todolist.length === 0) {
        taskList.innerHTML = '<p class="empty-state">No tasks yet.</p>';
        return;
    }

    let todolisthtml = '';

    for (let i = 0; i < Todolist.length; i++) {
        const todo = Todolist[i];
        const {name, due} = todo;
        const taskName = escapeHtml(name);
        const dueText = due ? `Due ${escapeHtml(due)}` : 'No due date';
        todolisthtml += 
            `<p class="task">
                <span>${taskName}</span>
                <span class="due-date">${dueText}</span>
                <button type="button" onclick="deleteTask(${i})">Delete</button>
            </p>`;
    }

    taskList.innerHTML = todolisthtml;
}

function deleteTask(index) {
    Todolist.splice(index, 1);
    rendertodo();
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

rendertodo();

