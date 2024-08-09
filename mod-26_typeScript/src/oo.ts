
//FORMA CONVENCIONAL

class Pessoa {
    nome: string;
    renda?: number
    
    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }
    
    dziOla(): string {
        return `${this.nome} disse oi`;
    }
}

//MUDANCAS ATUAIS

class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;
    
    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }
    
     private getSaldo() {
        return this.saldo
    }
    
    static retornaNumeroDoBanco() {
        return 125;
    }
    
    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoFranklin = new ContaBancariaPessoaFisica(123456)
//contaDoFranklin.numeroConta;
ContaBancaria.retornaNumeroDoBanco()