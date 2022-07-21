// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

let button = document.querySelector('#btnToClick');

button.addEventListener('click', e => {
    console.log( e );
})