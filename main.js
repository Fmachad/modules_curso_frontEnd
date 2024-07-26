
// //OBJETO LITERAL ----- Primeira forma de criar um objeto no JavaScript//
// const carrodoJoao = {
//     modelo: 'Polo',
//     fabricante: 'Volkswagen',
//     anoModelo: '2004',
//     anoFabricacao: '2004',
//     acelerar: function () {
//         console.log("vrumm");
//     }
// }

// const carroDaMaria = {
//     modelo: 'Ka',
//     fabricante: 'Ford',
//     anoModelo: '2021',
//     anoFabricacao: '2020',
//     acelerar: function () {
//         console.log("vrumm");
//     }
// }

// //FUNCOES CONSTRUTORAS ---Segunda orma de criar um objeto no JavaScript//

// function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
//     this.modelo = modelo;
//     this.fabricante = fabricante;
//     this.anoModelo = anoModelo;
//     this.anoFabricacao = anoFabricacao;
//     this.acelerar = function () {
//         console.log("acelerar");
//     }

// }

// const carrodoJoao2 = new Carro("Polo", "Volkswagen", 2004, 2004);
// const carroDaMaria2 = new Carro("Ka", "Fiesta", 2021, 2020);

// console.log(carrodoJoao2);
// console.log(carroDaMaria2);

const nome = "Franklin"
const idade = 30
const deMaioridade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    deMaioridade: deMaioridade,
    conhecimentos: conhecimentos,
}

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

pessoa['sobrenome'] = undefined;

Object.freeze(pessoa)
pessoa.nome = 'Fernandes';

if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));