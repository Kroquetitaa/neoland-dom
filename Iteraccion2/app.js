
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


