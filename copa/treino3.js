function dividirEmParcelas(valor, quantidade) {
  const totalCentavos = Math.round(valor * 100);
  const base = Math.floor(totalCentavos / quantidade);
  const resto = totalCentavos - base * quantidade;

  return Array.from({ length: quantidade }, (_, indice) =>
    (indice === 0 ? base + resto : base) / 100
  );
}

const parcelas = dividirEmParcelas(250, 7);

module.exports = {
  parcelas,
  somaCentavos: parcelas.reduce((total, parcela) => total + Math.round(parcela * 100), 0),
  dividirEmParcelas,
};
