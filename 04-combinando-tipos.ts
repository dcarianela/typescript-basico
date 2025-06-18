import { separador } from "./modulos";

export {};

/* Union Types */

// União de tipos literais
let direcao: "esquerda" | "direita"; // valores possíveis
direcao = "esquerda";
console.log(direcao);

direcao = "direita";
console.log(direcao);

separador();

// Criando um novo tipo combinando outros tipos existentes
type NumeroOuTexto = number | string;
let exemploA: NumeroOuTexto = 2112;
let exemploB: NumeroOuTexto = "Senac";
console.log("Exemplo A: " + exemploA);
console.log("Exemplo B: " + exemploB);

separador();

type Status = "ativo" | "inativo" | "pendente";
let situacaoAluno1: Status = "ativo";
let situacaoAluno2: Status = "inativo";
let situacaoAluno3: Status = "pendente";
console.log(situacaoAluno3);

separador();

type DiasDaSemana =
  | "Domingo"
  | "Segunda-feira"
  | "Terça-feira"
  | "Quarta-feira";

const diaAtual: DiasDaSemana = "Quarta-feira";
console.log(diaAtual);

separador();

/* Interseção de Tipos */
type Pessoa = { nome: string; idade: number };
type Funcionario = { salario: number };

const programador: Pessoa & Funcionario = {
  nome: "Heesung",
  idade: 23,
  salario: 10000,
};

console.log(programador);

separador();

// Criando um novo tipo a partir da interseção de outro tipos
type Colaborador = Pessoa & Funcionario;
const outroProgramador: Colaborador = {
  nome: "Sunghoon",
  idade: 22,
  salario: 7000,
};
console.log(outroProgramador);
