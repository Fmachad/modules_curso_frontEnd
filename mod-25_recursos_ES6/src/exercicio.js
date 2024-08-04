const alunos = [
    { nome: 'Franklin', nota: 7.5 },
    { nome: 'Dominika', nota: 9.5 },
    { nome: 'Bernadetta', nota: 8 },
    { nome: 'Leandro', nota: 5.5 },
    { nome: 'Andrew', nota: 4.5 },
    { nome: 'Pedro', nota: 5 },
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);