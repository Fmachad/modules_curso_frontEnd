"use strict";
const alunos = [
    {
        nome: "Franklin",
        cursos: ["Front-end", "UX/UI"],
        idade: 38,
    },
    {
        nome: "Dominika",
        cursos: ["Assistente Social", "Alemao"],
        idade: 27,
    },
];
alunos.push({
    nome: "Bernadetta",
    cursos: ["Desenvolvimento"],
    idade: 4
});
const novoAluno = {
    nome: "Lucas",
    idade: 22,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
