const express = require('express'); // importa o express no projeto
const app = express(); // instâcia do express
const PORT = 8081;


const parseNumber = (numUmStr, numDoisStr ) => {
    const numUm = parseFloat(numUmStr);
    const numDois = parseFloat(numDoisStr);
    return { numUm, numDois };

};

app.get('/soma/:numUm/:numDois', (req, res) => {
   const{numUm, numDois} = parseNumber(req.params.numUm, req.params.numDois);
    
    if (isNaN(numUm) || isNaN(numDois)){
       return res.status(400).send('erro: os valores devem ser numeros validos.');
    }

    const resultado = numUm + numDois;
    res.json({resultado}); 
});

app.get('/subtracao/:numUm/:numDois', (req, res) => {
   const{numUm, numDois} = parseNumber(req.params.numUm, req.params.numDois);
    
    if (isNaN(numUm) || isNaN(numDois)){
       return res.status(400).send('erro: os valores devem ser numeros validos.');
    }

    const resultado = numUm - numDois;
    res.json({resultado}); 
});

app.get('/multiplicacao/:numUm/:numDois', (req, res) => {
   const{numUm, numDois} = parseNumber(req.params.numUm, req.params.numDois);
    
    if (isNaN(numUm) || isNaN(numDois)){
       return res.status(400).send('erro: os valores devem ser numeros validos.');
    }

    const resultado = numUm * numDois;
    res.json({resultado}); 
});

app.get('/divisao/:numUm/:numDois', (req, res) => {
   const{numUm, numDois} = parseNumber(req.params.numUm, req.params.numDois);
    
    if (isNaN(numUm) || isNaN(numDois)){
       return res.status(400).send('erro: os valores devem ser numeros validos.');
    }
    if (numUm == 0 || numDois == 0){
        return res.status(400).send('erro: nao existe divisao por 0')
    }
    const resultado = numUm / numDois;
    res.json({resultado}); 
});


app.listen(PORT, ()=>{
    console.log(`servidor rodando em http://localhost:${PORT}`);
});