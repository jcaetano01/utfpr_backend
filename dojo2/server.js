const http = require("http");

const porta = 3000;

const servidor = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      mensagem: "Requisição GET recebida com sucesso"
    }));
  }

  else if (req.method === "POST" && req.url === "/dados") {
    let corpo = "";

    req.on("data", (chunk) => {
      corpo += chunk;
    });

    req.on("end", () => {
      const dadosRecebidos = JSON.parse(corpo);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        mensagem: "Requisição POST recebida com sucesso",
        dados: dadosRecebidos
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