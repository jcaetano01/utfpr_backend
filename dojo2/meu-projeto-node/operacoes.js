const express = require("express");

const router = express.Router();

function adicao(a, b) {
  return Number(a) + Number(b);
}

function subtracao(a, b) {
  return Number(a) - Number(b);
}

function multiplicacao(a, b) {
  return Number(a) * Number(b);
}

function divisao(a, b) {
  if (Number(b) === 0) {
    return "Erro: divisão por zero!";
  }
  return Number(a) / Number(b);
}

router.get("/adicao", (req, res) => {
  if (req.query.a != undefined && req.query.b != undefined) {
    return res.json({ resultado: adicao(req.query.a, req.query.b) });
  }
  return res.json({ mensagem: "Você esta na rota adição" });
});

router.get("/subtracao", (req, res) => {
  if (req.query.a != undefined && req.query.b != undefined) {
    return res.json({ resultado: subtracao(req.query.a, req.query.b) });
  }
  return res.json({ mensagem: "Você esta na rota subtração" });
});

router.get("/multiplicacao", (req, res) => {
  if (req.query.a != undefined && req.query.b !=undefined) {
    return res.json({ resultado: multiplicacao(req.query.a, req.query.b) });
  }
  return res.json({ mensagem: "Você esta na rota multiplicação" });
});

router.get("/divisao", (req, res) => {
  if (req.query.a != undefined && req.query.b != undefined) {
    return res.json({ resultado: divisao(req.query.a, req.query.b) });
  }
  return res.json({ mensagem: "Você esta na rota divisão" });
});

router.post("/adicao", (req, res) => {
  const { a = 0, b = 0 } = req.body;
  if (a === undefined || b === undefined || Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).json({ erro: "Envie valores numéricos para a e b." });
  }
  return res.json({ resultado: adicao(a, b) });
});

router.post("/subtracao", (req, res) => {
  const { a = 0, b = 0 } = req.body;
  if (a === undefined || b === undefined || Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).json({ erro: "Envie valores numéricos para a e b." });
  }
  return res.json({ resultado: subtracao(a, b) });
});

router.post("/multiplicacao", (req, res) => {
  const { a = 0, b = 0 } = req.body;
  if (a === undefined || b === undefined || Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).json({ erro: "Envie valores numéricos para a e b." });
  }
  return res.json({ resultado: multiplicacao(a, b) });
});

router.post("/divisao", (req, res) => {
  const { a = 0, b = 0 } = req.body;
  if (a === undefined || b === undefined || Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).json({ erro: "Envie valores numéricos para a e b." });
  }
  return res.json({ resultado: divisao(a, b) });
});
module.exports = {
  adicao,
  subtracao,
  multiplicacao,
  divisao,
  router,
};




