"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
/* Tupla
É um tipo de array especial usada quando precisamos armazenar um conjunto fixo de elementos de tipos diferentes. Obs.: se usar readonly, a tupla não poderá ser modificada (somente leitura) */
const usuario = ["Sunoo", 12, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");
usuario[1] = 30; // atualizado um valor da tupla
console.log(usuario[1] + " anos.");
(0, modulos_1.separador)();
const produtoA = ["Camiseta", 29.99];
// const produtoB: Produto = [100, "Calça"] erro, pois está fora do padrão da tupla
console.log(produtoA);
(0, modulos_1.separador)();
function verificarOperacao(sucesso) {
    if (sucesso) {
        return [200, "Operação realizada com sucesso!"];
    }
    return [500, "Erro inesperado no servidor"];
}
let resultadoDaOperacao = verificarOperacao(true);
const [, mensagem] = resultadoDaOperacao;
console.log(mensagem);
(0, modulos_1.separador)();
