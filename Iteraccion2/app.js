
//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let body = document.querySelector('body');
let div = document.createElement('div');
body.append( div );
console.log( body );


// 2.2 Inserta dinamicamente en un html un div vacio con javascript.

let p = document.createElement('p');
div.appendChild( p );
console.log( body );

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let div2 = document.createElement('div');

for( let i = 0; i <= 5; i++){
    let p2 = document.createElement('p');
    div2.appendChild( p2 );
}
body.appendChild( div2 );
console.log( body );

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let paragraph2 = document.createElement('p');
paragraph2.innerHTML = 'Soy dinámico!'
console.log( paragraph2 );

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.querySelector('.fn-insert-here');
h2.innerHTML = 'Wubba Lubba dub dub';
console.log( h2 );

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let listUl = document.createElement('ul');

apps.forEach(( e ) => {
    let listLi = document.createElement('li');
    listLi.innerHTML = e;
    listUl.appendChild( listLi );
});

console.log( listUl );

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let removeItems = document.querySelectorAll('.fn-remove-me');
for (const keys of removeItems) {
    body.removeChild( keys );
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.

let paragraph3 = document.createElement('p');
paragraph3.innerHTML = 'Voy en medio!';
let divs = document.querySelectorAll('div');
body.insertBefore( paragraph3, divs[1] );
console.log( body );

