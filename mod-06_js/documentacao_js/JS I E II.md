# JavaScript

- Estado do JavaScript (htttps://2020.stateosjs.com/en-US/technologies/)
- Onde e executado
- Unipresente na WEB
- APP hibridos
- Aplicacao de ponta-a-ponta: banco de dados, back-end/front-end
- Interagir com DOM (api-web)
- Requisicoes dinamicas
- IoT (Internet das cOisas): o JS esta presente em tudo
- ECMAScript

## FUNDAMENTOS JS

- Fundamentos do JavaScript Sao essenciais para avancar no desenvolvimento de aplicacoes modernas, e a base de diversos frameworks
- Neste curso evoluimos da base para o topo
- E melhor do que comecar na frente e precisar retornar pra base.

## METODOLOGIA

- Metodo progressivo e interado
- Todo arranha ceu so e erguido depois de uma fundacao robusta e segura
- Neste curso apresentamos conceitos de modo progressivo, seguindo uma linha de evolucao
- Comeca facil e vai aumentando a complexibilidade
- Alem de Especializacao, aprendemos integrar com diversas possibilidades.

## LÓGICA  DE PROGRAMAÇÃO

### COMPUTADOR

- Máquina que extrai dados
- Processar: realizar operações nos dados de entrada
- Dado: é o que pode ser processado
- Informação: resultado do processamento
- Processamento de dados: Entradda (dados) > Processamento > Saída (informação)

### Lógica

- Lógica é aquilo que faz sentido

### Como Escrever um programa?

- Aplicar a lógica para descrever os passos e resolver um problema em  ordem de execução 

### A lógica de programação

- É  a técnica de sequenciar pensamentos, passos, fluxo de dados para atingir um objetivo: a informação
- A sequência de passos, instruções que o computador deve seguir é conhecida como ALGORITMO 

### Algoritmo

- Sequência lógica e finita de instruções que resolvem um problema
- Exemplo: receita de bolo, manual de instruções
- Nem todo o algoritmo é um programa de computador, mas todo programa de computador é um algoritmo.
- Quem viabiliza o funcionamento dos algoritmos nos computadores: linguagens de programação

### Agoritmo para calcular a média de 3 números 

1. Início;
2. Receber o primeiro número: entrada 1;
3. Receber o segundo número: entrada 2;
4. Receber o terceiro número: entrada 3;
5. Somar os 3 números recebidose dividir por três: (entrada 1 + entrada 2 + entrada 3)/ 3'
6. Exibir o resultado: print, echo, console.log'
7. Fim;

### Torre de Hanoi

- Mover todos os discos para a direita, com o menor número de movimentos possível, sem colocxar o disco em cima de um disco menor: https://www.somatematica.com.br/jogos/hanoi

### fUNCIONALIDADES GERAIS

- Criar algoritmos e programas para executar no navegador: client side
- Manipular o DOM: elementos, eventos, estilos
- Node.js: framework JS para back-end/ runtime em JS
- Mongo.db / GraphQL: banco de dados em JS
- React / Vue.js / Angular: framewor JS para desenvolvimeto WEB mobile
- React Native: framework JS para desenvolvimento mobile
- Recebe e manupula dados
- tomar decisões baseada na lógica computacional
- loop e interações
- condições de saída

### executar o JS

- Console Browsers
- Editores: Sublime, Visual Studio Code
- JS Fiddle https://jsfiddle.net/

### Instalacao do Node.js

- Para a gente conseguir executar scripts JS no terminal de comando, precisamos utilizar o Node.js
- Instalacao: https://node.js.org/pr-br/download/package-manager
  
# Instalado Node (uso Terminal de Coamando)

- PS C:\Users\Franklin\Desktop\Portfolio\Oficial-Port> node -v
v18.14.2

- PS C:\Users\Franklin\Desktop\Portfolio\Oficial-Port> npm -v
9.5.0

- PS C:\Users\Franklin\Desktop\Portfolio\Oficial-Port> node
Welcome to Node.js v18.14.2.
Type ".help" for more information.
- (COMANDO PARA ACESSAR PELO TERMINAL)

## Variaveis

Sao usadas para referenciar espacos na memoria

- var
- const (mantem o valor imutavel)
- let
- string (para declarar sempre entre aspas "")(formada por um conjunto de caracteres)
- tipagem: numero ou string
- array: conjunto de valores
- length: serve para de modo pratico contar unidades de caracteres

### Operadores
São basicamente sinais que usamos manipular dados dentro do algoritmo
# Aritmeticos
- Soma +
- Subtração -
- Multiplicar *
- Dividir /
- Módulo (retorna com o resto de uma divisão) %
- Math: (cirar possibilidades de gerar outras funções) ramdom(), round (), sqrt

# Atribuição

- a = b
- a += b
- a -= b
- a *= b
- a /= b
- a %= b

# Operadores de comparação : Teste logico, retorno booleano (true / false)

- Igual == ou ===
- Diferente !=
- Maior que >
- Maior ou igual >=
- Menor que <
- Menor ou igual que <=

# Comparadores logicos: teste logico, retorno booleano (true / false)

- ==  igualdade entre sentencas (valor)
- !=  Diferenca entre sentencas (valor)
- === igualdade entre sentencas (valor e tipo)
- !== diferenca entre sentencas (valor e tipo)

# Operadores de logica e juncao logica
  
  - ! NAO (NOT)
  - && E (AND)
  - | | OU (OUR)

### Exemplos:

a != b      // o valor de a e diferente de b
x !=== y    //o valor e o tipo de x sao diferentes d y
O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

####  As condições lógicas são convertidas em números binários
-  true é equivalente a 1
- false é equivalente a 0

#### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza -se Ifs
Exemplo:

 var meuCarro =  cor =="preto" ? "preto" : "branco"

## IF

If  (…) {
…
}

## ELSE
Else {
}

## ELSE IF

Else if 

- Exemplo
if (cor == "preto") {
    meuCarro = "preto";

} else if (cor == "vermelho"){
    meuCarro = "cinza";

} else if (cor == "amarelo"){
    meuCarro = "branco";

} else {
    meuCarro = "azul";
}

## Switch
```
switch (cor) {
    case 'branco' : 
        meuCarro = 'branco';
        break;
    case 'vermelho' : 
        meuCarro = 'vermelho';
        break;
    case 'amarelo' :
        meuCarro = 'amarelo';
        break;
    default : 
        console.log('não temos a cor desejada');
} 
```

 ## Calcular Media do aluno

 var nota01 = 0;
 var nota02 = 10;
 var nota03 = 10;
 var media = (nota01 + nota02 + nota03) / 3;
 if( media > 8 ) {
    console.log("Aluno aprovado")
 } else {
    console.log("aluno cabaco")
 }

 ## Lacos de Repeticao
// fazer a revisao do carro aos 10 km

for ([expressaoInicial]; [condicao]; [incremento])

 var km;
 var revisao = 5;
 for(km = 0; km < revisao; km++ ){
 	console.log("apenas " + km + "kms eantao pode rodar");
 }

 ## Calcular medias pra diversos alunos

 var alunos = [
	[6, 7, 8, 6],
	[5, 10, 8, 9],
	[10, 10, 10, 10],
 ]

 var nota = 0
 for ( var i = 0; i < alunos.length; i++){

	nota = 0
	console.Log("Aluno" aluno[i]);

	for( c = 0)

 }