'use strict'


// Переменные и типы данных
let name = "Anna";
let age = 25;
let isStudent = true;

console.log(name, typeof(name));
console.log(age, typeof(age));
console.log(isStudent, typeof(isStudent));

// Арифметика
let forMeal = 250;
let forTran = 100;

let inWeek = (forMeal+ forTran)*7;
let inMonth = (forMeal+ forTran)*30;

console.log('Пользователь тратит в неделю '+inWeek+" рублей");
console.log('Пользователь тратит в месяц '+inMonth+" рублей");

// Шаблонные строки
console.log("Привет, меня зовут "+name+" , мне "+age+" лет.");

// Логические операторы
age = 17;
if (age >= 18){
    console.log(true);
}
else(console.log(false));