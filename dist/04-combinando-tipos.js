"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
/* Union Types */
// União de tipos literais
let direcao; // valores possíveis
direcao = "esquerda";
console.log(direcao);
direcao = "direita";
console.log(direcao);
(0, modulos_1.separador)();
let exemploA = 2112;
let exemploB = "Senac";
console.log("Exemplo A: " + exemploA);
console.log("Exemplo B: " + exemploB);
(0, modulos_1.separador)();
let situacaoAluno1 = "ativo";
let situacaoAluno2 = "inativo";
let situacaoAluno3 = "pendente";
console.log(situacaoAluno3);
(0, modulos_1.separador)();
const diaAtual = "Quarta-feira";
console.log(diaAtual);
(0, modulos_1.separador)();
const programador = {
    nome: "Heesung",
    idade: 23,
    salario: 10000,
};
console.log(programador);
(0, modulos_1.separador)();
const outroProgramador = {
    nome: "Sunghoon",
    idade: 22,
    salario: 7000,
};
console.log(outroProgramador);
