// забираем кнопки в переменные
const addButton = document.querySelector('.add-button'); //кнопка Добавить 

const clearButton = document.querySelector('.clear-button'); //кнопка Очистить

const inputElement = document.querySelector('.input-part__input'); //поле ввода задачи

const outputElement = document.querySelector('.output-part__tasks'); //поле вывода списка задач


// функция добавления задач в массив и их вывода в output-part
let tasks = [];

const showTasks = () => {
const inputValue = inputElement.value;
tasks.push(inputValue);
outputElement.innerHTML += `<p class="output-part__item">${inputValue} <input id="checkbox" type="checkbox"</p>`;
}


//вешаем обработчик событий на кнопку добавить
addButton.addEventListener('click', showTasks );


//функция удаления задач из массива и очищения output-part__tasks и делаем кнопку Очистить неактивной
const clearTasks = () => {
    tasks.splice(0);
    outputElement.innerHTML = `<p class="output-part__item></p>`;
    clearButton.setAttribute('disabled', true);
}

//вешаем обработчик событий на кнопку Очистить
clearButton.addEventListener('click', clearTasks);


