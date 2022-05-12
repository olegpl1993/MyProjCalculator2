'use strict'

num1.addEventListener("click", function () {
    inputStr.textContent += num1.textContent;
});
num2.addEventListener("click", function () {
    inputStr.textContent += num2.textContent;
});
num3.addEventListener("click", function () {
    inputStr.textContent += num3.textContent;
});
num4.addEventListener("click", function () {
    inputStr.textContent += num4.textContent;
});
num5.addEventListener("click", function () {
    inputStr.textContent += num5.textContent;
});
num6.addEventListener("click", function () {
    inputStr.textContent += num6.textContent;
});
num7.addEventListener("click", function () {
    inputStr.textContent += num7.textContent;
});
num8.addEventListener("click", function () {
    inputStr.textContent += num8.textContent;
});
num9.addEventListener("click", function () {
    inputStr.textContent += num9.textContent;
});
num0.addEventListener("click", function () {
    inputStr.textContent += num0.textContent;
});
divide.addEventListener("click", function () {
    inputStr.textContent += "/";
});
mult.addEventListener("click", function () {
    inputStr.textContent += "*";
});
minus.addEventListener("click", function () {
    inputStr.textContent += "-";
});
plus.addEventListener("click", function () {
    inputStr.textContent += "+";
});
point.addEventListener("click", function () {
    inputStr.textContent += ".";
});

clear.addEventListener("click", function () {
    inputStr.textContent = "";
});
count.addEventListener("click", function () {
    let string = inputStr.textContent;
    inputStr.textContent = eval(string);
});


