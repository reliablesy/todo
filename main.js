function add() {

    const input = document.getElementById(`input-txt`);
    const root = document.getElementById(`todo-txt`);

    const buttonCheck = document.createElement(`button`);
    const buttonClose = document.createElement(`button`);
    const finished = document.createElement(`span`);
    const div = document.createElement(`div`);
    const missclick = document.createElement(`button`);

    missclick.className = `btn btn-outline-primary`;

    buttonCheck.className = `btn btn-success`;
    buttonCheck.style.margin = `0 5px 0 5px`;

    buttonClose.className = `btn btn-danger`;
    buttonClose.style.margin = `0 5px 0 5px`;

    finished.className = `finishedText`;

    div.className = `input-style`;

    div.innerHTML = input.value;

    buttonCheck.innerHTML = `Прочитано`;
    buttonClose.innerHTML = `Закрыть`;
    finished.innerText = `Выполнено!`;
    missclick.innerHTML = `Возвратить`;

    const finishAll = document.createElement(`button`);
    finishAll.className = `btn btn-outline-dark`;
    finishAll.innerHTML = `Удалить выполненное задание`;

    root.appendChild(div);
    root.appendChild(buttonCheck);
    root.appendChild(buttonClose);

    function close() {
        div.remove();
        buttonClose.remove();
        buttonCheck.remove();
        finishAll.remove();
        finished.style.display=`none`;
    }

    function check() {
        div.style.textDecoration = `line-through`;
        div.before(finished);
        buttonClose.remove();
        buttonCheck.remove();
        div.after(missclick);
        finished.style.display=`block`;


        div.after(finishAll);
        finishAll.addEventListener(`click`, function deleteFinishTask() {
            div.remove();
            buttonClose.remove();
            buttonCheck.remove();
            finished.style.display=`none`;
            finishAll.remove();
            missclick.remove();
        });

    }

    buttonClose.addEventListener(`click`, close);

    buttonCheck.addEventListener(`click`, check);

    missclick.addEventListener(`click`, function miss() {
        root.appendChild(div);
        root.appendChild(buttonCheck);
        root.appendChild(buttonClose);
        missclick.remove();
        finishAll.remove();
        finished.style.display=`none`;
        div.style.textDecoration = `none`;

    });
}
document.querySelector(`#create`).addEventListener(`click`, add);
