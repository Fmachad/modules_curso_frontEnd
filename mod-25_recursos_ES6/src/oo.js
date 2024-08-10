// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "eletrico")

//FORMA MAIS SIMPLES DE ORIENTACAO A OBJETOS
class Pokemon {
    #hp = 100;

    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    receberOAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Eletrico')
    }
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com o ${nomeDoAtaque}`)
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.receberOAtaque();
pikachuDoAsh.hp = 5000;

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()

pikachuDoAsh.exibeHp()

const pikachu = new Pokemon('pikachu', 'eletrico');
//pikachu.atacar('choque do trovao')

// pikachu.nome = 'pikachu';
// pikachu.tipo = 'eletrico';

console.log(pikachu)
console.log(pikachuDoAsh)
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);