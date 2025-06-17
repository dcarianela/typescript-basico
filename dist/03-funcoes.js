"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function saudacao(nome) {
    return `Olá ${nome}!`;
}
console.log(saudacao("Sunoo"));
(0, modulos_1.separador)();
/* Uso de parâmetro opcional com a flag ? após o nome do parâmetro */
function saudacaoCompleta(nome, anoLetivo = 2025, curso) {
    if (curso) {
        return `Olá ${nome}, você está estudando ${curso}. Ano letivo: ${anoLetivo}`;
    }
    return `Olá ${nome}, sei lá o que você está fazendo... Ano: ${anoLetivo}`;
}
console.log(saudacaoCompleta("Hayakawa", 2021));
console.log(saudacaoCompleta("Sunoo"));
