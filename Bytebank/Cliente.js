
export class Cliente{
    
    constructor(nome,cpf){
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    get cpf() {
        return this._cpf;
    }

    get nome() {
        return this._nome;
    }

    autenticar(senha){
        return senha == this._senha;
    }
}