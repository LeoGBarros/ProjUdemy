const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = { ...produto };

outraCoisa.nome = 'Outro Nome';
outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);

// ############################################  //

const mercadoria = { nome: 'Produto', preco: 1.8 };
const caneca = {
  ...produto,
  material: 'porcelana',
};

caneca.nome = 'Outro Nome';
caneca.preco = 2.5;

console.log(mercadoria);
console.log(caneca);

// ############################################  //

const newProduto = { nome: 'NewProduto', preco: 1.8 };
console.log(Object.getOwnPropertyDescriptor(newProduto, 'nome'));

// ############################################  //

const produtos = { nome: 'Produtos', preco: 1.8 };
console.log(Object.values(produtos));
