
//REST
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // console.log(arguments)
    // //return a + b;
}

console.log(somar(10, 20, 30))

function somaComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}
console.log(somaComRest(10, 20, 30))

//SPREAD OPERATOR

const numeros = [1, 2, 3, 4]
console.log(...numeros)

const timesDeFutebolDeSp = ['Palmeiras', 'Santos', 'Barueri'];
const timesDeFutebolDeRj = ['Vasco', 'Botafogo', 'Flamengo'];

//const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDeRj);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDeRj];

//timesDeFutebolDeSp.concat(timesDeFutebolDeRj)
console.log(timesDeFutebol)




const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    potencia: '1.8'
}
const carroDaAna = {
    ...carroDaJulia,
    potencia: '1.6'
}

console.log(carroDaAna)

//DESESTRUTURACAO

//const motorDoCarroDaAna = carroDaAna.motor;

const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaJulia);
console.log(motorDoCarroDaAna)
