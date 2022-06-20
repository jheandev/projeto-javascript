
const inputElement = document.querySelector(".new-task-input");
const addTasKButton = document.querySelector(".new-task-button");

const tasKsContainer = document.querySelector(".tasks-container")


const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();



    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    const tasKItemContainer = document.createElement("div");   /*criando uma div*/
    tasKItemContainer.classList.add("task-item");    /*add classe da DIV*/

    const tasKContent = document.createElement("p");  /*paragrafo que vai dentro da DIV*/
    tasKContent.innerText = inputElement.value;

    tasKContent.addEventListener("click", () => handleClick(tasKContent));

    const deleteItem = document.createElement("i");    /*criando elemento o icone*/
    deleteItem.innerText = 'x'

    deleteItem.addEventListener("click", () =>
        handleDeleteClick(tasKItemContainer, tasKContent)
    );


    tasKItemContainer.appendChild(tasKContent); /*criando a estrutura div*/
    tasKItemContainer.appendChild(deleteItem);  /*criando estrutura div*/



    tasKsContainer.appendChild(tasKItemContainer); /*colocando a div dentro da teskitemcontainer*/

    inputElement.value = "";

};

const handleClick = (tasKContent) => {
    const tasks = tasKsContainer.childNodes;

    for (const task of tasks) {
        const currentTasKIsBeingClicKed = task.firstChild.isSameNode(tasKContent);

        if (currentTasKIsBeingClicKed) {
            task.firstChild.classList.toggle("completed");
        }
    }

};
const handleDeleteClick = (tasKItemContainer, tasKContent) => {
    const tasks = tasKsContainer.childNodes;

    for (const task of tasks) {
        const currentTasKIsBeingClicKed = task.firstChild.isSameNode(tasKContent)

        if (currentTasKIsBeingClicKed) {
            tasKItemContainer.remove();
        }
    }
}


const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");

    }

};


addTasKButton.addEventListener("click", () => handleAddTask());

inputElement, addEventListener("change", () => handleInputChange());




