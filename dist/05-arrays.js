"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
// Sintaxe 1
const bandas = ["Metallica", "Slayer", "Iron Maiden"];
// bandas.push(10) // erro
bandas.push("Nightwish");
console.log(bandas);
// Sintaxe 2
const artistas = ["Jon Oliva", "Stings", "David Gilmour"];
artistas.push("Neil Peart");
console.log(artistas);
(0, modulos_1.separador)();
const pessoas = ["Tiago", 28, "gabirel", 19];
console.log(pessoas);
(0, modulos_1.separador)();
const linguagens = [
    ["JS", "TS"],
    ["HTML", "CSS", "Bootstrap"],
];
console.log(linguagens[0][0]);
console.log(linguagens[1][0]);
(0, modulos_1.separador)();
/* Mini-exercício
1) Crie um array de números
2) Calcule a soma de todos os elementos e guarde numa variável
3) Mostre o resultado da soma */
const numeros = [10, 5, 50, 200, 1000];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma);
(0, modulos_1.separador)();
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
// Usando tupla no retorno de função
function verificarOperacao(sucesso) {
    if (sucesso) {
        return [200, "Operação realizada com sucesso!"];
    }
    return [500, "Erro inesperado no servidor"];
}
let resultadoDaOperacao = verificarOperacao(true);
console.log(resultadoDaOperacao);
