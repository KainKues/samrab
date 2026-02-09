"use strict"


function Basic(){
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
}

// Оценка знаний
function getScore(){
    let score = prompt("Поставьте оценку от 1 до 5");
    if (score > 5 || score < 1){
        alert("Оценка выпадает из диапазона");
    }
    else if (score == 5){
            alert('Отлично');
        }
    else if (score == 4){
            alert('Хорошо');
        }
    else if (score == 5){
            alert('Отлично');
    }
    else{
        alert("Попробуй снова");
    }
}    

// Проверка пароля
function logIn(){
    let password = "js2025";
    let input = prompt('Введите пароль');
    password == input ? alert("Доступ разрешен") : alert("Ошибка входа");
}    

// Тернарный оператор
function saleTrue(){
    let isStudent = true;
    isStudent == true? alert('Скидка активирована'): alert('Без скидки');
}

// Счётчик чисел
function getAllNum(){
    for (let i = 0; i <= 10; i++){
        console.log(i)
    }
}

// Сумма чисел
function getSum(){
    let sum = 0;
    for (let i = 1; i<=100; i++){
        sum = sum + i;
    }
    console.log(sum);
}

// Таблица умножения на 5
function getTable5(){
    const x = 5;
    for (let i = 1; i<=10; i++){
        console.log(x+" × "+i+" = "+x*i);
        }
}

// Поиск чётных чисел
function getEven(){
    for (let i = 2; i<=20; i++){
        if (i % 2 == 0)
            console.log(i)
        }
}

// Простая функция

function greeting(){
    let name = prompt("Введите имя");
    function sayHello(){
        
        alert("Привет, "+ name +"!");
    }
    sayHello(name);
}

// Сумма чисел
function getSumofAB(){
    let a = Number(prompt('Введите число a'));
    let b = Number(prompt('Введите число b'));
    function getSumAB(a,b){; 
        console.log(a + b);
    }
    getSumAB(a,b)
}  

// Проверка возраста
function ageCheck(){
    let age = Number(prompt('Введите возраст'));
    function  canDrive(){
        if (age >= 18)
            alert(true);
        else(
            alert(false)
        );
    }
    canDrive(age);
}

// Калькулятор

function calculatorFunction(){
    let a = Number(prompt('Введите A'));
    let operator = prompt("Введите оператор ( +, -, *, /)");
    let b = Number(prompt('Введите B'));
    function calc(a, b, operator){
        if (operator == "-"){
            alert(a - b);
        }
        if (operator == "+"){
            alert(a + b);
        }
        if (operator == "*"){
            alert(a * b);
        }
        if (operator == "/"){
            alert26
            -
            (a / b);
        }
    }
    calc(a, b, operator)
}


function arrayMovie(){
    // Создание массива
    let movies = ["Аватар","В поисках Немо", "Светлячки в саду", "Последний рыцарь", "Месть от кутюр"];
    console.log(movies)
    console.log( "Первый фильм- " + movies[0]);
    console.log("Последний фильм - " + movies[movies.length-1]);
    // Добавление элементов
    movies.push(prompt('Введите название фильма'));
    console.log(movies);
}

// Перебор массива
function arrayNames(){
    let names = ['Анна', 'Светлана', 'Максим', 'Георгий', 'Денис'];
    names.forEach( name => {
        console.log("Привет, " + name + "!")
    });
}

// Числовой массив
function arrayEven(){
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums.forEach( num => {
        if (num % 2 == 0)
            console.log(num);
    }
    )
}

// Среднее значение
function getArithmeticMean(){
    let array  = [10, 20, 30, 40, 50];
    console.log(array);
    let sum = array.reduce((acc, val)=>{
        return acc + val;
    })
    console.log("среднее арифметическое = " + sum / array.length);
}    

//  Сумма положительных чисел
function getSumEven(){
    let array = [-2, 3, -1, 5, 10, -6];
    let sum = 0
    array.forEach( num => {
        if (num >= 0)
                sum = sum + num;
    })
    console.log(sum)
}

// Подсчёт слов длиннее 4 символов
function wodsLonger4(){
    let array = ["дом", "машина", "окно", "река", "компьютер"];
    console.log(array);
    let  arrayLonger4= array.filter((element)=>{return element.length > 4});
    console.log( "Слов длинне 4 символов - " + arrayLonger4.length);
}

// Функция с массивом
function arrayfunction(){
    let array = [];
    let n = Number(prompt("Введите количество элементов"));
    for (let i = 1; i <= n; i++){
        array.push(Number(prompt('Введите число')));
    }
    console.log(array)

    function getMax(array){
    let max = 0;
    array.forEach(element => {
        if (element > max){
            return max = element;} 
    })
    console.log('Максимальный элемент - ' + max);
    }
    getMax(array);
}

// Комбинированное задание
function scoreCheck(){
    array = [];
    array.push(Number(prompt('Введите число от 1 до 5')));
    array.push(Number(prompt('Введите число от 1 до 5')));
    array.push(Number(prompt('Введите число от 1 до 5')));
    console.log(array);

    let sum = array.reduce((acc, val)=>{
            return acc + val;
        })
    check = sum / array.length;    
    console.log("среднее арифметическое = " + check);
    if (check >= 4){
        console.log('Молодец!');
    } 
    else (console.log('Подтянись!'));
}