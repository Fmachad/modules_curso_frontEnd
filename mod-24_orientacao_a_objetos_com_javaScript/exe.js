class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    info() {
        console.log(`Nome: ${this.name}, Idade: ${this.idade}`);
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raça) {
        super(nome, idade);
        this.raça = raça;
    }

    info() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raça}`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    info() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cor: ${this.cor}`);
    }
}

const dog1 = new Cachorro('Rex', 5, 'German Shepherd');
const cat1 = new Gato('Whiskers', 3, 'White');
const dog2 = new Cachorro('Buddy', 2, 'Golden Retriever');


dog1.info();

cat1.info();

dog2.info();

//arquivo para publicacao
