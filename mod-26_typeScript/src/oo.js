"use strict";
//FORMA CONVENCIONAL
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dziOla() {
        return `${this.nome} disse oi`;
    }
}
//MUDANCAS ATUAIS
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    getSaldo() {
        return this.saldo;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoFranklin = new ContaBancariaPessoaFisica(123456);
//contaDoFranklin.numeroConta;
ContaBancaria.retornaNumeroDoBanco();
