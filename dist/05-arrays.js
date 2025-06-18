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
(0, modulos_1.separador)();
const linguagens = [
    ["JS", "TS"],
    ["HTML", "CSS", "Bootstrap"],
];
console.log(linguagens[0][0]);
console.log(linguagens[1][0]);
