"use strict";
let addition = (num1, num2) => {
    const sum = Number(num1) + Number(num2);
    return sum.toFixed(2);
};

let subtraction = (num1, num2) => {
    const sum = Number(num1) - Number(num2);
    return sum.toFixed(2);
};

let multiplication = (num1, num2) => {
    const sum = Number(num1) * Number(num2);
    return sum.toFixed(2);
};

let division = (num1, num2) => {
    const sum = Number(num1) / Number(num2);
    return sum.toFixed(2);
};

export { addition, subtraction, multiplication, division };
