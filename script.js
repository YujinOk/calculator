"strict";

const equalbtn = document.querySelector("#equals");
const additionBtn = document.getElementById("addition");
const subtractionBtn = document.getElementById("subtraction");
const multiplicationBtn = document.querySelector("#multiply");
const divisionBtn = document.querySelector("#division");
const resetBtn = document.querySelector(".button--lg");
const button = document.querySelectorAll("button");
const turnoffBtn = document.querySelector("#turnoffBtn");
const turnonBtn = document.querySelector("#turnonBtn");

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

let currentOperation = "";
let currentValue = "";
let storedValue = 0;

// 1. find a way to loop all the buttons
// Click => display the number into screen
button.forEach((btn) => {
    if (
        btn === additionBtn ||
        btn === multiplicationBtn ||
        btn === divisionBtn ||
        btn === subtractionBtn
    ) {
        btn.addEventListener("click", (event) => {
            document.querySelector("p").innerText = "";
            storedValue = currentValue;
            currentValue = "";

            if (btn === additionBtn) {
                currentOperation = "+";
            } else if (btn === multiplicationBtn) {
                currentOperation = "*";
            } else if (btn === divisionBtn) {
                currentOperation = "/";
            } else if (btn === subtractionBtn) {
                currentOperation = "-";
            }
        });
    } else if (btn === equalbtn) {
        btn.addEventListener("click", (event) => {
            if (currentOperation === "+") {
                addition(storedValue, currentValue);
                document.querySelector("p").innerText = addition(
                    storedValue,
                    currentValue,
                );
            } else if (currentOperation === "-") {
                subtraction(storedValue, currentValue);
                document.querySelector("p").innerText = subtraction(
                    storedValue,
                    currentValue,
                );
            } else if (currentOperation === "*") {
                multiplication(storedValue, currentValue);
                document.querySelector("p").innerText = multiplication(
                    storedValue,
                    currentValue,
                );
            } else if (currentOperation === "/") {
                division(storedValue, currentValue);
                document.querySelector("p").innerText = division(
                    storedValue,
                    currentValue,
                );
            }
            currentValue = 0;
            storedValue = 0;
        });
    } else if (btn === resetBtn) {
        btn.addEventListener("click", (event) => {
            document.querySelector("p").innerText = "";
            storedValue = 0;
            currentValue = "";
        });
    } else if (btn === turnoffBtn) {
        btn.addEventListener("click", (event) => {
            document.querySelector("p").style.backgroundColor = "black";
        });
    } else if (btn === turnonBtn) {
        btn.addEventListener("click", (event) => {
            currentValue = "";
            storedValue = 0;
            document.querySelector("p").innerText = "";
            document.querySelector("p").style.backgroundColor =
                "rgb(248, 215, 248)";
        });
    } else {
        btn.addEventListener("click", (event) => {
            currentValue = currentValue + btn.innerText;
            document.querySelector("p").innerText = currentValue;
        });
    }
});

// 2. Addition. Need find a way for the computer to recognise the number, and store the number clicked
// 2 values if([i]!==="" && operator sign){
// addtion function to the values (numbers need to be stored      before disappearing)
// need to return the sum of values
// }

// After you turn it on, you can put in any amount of numbers
// When you press any operator, those numbers are stored
// Then, the screen clears, and you can type in more numbers
//Those numbers are the second value
// Then after you press the = button, the result of the operator on the two values is displayed on the screen

// grab the numbers on screen, store in variable
// clear the screen text, allow more numbers to be entered
// then after = is presssed, store current numbers in second variable
// use stored variables and apply operator on them
//Return tresult of that operation on screen

// for (let i = 0; i < button.length; i++)

// if (document.getElementsByTagName("button")) {

// button = document.getElementsByTagName("button");
// button.innerHTML =

// additionBtn.getElementById("addition").addEventListener("click", () => {});

// for (let i = 0; i > button.length; i++) {
//     console.log(`button[i] I am clicked!`);
// }
