const display = document.querySelector('.input .display');

document.querySelectorAll ('.buttons')
.forEach(buttons => buttons.addEventListener('click',buttonsPressed))

function buttonsPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll ('.opers')
.forEach(opers => opers.addEventListener('click', opersPressed))

function opersPressed(ev) {
    if(display.value[display.value-1] !== '+' && display.value[display.value-1] !== '-' &&
    display.value[display.value-1]  !== '*' && display.value[display.value-1] !== '/') {
        display.value = display.value + ev.target.innerText;
    }
    
     //if (!(~display.value.indexOf("+")) && !(~display.value.indexOf("-") && !(~display.value.indexOf("*") && !(~display.value.indexOf("/")) {
       // display.value += ev.target.innerText;
    }
}