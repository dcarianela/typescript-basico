import { separador } from "./modulos";

// 05- arrays.ts
export {};

// Sintaxe 1
const bandas: Array<string> = ["Metallica", "Slayer", "Iron Maiden"];
// bandas.push(10) // erro
bandas.push("Nightwish");
console.log(bandas);

// Sintaxe 2
const artistas: string[] = ["Jon Oliva", "Stings", "David Gilmour"];
artistas.push("Neil Peart");
console.log(artistas);

separador();

const pessoas: (string | number)[] = ["Tiago", 28, "gabirel", 19];
console.log(pessoas);

separador();

const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][0]);

separador();

/* Mini-exercício
1) Crie um array de números
2) Calcule a soma de todos os elementos e guarde numa variável
3) Mostre o resultado da soma */

const numeros: number[] = [10, 5, 50, 200, 1000];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma);

separador();

/* Tupla
É um tipo de array especial usada quando precisamos armazenar um conjunto fixo de elementos de tipos diferentes. Obs.: se usar readonly, a tupla não poderá ser modificada (somente leitura) */
const usuario: /* readonly */ [string, number, boolean] = ["Sunoo", 12, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");

usuario[1] = 30; // atualizado um valor da tupla
console.log(usuario[1] + " anos.");

separador();

// Criando uma tupla como tipo
type Produto = [string, number];

const produtoA: Produto = ["Camiseta", 29.99];
// const produtoB: Produto = [100, "Calça"] erro, pois está fora do padrão da tupla

console.log(produtoA);
separador();

// Usando tupla no retorno de função
function verificarOperacao(sucesso: boolean): [number, string] {
  if (sucesso) {
    return [200, "Operação realizada com sucesso!"];
  }
  return [500, "Erro inesperado no servidor"];
}

let resultadoDaOperacao = verificarOperacao(true);
console.log(resultadoDaOperacao);
