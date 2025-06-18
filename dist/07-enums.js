"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Enums são uma maneira de definir um conjunto de constantes nomeadas. Uteis para definir: status, categoria, grupos de valores relacionados etc */
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Domingo"] = "Domingo";
    DiasDaSemana["Segunda"] = "Segunda-feira";
    DiasDaSemana["Ter\u00E7a"] = "Ter\u00E7a-feira";
    DiasDaSemana["Quarta"] = "Quarta-feira";
})(DiasDaSemana || (DiasDaSemana = {}));
const diaAtual = DiasDaSemana.Quarta;
console.log(diaAtual);
