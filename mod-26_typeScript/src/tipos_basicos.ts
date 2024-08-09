let estaChovendo: boolean = false

estaChovendo = true

let idade: number = 38

let altura: number = 1.85

const nacionalidade: string = 'brasileiro'

const colegas: string[] = ['franklin', 'dominika', 'bernadetta']

const tecnologias: Array<string> = ['html', 'css', 'js']

const notas: ReadonlyArray<number> = [10, 8, 9, 9]

const listgem: [string, boolean, number] = ['franklin', true, 85]

const lista: [nome: string, estaEstudando: boolean, idade: number] = ['franklin', true, 85]

let idadeDaAna: number | string | boolean = 30
idadeDaAna = '30 anos'
idadeDaAna = true

//VARIAVEL DO TIPO "any" ACEITA QUALQUER VALOR ===>>> USAR DE FORMA MODERADA
let dadosDoApi: any;
dadosDoApi = 10
dadosDoApi = true
dadosDoApi = 'teste'
dadosDoApi = [1, 2, 3]
dadosDoApi = 'string'

let curso = 'front-end'