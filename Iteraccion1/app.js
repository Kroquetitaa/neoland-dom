// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let button = document.querySelector('.showme');
console.log( button );

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let etiquetaH1 = document.querySelector('#pillado');
console.log( etiquetaH1 );

//1.3 Usa querySelector para mostrar por consola todos los p
let paragraph = document.querySelectorAll('p');
console.log( paragraph );

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

let elementsPokemons = document.querySelectorAll('.pokemon');
console.log( elementsPokemons );

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

let atributes = document.querySelectorAll('[data-function="testMe"]');
console.log( atributes );

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

let atributes2 = document.querySelectorAll('[data-function="testMe"]');

atributes.forEach( ( e,i ) => {
    console.log( i == 2 ? e : '' );
});