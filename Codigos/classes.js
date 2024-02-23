class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
  comendo() {
    console.log(`${this.nome} está comendo.`);
  }
  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

const p1 = new Pessoa('Leonardo', 'Barros');
console.log(p1);
