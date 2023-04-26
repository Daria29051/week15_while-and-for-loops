//переменные
const item = document.querySelector('.item'); //поле ввода числа
const itemDigits = document.querySelector('.item-digits'); //число разбитое на цифры
const itemDigitsNumber = document.querySelector('.item-digits-num'); //кол-во цифр в числе
const itemDigitsSum = document.querySelector('.item-digits-sum'); //сумма цифр числа
const itemReverse = document.querySelector('.item-reverse'); //Обратный порядок цифр в числе
const button = document.querySelector('.button'); //кнопка

//функция
const divideToDigits =() => {
// разбиваем число на цифры
const digits = item.value.toString().split('');
const realDigits = digits.map(Number);
itemDigits.textContent = realDigits;

//кол-во цифр в числе
itemDigitsNumber.textContent = realDigits.length;

// ищем сумму элементов
let sum = 0;
for (let i = 0; i < realDigits.length; i++) {
    sum += realDigits[i]; 
}
itemDigitsSum.textContent = sum;

//обратный порядок чисел в числе
const revertedItem = digits.reverse().join('');
itemReverse.textContent = revertedItem;
}

// вешаем обработчик событий на кнопку
button.addEventListener('click', divideToDigits);

