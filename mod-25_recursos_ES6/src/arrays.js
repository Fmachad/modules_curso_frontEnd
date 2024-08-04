const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

//Modo convencional de cirar uma array
for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]} `)
}

//Modo de criacao utilizando os metodos ES6 (EXistem outros modos)
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice}Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})
const alunos = ['Franklin', 'Dominika', 'Bernadetka'];

const alunos2 = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Front-end'
    }
})
console.log(alunos2)

// const numeros = [1, 2, 3, 4, 5]
// const dobroDosNumeros = numeros.map(function (numeroAtual) {
//     return numeroAtual * 4;
// })

// console.log(dobroDosNumeros)

const franklin = alunos2.find(function (item) {
    return item.nome == 'Franklin'
})

console.log(franklin)

const indiceDoFranklin = alunos2.findIndex(function (item) {
    return item.nome == 'Franklin'
})

console.log(indiceDoFranklin)

//every

alunos2.push({
    nome: 'Lucio',
    curso: 'Back-end'
})
const todosAlunosSaoDeFrontend = alunos2.every(function (item) {
    return item.curso === 'Front-end'
})
console.log(todosAlunosSaoDeFrontend);

const existeAlgumAlunoDeBackend = alunos2.some(function (item) {
    return item.curso === 'Back-end' && item.curso === 'Front-end'
})

console.log(existeAlgumAlunoDeBackend);

function filtraAlunosDeBackend(alunos) {
    return alunos.curso === 'Back-end';
}

const filtraAlunosDeBackend2 = alunos => alunos.curso === 'Back-end';

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function (acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}
console.log(somaComFor)

const nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomesDosAlunos)

