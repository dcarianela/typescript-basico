"use strict";
// exercicio01.ts
function exibirCor(nome, cor) {
    if (cor) {
        return `Olá ${nome}, sua cor favorita é: ${cor}.`;
    }
    return `Olá ${nome}, não sei sua cor favorita...`;
}
console.log(exibirCor("Sunoo", "Branco"));
console.log(exibirCor("Jake"));
