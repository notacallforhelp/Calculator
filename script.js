function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

const ctner = document.querySelector("#ctner");

ctner.setAttribute("style",
    "height:75%;"+
    "display:flex;"+
    "flex-direction:column;");
for(let i=1;i<=5;i++)
{
    let div = document.createElement("div");
    div.setAttribute("style","height:20%;width:100%;display:flex;justify-content:space-evenly;align-items:center;");
    div.setAttribute("class",`row${i}`);
    ctner.appendChild(div);
}

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");
const row5 = document.querySelector(".row5");


//row 1
for(let i=0;i<2;i++)
{
    let div = document.createElement("div");
    div.setAttribute("style","height:100%;width:50%;display:flex;justify-content:space-around;align-items:center;");
    i==0?div.setAttribute("class","special"):div.setAttribute("class","operationsdiv");

    row1.appendChild(div);
}

const special = document.querySelector(".special");
for(let i=0;i<2;i++)
{
    let button = document.createElement("button");
    button.setAttribute("style",
        "background-color:#cd3300;"+
        "padding:32px;"+
        "height:50px;"+
        "border-radius:8px;"+
        "color:white;"+
        "font-weight:bolder;"+
        "text-align:center;"+
        "line-height:10%;");
    
    if(i==0)
    {
        button.setAttribute("class","AC");
    }
    else{
        button.setAttribute("class","C");
    }

    i==0? button.textContent="AC":button.textContent="C";
    special.appendChild(button);
}

const operationsdiv = document.querySelector(".operationsdiv");
for(let i=0;i<2;i++)
{
    let button = document.createElement("button");
    button.setAttribute("style",
        "background-color:#ffa53f;"+
        "padding:32px;"+
        "height:50px;"+
        "border-radius:8px;"+
        "color:white;"+
        "font-weight:bolder;"+
        "text-align:center;"+
        "line-height:10%;");
    
    button.setAttribute("class","operations");

    i==0? button.textContent="+/-":button.textContent="*";
    operationsdiv.appendChild(button);
}

//row 2

for(let i=7;i<=10;i++)
{
    let button = document.createElement("button");
    if(i!=10)
    {
        button.setAttribute("style",
            "background-color:#3049b3;"+
            "padding:32px;"+
            "height:50px;"+
            "margin:12px;"+
            "border-radius:8px;"+
            "color:white;"+
            "font-weight:bolder;"+
            "text-align:center;"+
            "line-height:10%;");
        
        button.setAttribute("class","numbers");
    }
    else
    {
        button.setAttribute("style",
            "background-color:#ffa53f;"+
            "padding:32px;"+
            "height:50px;"+
            "border-radius:8px;"+
            "color:white;"+
            "font-weight:bolder;"+
            "text-align:center;"+
            "line-height:10%;");
        
        button.setAttribute("class","operations");
    }

    i==10? button.textContent="/":button.textContent=`${i}`;
    row2.appendChild(button);
}

//row 3

for(let i=4;i<=7;i++)
{
    let button = document.createElement("button");
    if(i!=7)
    {
        button.setAttribute("style",
            "background-color:#3049b3;"+
            "padding:32px;"+
            "height:50px;"+
            "margin:12px;"+
            "border-radius:8px;"+
            "color:white;"+
            "font-weight:bolder;"+
            "text-align:center;"+
            "line-height:10%;");
        
        button.setAttribute("class","numbers");
    }
    else
    {
        button.setAttribute("style",
            "background-color:#ffa53f;"+
            "padding:32px;"+
            "height:50px;"+
            "border-radius:8px;"+
            "color:white;"+
            "font-weight:bolder;"+
            "text-align:center;"+
            "line-height:10%;");
        
        button.setAttribute("class","operations");
    }

    i==7? button.textContent="+":button.textContent=`${i}`;
    row3.appendChild(button);
}

// row 4

for(let i=1;i<=4;i++)
{
    let button = document.createElement("button");
    if(i!=4)
    {
        button.setAttribute("style",
            "background-color:#3049b3;"+
            "padding:32px;"+
            "height:50px;"+
            "margin:12px;"+
            "border-radius:8px;"+
            "color:white;"+
            "font-weight:bolder;"+
            "text-align:center;"+
            "line-height:10%;");
        
        button.setAttribute("class","numbers");
    }
    else
    {
        button.setAttribute("style",
            "background-color:#ffa53f;"+
            "padding:32px;"+
            "height:50px;"+
            "border-radius:8px;"+
            "color:white;"+
            "font-weight:bolder;"+
            "text-align:center;"+
            "line-height:10%;");
        
        button.setAttribute("class","operations");
    }

    i==4? button.textContent="-":button.textContent=`${i}`;
    row4.appendChild(button);
}

//row 5
for(let i=0;i<2;i++)
{
    let div = document.createElement("div");
    div.setAttribute("style","height:100%;width:50%;display:flex;justify-content:space-around;align-items:center;");
    i==0?div.setAttribute("class","zerodiv"):div.setAttribute("class","special2");
    
    row5.appendChild(div);
}

const special2 = document.querySelector(".special2");
for(let i=0;i<2;i++)
{
    let button = document.createElement("button");
    button.setAttribute("style",
        "background-color:#338525;"+
        "padding:32px;"+
        "height:50px;"+
        "border-radius:8px;"+
        "color:white;"+
        "font-weight:bolder;"+
        "text-align:center;"+
        "line-height:10%;");
    if(i==1)
    {
        button.setAttribute("class","equals");
    }
    else{
        button.setAttribute("class","decimal");
    }

    i==0? button.textContent=" . ":button.textContent=" = ";
    special2.appendChild(button);
}

const zerodiv = document.querySelector(".zerodiv");
for(let i=0;i<1;i++)
{
    let button = document.createElement("button");
    button.setAttribute("style",
        "background-color:#3049b3;"+
        "padding:32px;"+
        "height:50px;"+
        "width:200px;"+
        "border-radius:8px;"+
        "color:white;"+
        "font-weight:bolder;"+
        "text-align:center;"+
        "line-height:10%;");
    
    button.setAttribute("class","numbers");

    button.textContent="0";
    zerodiv.appendChild(button);
}

//creating variables for number1, operator, number2

let number1;
let operator;
let number2;

function operate(number1,operator,number2)
{
    switch(operator)
    {
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
        case '*':
            return number1*number2;
        case '/':
            return number1/number2;
    }   
}

// display part

const display = document.querySelector("#display");
let accumulator = 99;
display.textContent=accumulator;


// adding AC and C functionality

special.addEventListener('click',(event)=>{
    let target = event.target;

    if(target.className=='AC')
    {
        display.textContent="";
        accumulator=0;
    }

    if(target.className=='C')
    {
        let currentstring = display.textContent;
        let currentStringArray = currentstring.split('');
        currentStringArray.splice(currentStringArray.length-1,1);
        display.textContent = currentStringArray.join('');
        accumulator = Math.floor(accumulator/10);
    }
});


//adding functionality for all numbers

ctner.addEventListener('click',(event)=>{
    let target = event.target;
    if(target.className=='numbers')
    {
        let numberHere = +target.textContent;
        accumulator = accumulator*10 + numberHere;
        display.textContent += numberHere;
    }

    if(target.className=='operations')
    {
        number1 = accumulator;
        accumulator=0;
        operator = target.textContent;
        display.textContent += target.textContent;
    }

    if(target.className=='equals')
    {
        number2 = accumulator;
        accumulator = operate(number1,operator,number2);
        display.textContent=accumulator;
    }
});


