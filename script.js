const display = document.querySelector(".display");
const message = document.querySelector(".message");

const buttons = document.querySelectorAll("button");

const statusMessages = [

"🚀 CALCULATION COMPLETE",
"🌌 TRAJECTORY LOCKED",
"⭐ MISSION SUCCESSFUL",
"🛰 SIGNAL VERIFIED",
"☄ ORBIT STABLE",
"💫 COMMAND EXECUTED"

];

function clearDisplay(){

    display.value="";
    message.textContent=
    "SYSTEM ONLINE. AWAITING COMMAND...";
}

function deleteLast(){

    display.value=
    display.value.slice(0,-1);
}

function calculate(){

    try{

        if(display.value===""){
            return;
        }

        const result = Function(
        `"use strict"; return (${display.value})`
        )();

        display.value=result;

        const randomMessage=
        statusMessages[
            Math.floor(
                Math.random()*
                statusMessages.length
            )
        ];

        message.textContent=
        randomMessage;
    }

    catch{

        display.value="ERROR";

        message.textContent=
        "⚠ SYSTEM ERROR";
    }
}

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        const value=
        button.textContent;

        if(value==="C"){
            clearDisplay();
            return;
        }

        if(value==="⌫"){
            deleteLast();
            return;
        }

        if(value==="="){
            calculate();
            return;
        }

        if(value==="×"){
            display.value+="*";
            return;
        }

        if(value==="÷"){
            display.value+="/";
            return;
        }

        if(value==="−"){
            display.value+="-";
            return;
        }

        display.value+=value;
    });
});

document.addEventListener("keydown",(e)=>{

    const key=e.key;

    if(
        "0123456789.+-*/".includes(key)
    ){
        display.value+=key;
    }

    if(key==="Enter"){
        e.preventDefault();
        calculate();
    }

    if(key==="Backspace"){
        deleteLast();
    }

    if(key==="Escape"){
        clearDisplay();
    }
});