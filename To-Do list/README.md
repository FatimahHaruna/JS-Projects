# To-Do List

This is a small browser-based to-do list made with plain HTML, CSS, and JavaScript. It lets a user add tasks, optionally assign due dates, and remove tasks when they are finished.

## Features

- Add a task with an optional due date.
- Submit with the **Add task** button or the Enter key.
- Delete individual tasks.
- Show a helpful empty-list message after all tasks are deleted.
- Escape task text before rendering it into the page.
- Responsive layout for smaller screens.

## Files

- `todolist.html` contains the page structure, form, and task list container.
- `todolist.css` contains the layout, colors, controls, and mobile styles.
- `todolist.js` stores tasks and controls adding, rendering, and deleting them.

## How It Works

Tasks are stored in the `Todolist` array. Each task is an object with this shape:

```js
{
    name: 'make dinner',
    due: '2026-07-22'
}
```

When the form is submitted, `addtask()` reads both inputs and adds a new object to the array. It then calls `rendertodo()`, which rebuilds the visible list. Each Delete button calls `deleteTask()` with the task's array index.

The current list exists only in memory, so refreshing the page restores the two sample tasks. To keep tasks after a refresh, the array can later be connected to `localStorage` or a backend database.

## Run It

Open `todolist.html` directly in a browser. No package installation or build step is required.

For local development, a VS Code extension such as Live Server can also serve the folder and automatically reload the page when files change.