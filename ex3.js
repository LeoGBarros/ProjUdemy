// For 0f - retorna valores em si ( iteraveis, array ou strings)

const frutas = ['Pera', 'Maça', 'Morango'];

for ( let nomeFruta of frutas ){
    console.log(frutas[nomeFruta]);
}

console.log('###########');


// For in - retorna indice ( string, array ou objetos)

const pessoa  = {
    nome: 'leo',
    sobrenome: 'barros',
    idade: 21
};

for ( let chave in pessoa ){
    console.log(chave, pessoa[chave]);
}

console.log('###########');

frutas.forEach(function(valor,indice) {
    console.log(valor,indice)
})

