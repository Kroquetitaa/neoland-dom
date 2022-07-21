// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

let button = document.querySelector('#btnToClick');

button.addEventListener('click', e => {
    console.log( e );
})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let inputOne = document.querySelector('.focus');

inputOne.addEventListener('focus', e => {
    console.log( e );
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let inputTwo = document.querySelector('.value');

inputTwo.addEventListener('input', e => {
    console.log( e );
})