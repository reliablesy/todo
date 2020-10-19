function add() {

    const input = document.getElementById(`input-txt`);
    const root = document.getElementById(`todo-txt`);

    const buttonCheck = document.createElement(`button`);
    const buttonClose = document.createElement(`button`);
    const finished = document.createElement(`span`);
    const div = document.createElement(`div`);

    buttonCheck.className = `buttonCheck`;
    buttonClose.className = `buttonClose`;
    finished.className = `finishedText`;

    div.innerHTML = input.value;

    buttonCheck.innerHTML = `Прочитано`;
    buttonClose.innerHTML = `Закрыть`;
    finished.innerText = `Выполнено!`;



    root.appendChild(div);
    root.appendChild(buttonCheck);
    root.appendChild(buttonClose);

    buttonClose.addEventListener(`click`, function close() {
        div.remove();
        buttonClose.remove();
        buttonCheck.remove();
    });

    buttonCheck.addEventListener(`click`, function check() {
       div.style.textDecoration = `line-through`;
       div.after(finished);
       buttonClose.remove();
       buttonCheck.remove();
    });
}

document.querySelector(`#create`).addEventListener(`click`, add);
