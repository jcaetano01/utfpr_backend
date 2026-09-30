const express = require("express");
const lodash = require("lodash");
const operacoes = require("./operacoes");

// Resultados no console
console.log("8 + 4 =", operacoes.adicao(8, 4));
console.log("15 - 7 =", operacoes.subtracao(15, 7));
console.log("6 * 3 =", operacoes.multiplicacao(6, 3));
console.log("20 / 5 =", operacoes.divisao(20, 5));
console.log("10 / 0 =", operacoes.divisao(10, 0));
console.log("Número aleatório entre 1 e 30:", lodash.random(1, 30));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(operacoes.router);

const porta = 3000;
app.listen(porta, () => {
  console.log(`Servidor executando em http://localhost:${porta}`);
});
