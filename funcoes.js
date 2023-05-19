function verificaAno(ano) {
  if (ano >= 1920 && ano <= 2020) {
    return true;
  } else {
    return false;
  }
}

function mostraFato(ano, fatos) {
  return fatos[ano - 1920];
}

exports.verificaAno = verificaAno;
exports.mostraFato = mostraFato;
