const respostas = [
  { situacao: 'POST /categorias com nome já existente para o mesmo tipo', status: 409 },
  { situacao: 'PUT /fontes-destinos/12 com tipo inválido', status: 400 },
  { situacao: 'GET /relatorios/categorias sem inicio e fim', status: 400 },
  { situacao: 'POST /auth/login com senha errada', status: 401, observacao: 'Mensagem genérica' },
  { situacao: 'GET /rota-que-nao-existe', status: 404, formato: 'JSON' },
  { situacao: 'POST /lancamentos válido', status: 201 },
];

module.exports = respostas;
