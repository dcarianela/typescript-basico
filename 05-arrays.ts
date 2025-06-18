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
