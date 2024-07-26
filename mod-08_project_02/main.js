const form = document.getElementById("form-registro");
/*const imgAprovado = '<img src= "./images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src= "./images/reprovado.png" alt="Emoji Decepcionado" />';*/
const nome = [];
const contato = [];
/*const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"));*/

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  //atualizaMediaFinal();
});

function adicionaLinha() {
  const inputNome = document.getElementById("nome-contato");
  const inputContato = document.getElementById("telefone-contato");

  if (nome.includes(inputNome.value)) {
    //alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
  } else {
    nome.push(inputNome.value);
    contato.push(parseFloat(inputContato.value));

    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputContato.value}</td>`;
    /*linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += "</tr>";*/
    linhas += linha;
  }

  inputNome.value = "";
  inputContato.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

/*function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}*/
