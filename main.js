// [] Toggle
// [] Remove

function add() {
    const input = document.getElementById(`input-txt`);
    const root = document.getElementById(`todo-txt`);

    const toggle = document.createElement(`button`);

    const buttonClose = document.createElement(`button`);
    const finished = document.createElement(`span`);
    const div = document.createElement(`div`);

    div.innerHTML = input.value;

    toggle.innerHTML = 'Переключить';

    buttonClose.innerHTML = `Закрыть`;
    finished.innerText = `Выполнено!`;

    const finishAll = document.createElement(`button`);
    finishAll.innerHTML = `Удалить выполненное задание`;

    root.appendChild(div);
    root.appendChild(toggle);
    root.appendChild(buttonClose);

    // Убирает все
    function close() {
        div.remove();
        buttonClose.remove();
        finishAll.remove();
        finished.style.display=`none`;
    }

    buttonClose.addEventListener(`click`, close);

    function mark() {
        div.style.textDecoration = `line-through`;
        finished.style.display=`block`;

        div.before(finished);
        div.after(finishAll);
        buttonClose.remove();

        finishAll.addEventListener(`click`, function deleteFinishTask() {
            div.remove();
            buttonClose.remove();
            toggle.remove();
            finished.remove();
            finishAll.remove();
        });
    }

    function unmark() {
        root.appendChild(div);
        root.appendChild(buttonClose);
        finishAll.remove();
        finished.style.display=`none`;
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
