const express = require('express');
const app = express();
const port = 3000;

app.get('/calculadora', (req, res) => {
  const operacao = req.query.operacao;
  const numUm = parseFloat(req.query.numUm);
  const numDois = parseFloat(req.query.numDois);

  // Verifica se os parâmetros são válidos
  if (!operacao || isNaN(numUm) || isNaN(numDois)) {
    return res.status(400).send('Parâmetros inválidos. Use operacao, numUm e numDois corretamente.');
  }

  let resultado;

  switch (operacao) {
    case 'soma':
      resultado = numUm + numDois;
      break;
    case 'subtracao':
      resultado = numUm - numDois;
      break;
    case 'multiplicacao':
      resultado = numUm * numDois;
      break;
    case 'divisao':
      if (numDois === 0) {
        return res.status(400).send('Divisão por zero não é permitida.');
      }
      resultado = numUm / numDois;
      break;
    default:
      return res.status(400).send('Operação inválida. Use: soma, subtracao, multiplicacao ou divisao.');
  }

  res.send(`Resultado: ${resultado}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});