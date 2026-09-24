//app.js
const http = require("http");
const _ = require("lodash");
const operacoes = require("./operacoes");

//Resultados no console
console.log("8 + 4 =", operacoes.adicao(8, 4));
console.log("15 - 7 =", operacoes.subtracao(15, 7));
console.log("6 * 3 =", operacoes.multiplicacao(6, 3));
console.log("20 / 5 =", operacoes.divisao(20, 5));
console.log("10 / 0 =", operacoes.divisao(10, 0));

//Numero aleatório
console.log("Número aleatório entre 1 e 30:", _.random(1, 30));

//Servidor
const porta = 3000;
const servidor = http.createServer(operacoes.handler);

servidor.listen(porta, () => {
  console.log(`Servidor executando em http://localhost:${porta}`);
});