export class Conta{

    constructor(agencia, numeroConta, cliente){
        this._agencia = agencia;
        this._cliente = cliente;
        this._numeroConta = numeroConta;
        this._saldo = 0;
        if(this.consctructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente");
        }
    }

    get numeroConta() {
        return this._numeroConta;
    }

    get agencia() {
        return this._agencia;
    }

    get saldo() {
        return this._saldo;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(value) {
        if(value instanceof Cliente){  // DEFINIR EXPLICITAMENTE O TIPO DO ATRIBUTO
            this._cliente = value;
        }
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        this._saldo+= valor;
    } 

    transferir(valor, conta){
        let valorTransferir = this.sacar(valor);
        conta.depositar(valorTransferir);
    }

}