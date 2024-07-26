### Exercício  módulo 14

## Resolva as questões



- 10 + 15 = 25

- "10" + 2 = '102' (nesse caso concatena-se o valor da string com 2 ao invés de soma-los)

- '10'* 2 = 20 (no caso da multiplicação o Js converte a string em número antes de multiplica-lo)

- “10” % 3 = 1 (se uso o caso acima porem na equação  10 por 3 )

- 10 + true = 11 (caso booleano onde true representa 1)

- 10 == ”10” = true (string convertida em número antes da comparação)

- 10 === “10” = false (diferente do caso a cima operador de estrita igualdade não faz a conversão da string)

- 10 < 11 = true

- 10 > 12 = false

- 10 <= 10.1 = true

- 10 > 9.99 = true

- 10 != “dez” = true( na comparação de um número com uma string pois o js nao converte a string para número)

- 10 + true = 11

- “dez” + true = deztrue ( concatenação de duas strings)

- 10 + false = 10 (false = 0)

- 10 * false = 0 

- true = true = 2 (true = 1)

- 10++ = 10 (operador de incremento postfix)

- 10-- = 10 (mesmo exemplo degit statusg postfix)

- 1 & 1 = 1

- 1 & 0 = 0

- 0 & 0 = 0

- 1 & 0 = 0

- 0 / 1 = 0

- 5 + 5 == 10 = true

- '5' + '5' == 10 = false (concatenação de strings)

- '5' * 2 > 9 = true

- (10 + 10) * 2 = 40

- 10 + 10 *2 = 30


## 2. Responda as perguntas de acordo com as variáveis.

var branco = “preto”;
var preto = “cinza”;
var cinza = “branco”;
var carro = “preto”;
var valor = 30000;
var prestacao = 750;

- a) branco == “branco”
false

- b) branco == cinza
false

- c) carro === branco
false

- d) var cavalo = carro == “preto” ? “cinza” : “marron”;
"cinza"

- e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
  
de 3.000? Demonstre a operação.
(valor - entrada) / prestação 
#### = 30000 - 3000 / 750
= 24000 / 750 
#### = 32
### São necessárias 32 prestações para pagar o valor do carro com uma entrada de 3.000

- f) Somando as variáveis de cores é formada uma string de quantos caracteres?
'pretocinzabranco' 16 caracteres

- (https://jsfiddle.net/franklinfernandes/9j5vncbm/9/) >> TESTE NO FIDDLE JS/HTML/CSS

- https://jsfiddle.net/franklinfernandes/9j5vncbm/22/  >> TESTE NO FIDDLE PARA FUNCTIONS








