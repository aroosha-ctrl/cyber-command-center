const display = document.querySelector(".display");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const statusMessages = [
"🚀 CALCULATION COMPLETE",
"🌌 COSMIC RESULT GENERATED",
"⭐ MISSION SUCCESSFUL",
"🛰 SIGNAL VERIFIED",
"☄ ORBIT STABLE",
"💫 COMMAND EXECUTED",
"⚡ PROCESS COMPLETED",
"🪐 SPACE MATH SUCCESS"     ];

window.addEventListener("load", () => {
    message.textContent = "🚀 BOOTING SYSTEM...";
    setTimeout(() => {
        message.textContent = "🛰 CONNECTING TO COMMAND CENTER...";
    }, 1500);
    setTimeout(() => {
        message.textContent = "✅ SYSTEM ONLINE. READY FOR INPUT.";
    }, 3000);
});

function clearDisplay(){
    display.value = "";
    message.textContent = "SYSTEM ONLINE. AWAITING COMMAND...";
}

function deleteLast(){
    if(display.value.length > 0){
    display.value =
    display.value.slice(0,-1);
    }
}

function calculate(){
    try{
        if(display.value.trim()===""){
    message.textContent="⚠ ENTER A VALUE";
    return;
    }
        const result = Function(
        `"use strict"; return (${display.value})`
        )();
        display.value=result;
        display.classList.add("success");
    setTimeout(()=>{
    display.classList.remove("success");
    },400);
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
        if(display.value === "ERROR"){
            display.value = "";
        }
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
    if(display.value==="ERROR"){
        display.value="";
    }
    display.value += key;
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
