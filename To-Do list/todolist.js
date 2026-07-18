const Todolist = [
    {
        name: 'make dinner',
        due: '2026-7-22'
    },
    {
        name: 'wash dishes',
        due:'2026-7-19'
    }];

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
        //const name = todo.name;
        //const due = todo.due;
        const {name, due} = todo;
        todolisthtml += 
            `<p>
                ${name} ${due} 
                <button onclick='Todolist.splice(${i},1); rendertodo()'>Delete</button>
            </p>`;
    }

    document.querySelector('.taskinput').innerHTML = todolisthtml;
}

rendertodo();

