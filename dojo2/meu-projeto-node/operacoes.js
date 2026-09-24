const express = require("express");
const router = express.Router();

//Funções
function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
}

//Rotas 
const http = require("http");

const porta = 3000;

const servidor = http.createServer((req, res) => {

//ADICAO
  if (req.method === "GET" && req.url === "/adicao") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      mensagem: "Você esta na rota adição"
    }));
  }

  else if (req.method === "POST" && req.url === "/adicao") {
    let corpo = "";

    req.on("data", (chunk) => {
      corpo += chunk;
    });

    req.on("end", () => {
      const { a, b } = JSON.parse(corpo);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        mensagem: "Requisição POST recebida com sucesso",
        dados: { resultado: adicao(Number(a), Number(b)) }
      }));
    });
  }

  //SUBTRACAO
  if (req.method === "GET" && req.url === "/subtracao") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      mensagem: "Você esta na rota subtração"
    }));
  }

  else if (req.method === "POST" && req.url === "/subtracao") {
    let corpo = "";

    req.on("data", (chunk) => {
      corpo += chunk;
    });

    req.on("end", () => {
      const { a, b } = JSON.parse(corpo);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        mensagem: "Requisição POST recebida com sucesso",
        dados: { resultado: subtracao(Number(a), Number(b)) }
      }));
    });
  }

  //MULTIPLICACAO
  if (req.method === "GET" && req.url === "/multiplicacao") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      mensagem: "Você esta na rota multiplicação"
    }));
  }

  else if (req.method === "POST" && req.url === "/multiplicacao") {
    let corpo = "";

    req.on("data", (chunk) => {
      corpo += chunk;
    });

    req.on("end", () => {
      const { a, b } = JSON.parse(corpo);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        mensagem: "Requisição POST recebida com sucesso",
        dados: { resultado: multiplicacao(Number(a), Number(b)) }
      }));
    });
  }

  //DIVISAO
  if (req.method === "GET" && req.url === "/divisao") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      mensagem: "Você esta na rota divisão"
    }));
  }

  else if (req.method === "POST" && req.url === "/divisao") {
    let corpo = "";

    req.on("data", (chunk) => {
      corpo += chunk;
    });

    req.on("end", () => {
      const { a, b } = JSON.parse(corpo);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        mensagem: "Requisição POST recebida com sucesso",
        dados: { resultado: divisao(Number(a), Number(b)) }
      }));
    });
  }

  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      erro: "Rota não encontrada"
    }));
  }
});

servidor.listen(porta, () => {
  console.log(`Servidor executando em http://localhost:${porta}`);
});