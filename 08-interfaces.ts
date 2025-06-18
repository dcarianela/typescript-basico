export {};

/* Interfaces são usadas para definir a forma de um objeto, especializando os tipos de suas propriedades e métodos. São úteis para garantir que os objetos sigam uma estrutura específica. */

interface Usuario {
  nome: string;
  idade: number;
  ativo: boolean;
  email?: string;
}

const usuarioA: Usuario = {
  nome: "Jake",
  idade: 22,
  ativo: true,
};

const usuarioB: Usuario = {
  nome: "Terry",
  idade: 23,
  ativo: false,
  email: "olhinhos@gmail.com",
};

console.log(usuarioA);
console.log(usuarioB);
