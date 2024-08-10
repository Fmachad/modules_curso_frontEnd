type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
]
alunos.push({
    nome: "Bernadetta",
    cursos: ["Desenvolvimento"],
    idade: 4
})

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 22,    
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome,)
}