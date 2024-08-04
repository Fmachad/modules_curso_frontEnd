"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];

//Modo convencional de cirar uma array
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i], " "));
}

//Modo de criacao utilizando os metodos ES6 (EXistem outros modos)
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, "Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Franklin', 'Dominika', 'Bernadetka'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Front-end'
  };
});
console.log(alunos2);

// const numeros = [1, 2, 3, 4, 5]
// const dobroDosNumeros = numeros.map(function (numeroAtual) {
//     return numeroAtual * 4;
// })

// console.log(dobroDosNumeros)

var franklin = alunos2.find(function (item) {
  return item.nome == 'Franklin';
});
console.log(franklin);
var indiceDoFranklin = alunos2.findIndex(function (item) {
  return item.nome == 'Franklin';
});
console.log(indiceDoFranklin);

//every

alunos2.push({
  nome: 'Lucio',
  curso: 'Back-end'
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Front-end';
});
console.log(todosAlunosSaoDeFrontend);
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Back-end' && item.curso === 'Front-end';
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(alunos) {
  return alunos.curso === 'Back-end';
}
var filtraAlunosDeBackend2 = function filtraAlunosDeBackend2(alunos) {
  return alunos.curso === 'Back-end';
};
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);