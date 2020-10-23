import {Conta} from './Conta.js';

export class ContaCorrente extends Conta{

    constructor(agencia, numeroConta, cliente){
        super(agencia, numeroConta, cliente); // CHAMA O MÉTODO DA CLASSE PAI, COMO TA DENTRO DO CONSTRUTOR, CHAMA O CONSTRUTOR PAI
    }
}