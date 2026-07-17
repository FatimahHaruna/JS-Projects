const Todolist = ['make dinner', 'wash dishes'];

function addtask() {
    const Inputelement = document.querySelector('.Task');
    const Task = Inputelement.value.trim();

    if (Task) {
        Todolist.push(Task);
        Inputelement.value = '';
        rendertodo();
    }
}

function rendertodo() {
    let todolisthtml = '';

    for (let i = 0; i < Todolist.length; i++) {
        const todo = Todolist[i];
        todolisthtml += `<p>${todo}</p>`;
    }

    document.querySelector('.taskinput').innerHTML = todolisthtml;
}

rendertodo();

