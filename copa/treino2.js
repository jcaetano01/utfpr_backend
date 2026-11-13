class FonteDestino {
  static async excluir(db, id, usuarioId) {
    const [resultado] = await db.query(
      'DELETE FROM fontes_destinos WHERE id = ? AND usuario_id = ?',
      [id, usuarioId]
    );

    return resultado.affectedRows > 0;
  }
}

function criarRotasFontesDestinos(router, db) {
  router.delete('/:id', async (req, res) => {
    const excluiu = await FonteDestino.excluir(db, req.params.id, req.auth.id);

    if (!excluiu) {
      return res.status(404).json({ erro: 'Fonte/destino não encontrada.' });
    }

    return res.status(204).end();
  });

  return router;
}

module.exports = {
  problemas: [
    'SQL interpolado com template string em vez de parâmetros ?',
    'SQL colocado em routes/ em vez de models/',
    'Falta de return após a resposta 404, permitindo uma segunda resposta',
  ],
  FonteDestino,
  criarRotasFontesDestinos,
};
