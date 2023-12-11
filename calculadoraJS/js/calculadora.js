window.addEventListener('load', () => { //Escuchamos cuando se carga el documento
    // Creamos 2 constantes y nos guardamos lo elementos que necesitamos
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button'); //Esto me crea un HTMLCollection que lo podre trabajar despues como un array 
    // console.log(keypadButtons)

    // Creamos otra constante para convertir el HTMLCollection a Array
    const keypadButtonsArray = Array.from(keypadButtons);

    //Iteramos por nuestro nuevo array de botones
    keypadButtonsArray.forEach((button) => {
        //A cada boton le agregamos un listener
        button.addEventListener('click', () => {
            // console.log(button.innerHTML);
            calculadora(button, display);
        })
    })

});

const calculadora = (button, display) => {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        
        default:
            actualizar(display, button);
            break;
    }
}

const calcular = (display) => {
    display.innerHTML = eval(display.innerHTML) //Tomar el string, resolverlo y guardarlo en el innerHTML del display
}

const actualizar = (display, button) => {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

const borrar = (display) => {
    display.innerHTML = '0';
}