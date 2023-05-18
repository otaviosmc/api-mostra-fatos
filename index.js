const express = require("express");
const app = express();
const converteTemp = require("./funcoes");

app.get("/", (req, res) => {
  let temperatura = req.query.temperatura;
  let conversor = req.query.conversor;

  if (
    converteTemp.verificaNumero(temperatura) &&
    converteTemp.verificaConversor(conversor)
  ) {
    res.json({
      tempConvertida: converteTemp.converteTemperatura(temperatura, conversor),
    });
  } else {
    res.status(400).json({ Erro: "Algum parametro foi digitado errado" });
  }
});

app.listen(8080, () => {
  console.log("Servidor iniciado");
});
