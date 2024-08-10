
# DOM - core

- DOM DOCUMENT OBJECT MODEL
- ESTRUTURA DE UM ARQUIVO NA WEB
- REPRESENTA DOCUMENTOS HTML OU XML
- INTERFACE DE PROGRAMAÇÃO
- NÃO É UMA LINGUAGEM DE PROGRAMAÇÃO 
- E ESSENCIAL PARA JS ENTENDER O MODELO DE PAGINAS WEB

FUNCAO PRINCIPAL E DAR ESTRUTURA A ARQUIVOS HTML- ELE INTERPRETA E CRIA UMA ESTRUTURA QUE NOS PERMITE TRABALHAR COMO NUM MODELO DE OBJETO (HTML XHTML)
UMA INTERFACE DE PROGRAMACAO, MAS NAO E UMA LINGUAGEM DE PROGRAMACAO.

ESSENCIAL PARA O JS ENTENDER A ESTRUTURA

## PARA QUE SERVE?

 - ALTERAR A ESTRUTURA
 - ALTERAR A ESTILO
 - ALTERAR O CONTEUDO
  

## COMO ISSO ACONTECE?


- DISPONIBILIZANDO API (APLICATION PROGRAMING INTERFACE)
- ROTINAS E PADROES ESTABELECIDOS
- METODOS (FUNCOES)
- ARVORE DE ELEMENTOS
- SELETORES
- OBJETOS (NOS/ NODESO)

## EXEMPLO HTMl
```
<html>
    <head></head>
    <body></body>
</html>
```
## EXEMPLO OBJETO
```
objeto = {
    html : {
        head : {}
        body : {
            h1 : {                
            }
        }
    }
}
```
##  DOM X JS

- O DOM PODER SER USADO POR OUTRAS LINGUAGENS
- SEM O DOM O JS NAO TERIA NOCAO DA PAGINA

## VANTAGENS DE USAR O JAVASCRIPT
- CODIGO E EXECUTADO POR NAVEGADORES
- TORNA AS PAGINAS DINAMICAS
- EVITAR REQUISIOCOES DESNECESSARIAS (PERFORMANCE)
- SPA (SINGLE PAGE APPLICATION)
- REAGIR RAPIDAMENTE A ACOES DOS USUARIOS

## DESVANTAGENS DE USAR O JAVA SCRIPT
- CODIGO E EXECUTADO POR NAVEGADORES
- O CONTEUDO NAO FICA VISIVEL PARA INDEXADORES DE BUSCA
- ALTERACOES EM TEMPO DE EXECUCAO NAO FICAM SALVAS NO DOCUMENTO


## EXEMPLOS
SELECIONA O OBJETO E DISPONIBILIZA ( METODOS / FUNCOES) .callback (chamadas)

- document.getElementById(id)
- document.getElementByTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name') DEFINE ATRIBUTO
- element.getAttribute('name')
- element.addEventListener()
- window.location
- window.onload (en-US)
- window.log()
- console.log()
- window.scrollTo()
  
# Seletores
## Tipos de Seletores: Tag, ID, Class, Name, Query
- Callback
- getElementById() ( Entre parenteses Sempre o nome do arquivo)
- getElementByTagName()
- getElementByName()
- getElementByClassName()
- querySelectorAll() // #id | .class

# FORMULARIOS
- Precisamos que o usuario passo dados incorretos
- Ou seja, para direcionar melhor o uso do nosso sistema
- Proteger a injecao de codigos maliciosos
- Evitar erros de processamento
- Formatar dados para facilicitar o processamanto
- Regex (Expressao de Reguladores)


## REFERENCIAS

-  DOM: https://dom.spec.whatwg.org/
-  TECNOLOGIAS JS: https://developer.mozzila.org/pt-BR/docs/web/JavaScript/JavaScript_technologies_overview
-  MOTORES DE EXECUCAO: https://pt.wikipedia.org/wiki/lista_de_motores_de_renderiza%C3%A7%C3%A3o
  

