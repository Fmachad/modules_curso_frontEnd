function Pessoa(nome) {
    this.nome = nome;
    this.dizoi = function () {
        console.log(this.nome + " diz ola")
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    //GETTERS E SETTERS
    this.getSalario = function () {
        return _salario;
    }

    this.setSalario = function (valor) {

        if (typeof valor === 'number') {
            _salario = valor;
        }

    }

    this.aumento = function () {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.dizCargo = function () {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome)
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario)
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario)
    }
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Joao");
const funcionario3 = new Gerente("Paulo");
// funcionario1.dizoi();
// funcionario1.dizCargo();
// funcionario1.setSalario('mil');

// funcionario1.salario = 10000000
// console.log(funcionario1.getSalario())

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())



