const express = require("express");
const app = express();

const dados = require("./dados");
const funcoes = require("./funcoes");

app.get("/", (req, res) => {
  let ano = req.query.ano;
  let json;

  if (funcoes.verificaAno(ano)) {
    json = { ano: ano, fato: funcoes.mostraFato(ano, dados.dados) };
    res.json(json);
  } else {
    res.status(400).json({ Erro: "Dados inválidos" });
  }
});

app.listen(8080, () => {
  console.log("Server iniciado");
});
