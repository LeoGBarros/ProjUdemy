// factory functions / Constructos Functions / classes

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Leonardo', 'Guedes');
p1.nome = 'Outra Coisa';
const p2 = new Pessoa('Nicolas', 'Guedes');

console.log(p1);
console.log(p2);
