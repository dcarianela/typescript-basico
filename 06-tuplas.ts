import { separador } from "./modulos";

export {};

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
type Resultado = [number, string];

function verificarOperacao(sucesso: boolean): Resultado {
  if (sucesso) {
    return [200, "Operação realizada com sucesso!"];
  }
  return [500, "Erro inesperado no servidor"];
}

let resultadoDaOperacao = verificarOperacao(true);
const [, mensagem] = resultadoDaOperacao;
console.log(mensagem);

separador();
