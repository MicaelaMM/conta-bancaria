class ContaBancaria{
    constructor (agencia, numero, tipo){
        this.agencia = agencia; // This se refere a objeto
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;


    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo) {// Condição para saber se existe saldo para então conseguir sacar valor
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor; // Retornar o saldo - o valor sacado

        return this._saldo; // Saldo atualizado
    }

    depositar(valor){
        this._saldo = this._saldo + valor; //Pega saldo e soma com deposito

        return this._saldo; // Retorna saldo atualizado
    }
}

    class ContaCorrente extends ContaBancaria{
        constructor (agencia, numero) {
            super(agencia, numero); //Filho envia dados para classe Pai
            this.tipo = 'Corrente';
            this._cartaoCredito = this.cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitária';
    }


sacar(valor) {
    if(valor > 500) {
        return "Operação negada!"
    }

    this._saldo = this._saldo - valor;
    }

}