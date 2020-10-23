import {Gerente} from './Funcionario/Gerente.js';
import {Diretor} from './Funcionario/Diretor.js';
import { SistemaAuth } from './SistemaAuth.js';
// import {ContaCorrente} from './Conta/ContaCorrente.js'

// const cliente1 = new Cliente('Carlos','489.321.234-90');
// const cliente2 = new Cliente('Giovana','158.391.084-76');

// let cc = new ContaCorrente('071','454234-6',cliente1);
// let cc2 = new ContaCorrente('071','3554323-9',cliente2);

// cc.depositar(600);

// console.log(`Saldo conta Carlos: ${cc._saldo}`);
// console.log(`Saldo conta Giovana: ${cc2._saldo}`);

// let valorTransferencia = 200;

// console.log("Saldo após transferência")
// cc.transferir(valorTransferencia, cc2);
// console.log(`Saldo conta Carlos: ${cc._saldo}`);
// console.log(`Saldo conta Giovana: ${cc2._saldo}`);

const diretor = new Diretor("Rodrigo",10.000,2345543354);
const gerente = new Gerente("Ricardo",3.000,948473283);
diretor.cadastrarSenha("1233456");
const estaLogado = SistemaAuth.login(diretor, "1233456");
console.log(estaLogado);