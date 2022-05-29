'use strict'

//подсчитывает результат в строке 
function counting() {
    let string = inputStr.textContent;
    inputStr.textContent = eval(string);
}

//переносит результат из основной строки в дополнительную
function transfer() {
    backString.textContent = inputStr.textContent;
}

num1.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) //проверка на длину строки
    {
        inputStr.textContent += "1";
    }
});
num2.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "2";
    }
});
num3.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "3";
    }
});
num4.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "4";
    }
});
num5.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "5";
    }
});
num6.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "6";
    }
});
num7.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "7";
    }
});
num8.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "8";
    }
});
num9.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "9";
    }
});
num0.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "0";
    }
});
divide.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "/";
    }
});
mult.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "*";
    }
});
minus.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "-";
    }
});
plus.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "+";
    }
});
point.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += ".";
    }
});
eraser.addEventListener("click", function () {
    let str = inputStr.textContent;
    let str2 = str.substring(0, str.length - 1); //уменьшает строку на 1 символ
    inputStr.textContent = str2;
});
clear.addEventListener("click", function () {
    inputStr.textContent = "";
    backString.textContent = "";
});
count.addEventListener("click", function () {
    transfer();
    counting();
});
left.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += "(";
    }
});
right.addEventListener("click", function () {
    if (inputStr.textContent.length < 23) {
        inputStr.textContent += ")";
    }
});

changeColorBlack.addEventListener("click", function () {
    //цвет цифровой панели
    document.querySelector(".input__backString").style.backgroundColor = "#303030";
    document.querySelector(".input__strind").style.backgroundColor = "#303030";
    document.querySelector(".input__backString").style.color = "white";
    document.querySelector(".input__strind").style.color = "white";
    //цвет коробки
    document.querySelector(".box").style.borderColor = "white";
    document.querySelector(".box").style.backgroundColor = "#5c5c5c";
    //цвет обертки
    document.querySelector(".wrapper").style.backgroundColor = "black";
    //цвет кнопок
    const butt = document.querySelectorAll(".buttons__butt");
    for (let i = 0; i < butt.length; i++) {
        butt[i].style.color = "white";
        butt[i].style.backgroundColor = "#303030";
        butt[i].style.borderColor = "white";
    }
});

changeColorWhite.addEventListener("click", function () {
    //цвет цифровой панели
    document.querySelector(".input__backString").style.backgroundColor = "#ebebeb";
    document.querySelector(".input__strind").style.backgroundColor = "#ebebeb";
    document.querySelector(".input__backString").style.color = "black";
    document.querySelector(".input__strind").style.color = "black";
    //цвет коробки
    document.querySelector(".box").style.borderColor = "black";
    document.querySelector(".box").style.backgroundColor = "#e4e4e4";
    //цвет обертки
    document.querySelector(".wrapper").style.backgroundColor = "white";
    //цвет кнопок 
    const butt = document.querySelectorAll(".buttons__butt");
    for (let i = 0; i < butt.length; i++) {
        butt[i].style.color = "black";
        butt[i].style.backgroundColor = "#cccccc";
        butt[i].style.borderColor = "black";
    }
});