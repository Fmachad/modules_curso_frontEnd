const minhaFuncao = () => "Diz ola";

const retornaUmCarro = () => ({
    modelo: 'KA',
    fabricante: 'Ford'
})

console.log(minhaFuncao());
console.log(retornaUmCarro());


const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        console.log(this)
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this)
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)