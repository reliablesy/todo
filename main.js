// [X] Toggle
// [X] Remove
// [X] Edit text
// [X] Clean text in input
// [] CheckBox instead button
// [] Persist between loads (Local storage)

function add() {
    const input = document.getElementById(`input-txt`);
    const root = document.getElementById(`todo-txt`);
    const wrapper = document.createElement(`div`);

    const toggle = document.createElement(`input`);
    const clean = document.createElement(`button`);

    const completeText = document.createElement(`span`);
    const todoText = document.createElement(`input`);

    todoText.value = input.value;
    toggle.type = 'checkbox';
    clean.innerHTML = `Удалить`;
    input.value = '';
    completeText.innerText = `Выполнено!`;

    root.appendChild(wrapper);
    wrapper.appendChild(todoText);
    wrapper.appendChild(toggle);
    wrapper.appendChild(clean);

    clean.addEventListener(`click`, function() {
        wrapper.remove();
    });

    function mark() {
        todoText.style.textDecoration = `line-through`;
        completeText.style.display=`block`;
        todoText.before(completeText);
    }

    function unmark() {
        completeText.style.display=`none`;
        todoText.style.textDecoration = `none`;
    }

    let isDone = false;

    toggle.addEventListener('click', () => {
        if (isDone == true) {
            unmark();
        } else {
            mark();
        }
        isDone = !isDone;
    })
}

document.querySelector(`#create`).addEventListener(`click`, add);
