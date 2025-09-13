const express = require('express');
const app = express();
const port = 3000;

// Para aceitar JSON no corpo da requisição
app.use(express.json());

// Rota que recebe o tipo de operação na URL
app.get('/operacao/:tipo', (req, res) => {
  const { tipo } = req.params;  // Obtém o tipo de operação da URL
  const { numUm, numDois } = req.query; // Obtém os números via query string

  // Verifica se os parâmetros numUm e numDois são válidos
  if (isNaN(numUm) || isNaN(numDois)) {
    return res.status(400).send('Parâmetros numUm e numDois precisam ser números válidos.');
  }

  const num1 = parseFloat(numUm);
  const num2 = parseFloat(numDois);
  let resultado;

  switch (tipo) {
    case 'soma':
      resultado = num1 + num2;
      break;
    case 'subtracao':
      resultado = num1 - num2;
      break;
    case 'multiplicacao':
      resultado = num1 * num2;
      break;
    case 'divisao':
      if (num2 === 0) {
        return res.status(400).send('Divisão por zero não é permitida.');
      }
      resultado = num1 / num2;
      break;
    default:
      return res.status(400).send('Operação inválida. Use: soma, subtracao, multiplicacao ou divisao.');
  }

  res.send(`Resultado: ${resultado}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});