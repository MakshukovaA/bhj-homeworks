document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const list = document.getElementById('tasks__list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    function addTask(text) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'task__title';
        titleDiv.textContent = text;

        const removeLink = document.createElement('a');
        removeLink.href = '#';
        removeLink.className = 'task__remove';
        removeLink.innerHTML = '&times;';

        removeLink.addEventListener('click', (e) => {
            e.preventDefault();
            taskDiv.remove();
        });

        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(removeLink);

        list.appendChild(taskDiv);
    }
});