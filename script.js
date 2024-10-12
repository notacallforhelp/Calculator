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
    "border:1px solid cyan;"+
    "height:75%;"+
    "display:flex;"+
    "flex-direction:column;");

let div = document.createElement("div");
div.setAttribute("style","height:20%;width:100%;display:flex;justify-content:space-evenly;border:3px solid blue;");
div.setAttribute("class","row1");
ctner.appendChild(div);

const row1 = document.querySelector(".row1");

for(let i=0;i<2;i++)
{
    let div = document.createElement("div");
    div.setAttribute("style","height:100%;width:50%;border:2px solid yellow;display:flex;justify-content:space-around;align-items:center;");
    i==0?div.setAttribute("class","special"):div.setAttribute("class","operations");

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

    i==0? button.textContent="AC":button.textContent="C";
    special.appendChild(button);
}

const operations = document.querySelector(".operations");
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

    i==0? button.textContent="+/-":button.textContent=" * ";
    operations.appendChild(button);
}

let div2 = document.createElement("div");
div2.setAttribute("style","height:60%;width:100%;display:flex;justify-content:space-evenly;border:3px solid blue;");
div2.setAttribute("class","row2");
ctner.appendChild(div2);

const row2 = document.querySelector(".row2");

let div3 = document.createElement("div");
div3.setAttribute("style","height:20%;width:100%;display:flex;align-items:center;justify-content:space-evenly;border:3px solid pink;");
div3.setAttribute("class","row3");
ctner.appendChild(div3);

const row3 = document.querySelector(".row3");

for(let i=0;i<2;i++)
{
    let div = document.createElement("div");
    div.setAttribute("style","height:100%;width:50%;border:2px solid yellow;display:flex;justify-content:space-around;align-items:center;");
    i==0?div.setAttribute("class","numbers"):div.setAttribute("class","special2");
    
    row3.appendChild(div);
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

    i==0? button.textContent=" . ":button.textContent=" = ";
    special2.appendChild(button);
}

const numbers = document.querySelector(".numbers");
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

    button.textContent="0";
    numbers.appendChild(button);
}