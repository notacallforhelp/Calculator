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
    if(i==1)
    {
        button.setAttribute("class","operations");
    }
    else{
        button.setAttribute("class","plusminus");
    }

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
            return 1*((number1 + number2).toFixed(2));
            break;
        case '-':
            return 1*((number1 - number2).toFixed(2));
            break;
        case '*':
            return 1*((number1*number2).toFixed(2));
            break;
        case '/':
            if(number2==0)
            {
                return "kys";
            }
            return 1*((number1/number2).toFixed(2));
            break;
    }   
}

// display part

const display = document.querySelector("#display");
let accumulator;
let decipart;
display.textContent=accumulator;
let check=false;
let decicheck=false;
let multiplier=1;
const decimal = document.querySelector(".decimal");

// adding AC and C functionality

special.addEventListener('click',(event)=>{
    let target = event.target;

    if(target.className=='AC')
    {
        display.textContent="";
        accumulator=0;
        number1=undefined;
        number2=undefined;
        operator=undefined;
        check=false;
        decicheck=false;
        multiplier=1;
        decipart=0;
        decimal.style.backgroundColor = '#338525';
    }

    if(target.className=='C')
    {
        if(decicheck==true)
        {
            let currentstring = display.textContent;
            let currentStringArray = currentstring.split('');
            currentStringArray.splice(currentStringArray.length-1,1);
            display.textContent = currentStringArray.join('');
            --multiplier;
            //console.log(multiplier);
            //accumulator = accumulator.toFixed(multiplier-1);
            let placeholder = Math.abs(accumulator);
            placeholder=placeholder*(10**multiplier);
            placeholder=Math.floor(placeholder/10);
            decipart=placeholder;
            placeholder=placeholder/(10**(multiplier-1));
            if(accumulator<0)
            {
                accumulator = -1*placeholder;
            }
            else
            {
                accumulator = placeholder;
            }
            if(multiplier==1)
            {
                decicheck=false;
                decimal.style.backgroundColor = '#338525';
                decipart=accumulator;
                let currentstring = display.textContent;
                let currentStringArray = currentstring.split('');
                currentStringArray.splice(currentStringArray.length-1,1);
                display.textContent = currentStringArray.join('');
            }
        }
        else
        {
            let currentstring = display.textContent;
            let currentStringArray = currentstring.split('');
            currentStringArray.splice(currentStringArray.length-1,1);
            display.textContent = currentStringArray.join('');
            let placeholder=Math.abs(accumulator);
            placeholder = Math.floor(placeholder/10);
            if(accumulator<0)
            {
                accumulator = -1*placeholder;
            }
            else
            {
                accumulator = placeholder;
            }
        }
    }
});



//adding functionality for all numbers

ctner.addEventListener('click',(event)=>{
    let target = event.target;
    if(target.className=='plusminus')
    {
        display.textContent = -accumulator;
        accumulator = -accumulator;
    }

    if(target.className=='decimal'&&decicheck==false)
    {
        display.textContent += '.';
        decicheck=true;
        decimal.style.backgroundColor = 'gray';
    }

    if(target.className=='numbers')
    {
        let numberHere = +target.textContent;
        if(accumulator==undefined)
        {
            accumulator=0;
        }
        if(decicheck==false)
        {
            if(accumulator<0)
            {
                numberHere = -1*numberHere;
            }
            accumulator = accumulator*10 + numberHere;
            decipart=accumulator;
            display.textContent = accumulator;
        }
        else
        {
            let placeholder = Math.abs(accumulator);
            if(Math.floor(placeholder)==placeholder&&decicheck==false)
            {
                decipart=placeholder;
            }
            decipart = decipart*10+numberHere;
            placeholder = decipart/(10**multiplier);
            ++multiplier;
            if(accumulator<0)
            {
                accumulator = -1*placeholder;
            }
            else
            {
                accumulator=placeholder;
            }
            if(numberHere==0)
            {
                display.textContent+='0';
            }
            else
            {
                display.textContent=accumulator;
            }
        }
    }

    if(target.className=='operations')
    {
        decicheck=false;
        multiplier=1;
        decipart=0;
        decimal.style.backgroundColor = '#338525';
        if(check==true)
        {
            number1=operate(number1,operator,accumulator);
            display.textContent = number1;
            if(number1=="kys")
            {
                number1=0;
            }
        }
        else{
            check = true;
            number1 = accumulator;   
        }
        accumulator=undefined;
        operator = target.textContent;
        display.textContent += target.textContent;
    }

    if(target.className=='equals')
    {
        check=false;
        number2 = accumulator;
        if(number1!=undefined&&number2!=undefined&&operator!=undefined)
        {
            accumulator = operate(number1,operator,number2);
            if(accumulator==Math.floor(accumulator))
            {
                decicheck=false;
                decipart=0;
                multiplier=1;
                decimal.style.backgroundColor = '#338525';
            }
            else if(accumulator!=Math.floor(accumulator))
            {
                decicheck=true;
                decipart=accumulator;
                if(accumulator*10==Math.floor(accumulator*10))
                {
                    multiplier=2;
                }
                else{
                    multiplier=3;
                }
                decipart=accumulator*(10**(multiplier-1));
                decimal.style.backgroundColor="gray";
            }
            operator=undefined;
            display.textContent=accumulator;
            if(accumulator=="kys")
            {
                check=false;
                accumulator=0;
                decicheck=false;
                multiplier=1;
                number1=0;
                number2=0;
                operator=undefined;
            }
        }
    }
});

//adding keyboard support

const body = document.querySelector('body');
body.addEventListener('keydown',(event)=>{
    if(event.key=="+"||event.key=="9"||event.key=="0"||event.key=="Enter")
    {
        event.preventDefault();
    }
    let pressedvar = event.key;
    //console.log(event);

    switch(pressedvar)
    {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            pressedvar=1;
            break;
        case '+':
        case '-':
        case '/':
        case '*':
            pressedvar=2;
            break;
        case '=':
        case 'Enter':
            pressedvar=3;
            break;
        case 'x':     //adding support for AC
            pressedvar=4;
            break;
        case 'c':       //adding support for C
            pressedvar=5;
            break;
        case '.':
            pressedvar=6;
            break;
        case '!':
            pressedvar=7;
            break;
    }
    if(pressedvar==1)
    {
        let numberHere = +event.key;
        if(accumulator==undefined)
        {
            accumulator=0;
        }
        if(decicheck==false)
        {
            if(accumulator<0)
            {
                numberHere = -1*numberHere;
            }
            accumulator = accumulator*10 + numberHere;
            decipart=accumulator;
            display.textContent = accumulator;
        }
        else
        {
            let placeholder = Math.abs(accumulator);
            if(Math.floor(placeholder)==placeholder&&decicheck==false)
            {
                decipart=placeholder;
            }
            decipart = decipart*10+numberHere;
            placeholder = decipart/(10**multiplier);
            ++multiplier;
            if(accumulator<0)
            {
                accumulator = -1*placeholder;
            }
            else
            {
                accumulator=placeholder;
            }
            if(numberHere==0)
            {
                display.textContent+='0';
            }
            else
            {
                display.textContent=accumulator;
            }
        }
    }
    else if(pressedvar==2)
    {
        decicheck=false;
        multiplier=1;
        decipart=0;
        decimal.style.backgroundColor = '#338525';
        if(check==true)
        {
            number1=operate(number1,operator,accumulator);
            display.textContent = number1;
            if(number1=="kys")
            {
                number1=0;
            }
        }
        else{
            check = true;
            number1 = accumulator;   
        }
        accumulator=undefined;
        operator = event.key;
        display.textContent += event.key;        
    }
    else if(pressedvar==3)
    {
        check=false;
        number2 = accumulator;
        if(number1!=undefined&&number2!=undefined&&operator!=undefined)
        {
            accumulator = operate(number1,operator,number2);
            display.textContent=accumulator;
            operator=undefined;
            if(accumulator==Math.floor(accumulator))
            {
                decicheck=false;
                decipart=0;
                multiplier=1;
                decimal.style.backgroundColor = '#338525';
            }
            else if(accumulator!=Math.floor(accumulator))
            {
                decicheck=true;
                decipart=accumulator;
                if(accumulator*10==Math.floor(accumulator*10))
                {
                    multiplier=2;
                }
                else{
                    multiplier=3;
                }
                decipart=accumulator*(10**(multiplier-1));
                decimal.style.backgroundColor="gray";
            }
            if(accumulator=="kys")
            {
                check=false;
                accumulator=0;
                decicheck=false;
                multiplier=1;
                number1=0;
                number2=0;
                operator=undefined;
            }
        }        
    }
    else if(pressedvar==4)
    {
        display.textContent="";
        accumulator=0;
        number1=undefined;
        number2=undefined;
        operator=undefined;
        check=false;
        decicheck=false;
        multiplier=1;
        decipart=0;
        decimal.style.backgroundColor = '#338525';
    }
    else if(pressedvar==5)
    {
        if(decicheck==true)
        {
            let currentstring = display.textContent;
            let currentStringArray = currentstring.split('');
            currentStringArray.splice(currentStringArray.length-1,1);
            display.textContent = currentStringArray.join('');
            --multiplier;
            //console.log(multiplier);
            //accumulator = accumulator.toFixed(multiplier-1);
            let placeholder = Math.abs(accumulator);
            placeholder=placeholder*(10**multiplier);
            placeholder=Math.floor(placeholder/10);
            decipart=placeholder;
            placeholder=placeholder/(10**(multiplier-1));
            if(accumulator<0)
            {
                accumulator = -1*placeholder;
            }
            else
            {
                accumulator = placeholder;
            }
            if(multiplier==1)
            {
                decicheck=false;
                decimal.style.backgroundColor = '#338525';
                decipart=accumulator;
                let currentstring = display.textContent;
                let currentStringArray = currentstring.split('');
                currentStringArray.splice(currentStringArray.length-1,1);
                display.textContent = currentStringArray.join('');
            }
        }
        else
        {
            let currentstring = display.textContent;
            let currentStringArray = currentstring.split('');
            currentStringArray.splice(currentStringArray.length-1,1);
            display.textContent = currentStringArray.join('');
            let placeholder=Math.abs(accumulator);
            placeholder = Math.floor(placeholder/10);
            if(accumulator<0)
            {
                accumulator = -1*placeholder;
            }
            else
            {
                accumulator = placeholder;
            }
        }
    }
    else if(pressedvar==6&&decicheck==false)
    {
        display.textContent += '.';
        decicheck=true;
        decimal.style.backgroundColor = 'gray';
    }
    else if(pressedvar==7)
    {
        display.textContent = -accumulator;
        accumulator = -accumulator;
    }
});
