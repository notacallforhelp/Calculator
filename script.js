const ctner = document.querySelector("#ctner");

ctner.setAttribute(
  "style",
  "height:75%;" + "display:flex;" + "flex-direction:column;"
);

//5 rows of calculator buttons creation

for (let i = 1; i <= 5; i++) {
  let div = document.createElement("div");
  div.setAttribute(
    "style",
    "height:20%;width:100%;display:flex;justify-content:space-evenly;align-items:center;"
  );
  div.setAttribute("class", `row${i}`);
  ctner.appendChild(div);
}

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");
const row5 = document.querySelector(".row5");

//row 1
// special - AC and C
// operationsdiv - +/- and *

for (let i = 0; i < 2; i++) {
  let div = document.createElement("div");
  div.setAttribute(
    "style",
    "height:100%;width:50%;display:flex;justify-content:space-around;align-items:center;"
  );
  i == 0
    ? div.setAttribute("class", "special")
    : div.setAttribute("class", "operationsdiv");

  row1.appendChild(div);
}

//creating AC and C

const special = document.querySelector(".special");
for (let i = 0; i < 2; i++) {
  let button = document.createElement("button");
  button.setAttribute(
    "style",
    "background-color:#cd3300;" +
      "padding:32px;" +
      "height:50px;" +
      "border-radius:8px;" +
      "color:white;" +
      "font-weight:bolder;" +
      "text-align:center;" +
      "line-height:10%;"
  );

  if (i == 0) {
    button.setAttribute("class", "AC");
  } else {
    button.setAttribute("class", "C");
  }

  i == 0 ? (button.textContent = "AC") : (button.textContent = "C");
  special.appendChild(button);
}

//creating +/- and *

const operationsdiv = document.querySelector(".operationsdiv");
for (let i = 0; i < 2; i++) {
  let button = document.createElement("button");
  button.setAttribute(
    "style",
    "background-color:#ffa53f;" +
      "padding:32px;" +
      "height:50px;" +
      "border-radius:8px;" +
      "color:white;" +
      "font-weight:bolder;" +
      "text-align:center;" +
      "line-height:10%;"
  );
  if (i == 1) {
    button.setAttribute("class", "operations");
  } else {
    button.setAttribute("class", "plusminus");
  }

  i == 0 ? (button.textContent = "+/-") : (button.textContent = "*");
  operationsdiv.appendChild(button);
}

//row 2 - 7, 8, 9, / buttons

for (let i = 7; i <= 10; i++) {
  let button = document.createElement("button");

  // buttons 7, 8 , 9
  if (i != 10) {
    button.setAttribute(
      "style",
      "background-color:#3049b3;" +
        "padding:32px;" +
        "height:50px;" +
        "margin:12px;" +
        "border-radius:8px;" +
        "color:white;" +
        "font-weight:bolder;" +
        "text-align:center;" +
        "line-height:10%;"
    );

    button.setAttribute("class", "numbers");
  } else {
    //button /

    button.setAttribute(
      "style",
      "background-color:#ffa53f;" +
        "padding:32px;" +
        "height:50px;" +
        "border-radius:8px;" +
        "color:white;" +
        "font-weight:bolder;" +
        "text-align:center;" +
        "line-height:10%;"
    );

    button.setAttribute("class", "operations");
  }

  i == 10 ? (button.textContent = "/") : (button.textContent = `${i}`);
  row2.appendChild(button);
}

//row 3 - 4, 5, 6, + buttons

for (let i = 4; i <= 7; i++) {
  let button = document.createElement("button");
  //button - 4,5,6
  if (i != 7) {
    button.setAttribute(
      "style",
      "background-color:#3049b3;" +
        "padding:32px;" +
        "height:50px;" +
        "margin:12px;" +
        "border-radius:8px;" +
        "color:white;" +
        "font-weight:bolder;" +
        "text-align:center;" +
        "line-height:10%;"
    );

    button.setAttribute("class", "numbers");
  } else {
    //button -, +
    button.setAttribute(
      "style",
      "background-color:#ffa53f;" +
        "padding:32px;" +
        "height:50px;" +
        "border-radius:8px;" +
        "color:white;" +
        "font-weight:bolder;" +
        "text-align:center;" +
        "line-height:10%;"
    );

    button.setAttribute("class", "operations");
  }

  i == 7 ? (button.textContent = "+") : (button.textContent = `${i}`);
  row3.appendChild(button);
}

// row 4 - buttons 1, 2, 3, -

for (let i = 1; i <= 4; i++) {
  let button = document.createElement("button");

  //buttons - 1 , 2, 3
  if (i != 4) {
    button.setAttribute(
      "style",
      "background-color:#3049b3;" +
        "padding:32px;" +
        "height:50px;" +
        "margin:12px;" +
        "border-radius:8px;" +
        "color:white;" +
        "font-weight:bolder;" +
        "text-align:center;" +
        "line-height:10%;"
    );

    button.setAttribute("class", "numbers");
  } else {
    //button -
    button.setAttribute(
      "style",
      "background-color:#ffa53f;" +
        "padding:32px;" +
        "height:50px;" +
        "border-radius:8px;" +
        "color:white;" +
        "font-weight:bolder;" +
        "text-align:center;" +
        "line-height:10%;"
    );

    button.setAttribute("class", "operations");
  }

  i == 4 ? (button.textContent = "-") : (button.textContent = `${i}`);
  row4.appendChild(button);
}

//row 5 - zerodiv (0 button) and special2 (. , = buttons)
for (let i = 0; i < 2; i++) {
  let div = document.createElement("div");
  div.setAttribute(
    "style",
    "height:100%;width:50%;display:flex;justify-content:space-around;align-items:center;"
  );
  i == 0
    ? div.setAttribute("class", "zerodiv")
    : div.setAttribute("class", "special2");

  row5.appendChild(div);
}

// . and = buttons
const special2 = document.querySelector(".special2");
for (let i = 0; i < 2; i++) {
  let button = document.createElement("button");
  button.setAttribute(
    "style",
    "background-color:#338525;" +
      "padding:32px;" +
      "height:50px;" +
      "border-radius:8px;" +
      "color:white;" +
      "font-weight:bolder;" +
      "text-align:center;" +
      "line-height:10%;"
  );
  if (i == 1) {
    button.setAttribute("class", "equals");
  } else {
    button.setAttribute("class", "decimal");
  }

  i == 0 ? (button.textContent = " . ") : (button.textContent = " = ");
  special2.appendChild(button);
}

// button 0
const zerodiv = document.querySelector(".zerodiv");
for (let i = 0; i < 1; i++) {
  let button = document.createElement("button");
  button.setAttribute(
    "style",
    "background-color:#3049b3;" +
      "padding:32px;" +
      "height:50px;" +
      "width:200px;" +
      "border-radius:8px;" +
      "color:white;" +
      "font-weight:bolder;" +
      "text-align:center;" +
      "line-height:10%;"
  );

  button.setAttribute("class", "numbers");

  button.textContent = "0";
  zerodiv.appendChild(button);
}

//LOGIC OF CALCULATOR
//creating variables for number1, operator, number2

let number1;
let operator;
let number2;

// toFixed(2) is used to fix results upto 2 floating places and Number is coerced by multiplying with a 1
function operate(number1, operator, number2) {
  switch (operator) {
    case "+":
      return 1 * (number1 + number2).toFixed(2);
      break;
    case "-":
      return 1 * (number1 - number2).toFixed(2);
      break;
    case "*":
      return 1 * (number1 * number2).toFixed(2);
      break;
    case "/":
      if (number2 == 0) {
        return "Error";
      }
      return 1 * (number1 / number2).toFixed(2);
      break;
  }
}

// display part

const display = document.querySelector("#display"); //the string on screen
let accumulator; //the actual mathematical number counterpart of display
let decipart; //all the entered numbers so far, 205.49 is 20549 here, needed for mathematical logic
display.textContent = accumulator;
let check = false; //operations button used check, prevents invalid cases
let decicheck = false; //decimal number or not check, needed for mathematical logic switching
let multiplier = 1; // (n+1) value for n numbers after .
let equalscheck = false; //eqyals button used or not checl
const decimal = document.querySelector(".decimal"); //used to handle the colour and usability of decimal button

// adding AC and C functionality

special.addEventListener("click", (event) => {
  let target = event.target;

  if (target.className == "AC") {
    //clears everything, resets every variable

    display.textContent = "";
    accumulator = 0;
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    check = false;
    decicheck = false;
    multiplier = 1;
    decipart = 0;
    decimal.style.backgroundColor = "#338525";
  }

  if (target.className == "C") {
    if (decicheck == true) {
      let currentstring = display.textContent;
      let currentStringArray = currentstring.split("");
      currentStringArray.splice(currentStringArray.length - 1, 1); //removes the last character of the string
      display.textContent = currentStringArray.join("");
      --multiplier; //reducing the digit multiplier by 1
      //console.log(multiplier);
      //accumulator = accumulator.toFixed(multiplier-1);
      let placeholder = Math.abs(accumulator);
      placeholder = placeholder * 10 ** multiplier;
      placeholder = Math.floor(placeholder / 10);
      decipart = placeholder;
      placeholder = placeholder / 10 ** (multiplier - 1);
      if (accumulator < 0) {
        accumulator = -1 * placeholder;
      } else {
        accumulator = placeholder;
      }
      if (multiplier == 1) {
        decicheck = false;
        decimal.style.backgroundColor = "#338525";
        decipart = accumulator;
        let currentstring = display.textContent;
        let currentStringArray = currentstring.split("");
        currentStringArray.splice(currentStringArray.length - 1, 1);
        display.textContent = currentStringArray.join("");
      }
    } else {
      //removes the last char first from display string
      //mathematically remove the last digit
      //mathematically adjust according to whether to whether or not the number was -ve or +ve
      //placeholder variable needed because of how floor works with negative, so working with abs(-ve) is easier

      let currentstring = display.textContent;
      let currentStringArray = currentstring.split("");
      currentStringArray.splice(currentStringArray.length - 1, 1);
      display.textContent = currentStringArray.join("");
      let placeholder = Math.abs(accumulator); //accumulator = -678, placeholder = 678
      placeholder = Math.floor(placeholder / 10); //placeholder = Math.floor(67.8) = 67
      if (accumulator < 0) {
        accumulator = -1 * placeholder; //accumulator = -67
      } else {
        accumulator = placeholder; //normal positive numbers case
      }
    }
  }
});

//adding functionality for all numbers

ctner.addEventListener("click", (event) => {
  let target = event.target;

  //logic for +/- button
  if (target.className == "plusminus") {
    display.textContent = -accumulator;
    accumulator = -accumulator;
  }

  //logic for . button, if decicheck is true cant used . button
  if (target.className == "decimal" && decicheck == false) {
    display.textContent += ".";
    decicheck = true;
    decimal.style.backgroundColor = "gray";
  }

  //logic for all numbers
  if (target.className == "numbers") {
    let numberHere = +target.textContent; //unary + converts string to number
    if (accumulator == undefined) {
      accumulator = 0; //to handle potentially unwated behaviour
    }
    if (decicheck == false) {
      //no decimal case
      if (accumulator < 0) {
        numberHere = -1 * numberHere; //negative number case
      }
      accumulator = accumulator * 10 + numberHere; //increases a digit e.g if the number 531 and 4 typed, 5314 at this stage
      decipart = accumulator;
      display.textContent = accumulator;
    } else {
      //decimal number case
      let placeholder = Math.abs(accumulator); //absolute value easier to work with mathematically

      //functionality for repeated operations
      if (
        (Math.floor(placeholder) == placeholder && decicheck == false) ||
        equalscheck == true
      ) {
        decipart = placeholder;
        equalscheck = false;
      }

      decipart = decipart * 10 + numberHere; //decipart = 2054, numberHere = 9, then decipart = 2054*10+9 = 20549
      placeholder = decipart / 10 ** multiplier; //20549/10^2 = 205.49
      ++multiplier; //multiplier would go from 2 to 3
      if (accumulator < 0) {
        accumulator = -1 * placeholder; //negative number case
      } else {
        accumulator = placeholder; //normal case
      }
      if (numberHere == 0) {
        display.textContent += "0"; //for 0 mathematically the accumulator would be 205.4 but i want 205.40 on screen, so this case comes up
      } else {
        display.textContent = accumulator;
      }
    }
  }

  if (target.className == "operations") {
    // + , -, *, / , +/- clicked

    decicheck = false; //reset for number2
    multiplier = 1; //reset for number2
    decipart = 0; //reset for number2
    decimal.style.backgroundColor = "#338525"; //decimal button green for number 2
    if (check == true) {
      //repeated operations
      number1 = operate(number1, operator, accumulator);
      display.textContent = number1;

      //division by 0 case, operate returns Error to number1
      if (number1 == "Error") {
        number1 = 0;
      }
    } else {
      check = true;
      number1 = accumulator;
    }

    accumulator = undefined; //reset
    operator = target.textContent;
    display.textContent += target.textContent; //adding the operator button on screen
  }

  if (target.className == "equals") {
    check = false; //operators can be used
    number2 = accumulator;
    if (number1 != undefined && number2 != undefined && operator != undefined) {
      accumulator = operate(number1, operator, number2);

      if (accumulator == Math.floor(accumulator)) {
        //no decimal number in result
        equalscheck = true;
        decicheck = false;
        decipart = 0;
        multiplier = 1;
        decimal.style.backgroundColor = "#338525";
      } else if (accumulator != Math.floor(accumulator)) {
        //decimal number in result
        decicheck = true;
        decipart = accumulator;
        if (accumulator * 10 == Math.floor(accumulator * 10)) {
          multiplier = 2; // only one number after decimal point
        } else {
          multiplier = 3; // two numbers after decimal point
        }
        decipart = Math.abs(accumulator * 10 ** (multiplier - 1)); //to get the raw number for mathematical functionality
        decimal.style.backgroundColor = "gray"; //since decimal already exists, cant use the button again
      }
      operator = undefined; //reset
      display.textContent = accumulator;
      if (accumulator == "Error") {
        //division by 0 case
        check = false;
        accumulator = 0;
        decicheck = false;
        multiplier = 1;
        number1 = 0;
        number2 = 0;
        operator = undefined;
      }
    }
  }
});

//adding keyboard support

const body = document.querySelector("body");

//keydowm used for keyboard support
body.addEventListener("keydown", (event) => {
  if (
    //these keys were triggering some weird behaviour, so im doing prevent default
    event.key == "+" ||
    event.key == "9" ||
    event.key == "0" ||
    event.key == "Enter" ||
    event.key == "/"
  ) {
    event.preventDefault();
  }
  let pressedvar = event.key; //gets the button being pressed
  //console.log(event);

  switch (pressedvar) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      pressedvar = 1; //for all numbers
      break;
    case "+":
    case "-":
    case "/":
    case "*":
      pressedvar = 2; //for operators
      break;
    case "=":
    case "Enter":
      pressedvar = 3; //for equals
      break;
    case "x":
    case "Delete": //adding support for AC
      pressedvar = 4;
      break;
    case "c": //adding support for C
    case "Backspace":
      pressedvar = 5;
      break;
    case ".":
      pressedvar = 6;
      break;
    case "!":
      pressedvar = 7;
      break;
  }
  if (pressedvar == 1) {
    //number 0-9  pressed
    let numberHere = +event.key; //convert to number
    if (accumulator == undefined) {
      accumulator = 0; //reset
    }
    if (decicheck == false) {
      // normal numbers
      if (accumulator < 0) {
        numberHere = -1 * numberHere; //negative numbers
      }
      accumulator = accumulator * 10 + numberHere;
      decipart = accumulator;
      display.textContent = accumulator;
    } else {
      //decimal numbers
      let placeholder = Math.abs(accumulator);
      if (
        (Math.floor(placeholder) == placeholder && decicheck == false) ||
        equalscheck == true
      ) {
        decipart = placeholder;
        equalscheck = false;
      }
      decipart = decipart * 10 + numberHere;
      placeholder = decipart / 10 ** multiplier;
      ++multiplier;
      if (accumulator < 0) {
        accumulator = -1 * placeholder;
      } else {
        accumulator = placeholder;
      }
      if (numberHere == 0) {
        display.textContent += "0";
      } else {
        display.textContent = accumulator;
      }
    }
  } else if (pressedvar == 2) {
    //operators pressed +,-,/,*
    decicheck = false;
    multiplier = 1;
    decipart = 0;
    decimal.style.backgroundColor = "#338525";
    if (check == true) {
      number1 = operate(number1, operator, accumulator);
      display.textContent = number1;
      if (number1 == "Error") {
        number1 = 0;
      }
    } else {
      check = true;
      number1 = accumulator;
    }
    accumulator = undefined;
    operator = event.key;
    display.textContent += event.key;
  } else if (pressedvar == 3) {
    // equals pressed
    check = false;
    number2 = accumulator;
    if (number1 != undefined && number2 != undefined && operator != undefined) {
      accumulator = operate(number1, operator, number2);
      display.textContent = accumulator;
      operator = undefined;
      if (accumulator == Math.floor(accumulator)) {
        equalscheck = true;
        decicheck = false;
        decipart = 0;
        multiplier = 1;
        decimal.style.backgroundColor = "#338525";
      } else if (accumulator != Math.floor(accumulator)) {
        decicheck = true;
        decipart = accumulator;
        if (accumulator * 10 == Math.floor(accumulator * 10)) {
          multiplier = 2;
        } else {
          multiplier = 3;
        }
        decipart = Math.abs(accumulator * 10 ** (multiplier - 1));
        decimal.style.backgroundColor = "gray";
      }
      if (accumulator == "Error") {
        check = false;
        accumulator = 0;
        decicheck = false;
        multiplier = 1;
        number1 = 0;
        number2 = 0;
        operator = undefined;
      }
    }
  } else if (pressedvar == 4) {
    //x or delete pressed for AC
    display.textContent = "";
    accumulator = 0;
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    check = false;
    decicheck = false;
    multiplier = 1;
    decipart = 0;
    decimal.style.backgroundColor = "#338525";
  } else if (pressedvar == 5) {
    //C functionality with c or Backspace
    if (decicheck == true) {
      let currentstring = display.textContent;
      let currentStringArray = currentstring.split("");
      currentStringArray.splice(currentStringArray.length - 1, 1);
      display.textContent = currentStringArray.join("");
      --multiplier;
      //console.log(multiplier);
      //accumulator = accumulator.toFixed(multiplier-1);
      let placeholder = Math.abs(accumulator);
      placeholder = placeholder * 10 ** multiplier;
      placeholder = Math.floor(placeholder / 10);
      decipart = placeholder;
      placeholder = placeholder / 10 ** (multiplier - 1);
      if (accumulator < 0) {
        accumulator = -1 * placeholder;
      } else {
        accumulator = placeholder;
      }
      if (multiplier == 1) {
        decicheck = false;
        decimal.style.backgroundColor = "#338525";
        decipart = accumulator;
        let currentstring = display.textContent;
        let currentStringArray = currentstring.split("");
        currentStringArray.splice(currentStringArray.length - 1, 1);
        display.textContent = currentStringArray.join("");
      }
    } else {
      let currentstring = display.textContent;
      let currentStringArray = currentstring.split("");
      currentStringArray.splice(currentStringArray.length - 1, 1);
      display.textContent = currentStringArray.join("");
      let placeholder = Math.abs(accumulator);
      placeholder = Math.floor(placeholder / 10);
      if (accumulator < 0) {
        accumulator = -1 * placeholder;
      } else {
        accumulator = placeholder;
      }
    }
  } else if (pressedvar == 6 && decicheck == false) {
    //decimal button pressed .
    display.textContent += ".";
    decicheck = true;
    decimal.style.backgroundColor = "gray";
  } else if (pressedvar == 7) {
    //+/- functionality with ! button
    display.textContent = -accumulator;
    accumulator = -accumulator;
  }
});
