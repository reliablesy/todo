// [X] Toggle
// [ ] Remove

function add() {
    const input = document.getElementById(`input-txt`);
    const root = document.getElementById(`todo-txt`);

    const toggle = document.createElement(`button`);
    const clean = document.createElement(`button`);

    const completeText = document.createElement(`span`);
    const div = document.createElement(`div`);

    div.innerHTML = input.value;

    toggle.innerHTML = 'Переключить';
    clean.innerHTML = `Удалить`;
    
    completeText.innerText = `Выполнено!`;

    root.appendChild(div);
    root.appendChild(toggle);
    root.appendChild(clean);

    // Убирает все
    function close() {
        div.remove();
        clean.remove();
        toggle.remove();
        completeText.style.display=`none`;
    }

    clean.addEventListener(`click`, close);

    function mark() {
        div.style.textDecoration = `line-through`;
        completeText.style.display=`block`;
        div.before(completeText);
    }

    function unmark() {
        root.appendChild(div);
        completeText.style.display=`none`;
        div.style.textDecoration = `none`;
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
