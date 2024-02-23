const nome = "Leonardo";
const sobrenome = "Guedes";
const idade = 21;
const peso = 60;
const altura = 1.85;
let imc;
let anoNasc;



imc = peso / (altura * altura);
anoNasc = 2023 - idade;

console.log('meu nome é',nome, sobrenome, 'tenho', idade, 'e pesa:',peso,'kg');
console.log('tenho', altura,'metros de altura', 'com IMC de:', imc);
console.log('nascido em:', anoNasc);