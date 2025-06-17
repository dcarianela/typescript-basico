// exercicio01.ts

/*
1) Crie uma função chamada "exibirCor" que aceite:
- nome da pessoa (obrigatorio)
- cor preferida da pessoa (opcional)

Atenção: o parâmetro cor deve ser do tipo Cor e aceitar somente 5 cores.

2) Chame a função pelo menos 2x:
- Na primeira, passe o nome e uma cor(das possíveis)
- Na segunda, passe somente o nome*/

type Cor = "Branco" | "Verde" | "Amarelo" | "Marrom" | "Bege";

function exibirCor(nome: string, cor?: Cor) {
  if (cor) {
    return `Olá ${nome}, sua cor favorita é: ${cor}.`;
  }
  return `Olá ${nome}, não sei sua cor favorita...`;
}

console.log(exibirCor("Sunoo", "Branco"));
console.log(exibirCor("Jake"));
