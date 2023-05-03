// забираем кнопки в переменные
const addButton = document.querySelector('.add-button'); //кнопка Добавить 

const clearButton = document.querySelector('.clear-button'); //кнопка Очистить

const inputElement = document.querySelector('.input-part__input'); //поле ввода задачи

const outputElementTasks = document.querySelector('.output-part__tasks'); //поле вывода списка задач

const outputElementNoTasks = document.querySelector('.output-part__no-tasks'); //поле вывода "Нет задач"

// функция добавления задач в массив и их вывода в output-part
let tasks = [];
clearButton.setAttribute('disabled', true);

const showTasks = () => {
const inputValue = inputElement.value;
if(inputValue !=='') {
tasks.push(inputValue);
outputElementNoTasks.innerHTML = '';
outputElementTasks.innerHTML += `<label class="output-part__item-filled">${inputValue} <input id="checkbox" type="checkbox"> <span class="checkmark"></span></label> 
`;
if(tasks.length !==0) {
    clearButton.removeAttribute('disabled', true);
}
}
}


//функция очистки поля ввода после нажатия на кнопку Добавить
const clearInput = () => {
    inputElement.value =''; 
}

//вешаем обработчик событий на кнопку добавить
addButton.addEventListener('click', showTasks);
addButton.addEventListener('click', clearInput);


//функция удаления задач из массива и очищения output-part__tasks и делаем кнопку Очистить неактивной
const clearTasks = () => {
    if (tasks.length !==0) {
    tasks.splice(0);
    outputElementNoTasks.innerHTML = `<p class="output-part__item-cleared">Нет задач</p>`;
    outputElementTasks.innerHTML = '';
    clearButton.setAttribute('disabled', true);
}
}


//вешаем обработчик событий на кнопку Очистить
clearButton.addEventListener('click', clearTasks);


